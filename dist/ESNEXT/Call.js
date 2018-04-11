"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Unassigned"] = 2] = "Unassigned";
    Status[Status["Unaccepted"] = 3] = "Unaccepted";
    Status[Status["OnHold"] = 4] = "OnHold";
    Status[Status["OffHold"] = 5] = "OffHold";
    Status[Status["Resolved"] = 6] = "Resolved";
    Status[Status["Incoming"] = 8] = "Incoming";
    Status[Status["EscalatedToOwner"] = 9] = "EscalatedToOwner";
    Status[Status["EscalatedToGroup"] = 10] = "EscalatedToGroup";
    Status[Status["EscalatedToServiceDesk"] = 11] = "EscalatedToServiceDesk";
    Status[Status["Lost"] = 15] = "Lost";
    Status[Status["Closed"] = 16] = "Closed";
    Status[Status["Cancelled"] = 17] = "Cancelled";
    Status[Status["ClosedAsChargeable"] = 18] = "ClosedAsChargeable";
})(Status = exports.Status || (exports.Status = {}));
/**
 * An abstraction of the API for improved call handling. Represents an existing call allowing for simple call updates
 * assignments, status changes, etc. Supports method chaining. Supports all methods in constant O(1) time.
 */
class CallRecord {
    /**
     * Construct a new call object.
     * @param {number} callref
     * @param {XmlMethodCall} xmlmc
     */
    constructor(callref, xmlmc) {
        this._logDateX = null;
        this._lastUpdateText = null;
        this._callClass = null;
        this._summary = null;
        this._description = null;
        this._owner = null;
        this._customer = null;
        this._status = null;
        this._callref = callref;
        this._xmlmc = xmlmc;
    }
    /**
     * Get a promise that resolves with the call class
     * @return {Promise<string>}
     */
    get callClass() {
        // query for the call class if we don't have it yet, and cache it for future.
        if (!this._callClass)
            return (async () => this._callClass = await this.getCallValue('callclass'))();
        return (async () => this._callClass)();
    }
    /**
     * Get a promise that resolves with the summary of the call
     * @return {Promise<string>}
     */
    get summary() {
        if (!this._summary)
            return (async () => this._summary = await this.getCallValue('itsm_title'))();
        return (async () => this._summary)();
    }
    /**
     * Get a promise that resolves with the description of the call
     * @return {Promise<string>}
     */
    get description() {
        if (!this._description)
            return (async () => this._description = await this.getCallValue('prob_text'))();
        return (async () => this._description)();
    }
    /**
     * Get a promise that resolves with the owner id of the call
     * @return {Promise<string>}
     */
    get owner() {
        if (!this._owner)
            return (async () => this._owner = await this.getCallValue('owner'))();
        return (async () => this._owner)();
    }
    /**
     * Get a promise that resolves with the Customer details of the call
     * @return {Promise<Customer>}
     */
    get customer() {
        if (!this._customer) {
            return (async () => this._customer = Object.assign({
                fullname: '',
                firstname: '',
                lastname: '',
                telephonenumber: '',
                email: '',
                department: '',
                company: '',
                site: '',
            }, (await this._xmlmc.data.sqlQuery("swdata", `select fullname as fullName, firstname as firstName, surname as lastName, telext as telephoneNumber, email, department, userdb.companyname as company, userdb.site from userdb join opencall on userdb.keysearch = opencall.cust_id where opencall.callref = ${this.reference}`)).data[0]))();
        }
        return (async () => this._customer)();
    }
    /**
     * Get a promise that resolves with the numeric Status of the call Corresponding to the Call.Status ENUM
     * @return {Promise<Status>}
     */
    get status() {
        if (!this._status)
            return (async () => {
                this._status = parseInt(await this.getCallValue('status'));
                return this._status;
            })();
        return (async () => this._status)();
    }
    /**
     * Get the call reference
     * @return {number}
     */
    get reference() {
        return this._callref;
    }
    /**
     * Get a promise resolves with a Date object of the log date
     * @return {Promise<Date>}
     */
    get logDate() {
        if (!this._logDateX)
            return (async () => {
                this._logDateX = parseInt(await this.getCallValue('logdatex'));
                return new Date(this._logDateX * 1000);
            })();
        return (async () => new Date(this._logDateX * 1000))();
    }
    /**
     * Get a promise that resolves with the latest update of the call
     * @return {Promise<string>}
     */
    get latestUpdate() {
        if (!this._lastUpdateText)
            return (async () => this._lastUpdateText = await this.getCallValue('last_text'))();
        return (async () => this._lastUpdateText)();
    }
    /**
     * Add an update to the call.
     * @param {string} text
     * @return {Call}
     */
    async update(text) {
        await this._xmlmc.helpdesk.updateCalls(this.reference, 5, text).then(() => {
            console.log(text);
            this._lastUpdateText = text;
            return text;
        }).catch(e => {
            throw e;
        });
        return this;
    }
    /**
     * Assign the call to a new owner.
     * @param {string} group
     * @param {string} owner Owner ID
     * @return {Call}
     */
    async assignTo(group, owner) {
        await (owner ? this._xmlmc.helpdesk.assignCalls(this.reference, group, { analystId: owner }) : this._xmlmc.helpdesk.assignCalls(this.reference, group))
            .then(() => {
            this._owner = owner || group;
            // invalidate the lastUpdateText Cache
            this._lastUpdateText = null;
        }).catch(e => {
            throw e;
        });
        return this;
    }
    /**
     * Place the call on hold.
     * @return {Call}
     */
    async placeOnHold(holdUntil, holdReason) {
        await this._xmlmc.helpdesk.holdCalls(this.reference, 5, holdReason, holdUntil).then(() => {
            this._status = Status.OnHold;
            this._lastUpdateText = holdReason;
        }).catch(e => {
            throw e;
        });
        return this;
    }
    /**
     * Take the call off hold.
     * @return {Call}
     */
    async takeOffHold() {
        await this._xmlmc.helpdesk.takeCallsOffHold(this.reference).then(() => {
            this._status = Status.OffHold;
        }).catch(e => {
            throw e;
        });
        return this;
    }
    /**
     * Cancel the call.
     * @param {string} cancelReason
     * @return {Call}
     */
    async cancel(cancelReason) {
        await this._xmlmc.helpdesk.cancelCalls(this.reference, cancelReason).then(() => {
            this._status = Status.Cancelled;
            this._lastUpdateText = cancelReason;
        }).catch(e => {
            throw e;
        });
        return this;
    }
    /**
     * Resolve the call.
     * @param {string} resolution
     * @return {Call}
     */
    async resolve(resolution) {
        await this._xmlmc.helpdesk.resolveCalls(this.reference, 5, resolution).then(() => {
            this._status = Status.Resolved;
            this._lastUpdateText = resolution;
        }).catch(e => {
            throw e;
        });
        return this;
    }
    /**
     * Close the call.
     * @param {string} closureDetails
     * @return {Call}
     */
    async close(closureDetails) {
        await this._xmlmc.helpdesk.closeCalls(this.reference, 5, closureDetails).then(() => {
            this._status = Status.Closed;
            this._lastUpdateText = closureDetails;
        }).catch(e => {
            throw e;
        });
        return this;
    }
    /**
     * Reactivate the call if it is closed/resolved.
     * @return {Call}
     */
    async reactivate() {
        await this._xmlmc.helpdesk.reactivateCalls(this.reference).then(() => {
            this.getCallValue("status").then(s => {
                this._status = parseInt(s);
            });
        }).catch(e => {
            throw e;
        });
        return this;
    }
    /**
     * Accept the call in the context of the current analyst.
     * @return {Call}
     */
    async accept() {
        await this._xmlmc.helpdesk.acceptCalls(this.reference).then(() => {
            this._status = Status.Pending;
        }).catch(e => {
            throw e;
        });
        return this;
    }
    /**
     * Add the call to the current user's watch list.
     * @return {Call}
     */
    async addToWatchlist() {
        await this._xmlmc.helpdesk.watchCalls(this.reference);
        return this;
    }
    invalidateCache() {
        this._logDateX = null;
        this._lastUpdateText = null;
        this._callClass = null;
        this._summary = null;
        this._description = null;
        this._owner = null;
        this._customer = null;
        this._status = null;
        return Promise.resolve(this);
    }
    /**
     * Gets a call value from the database filtered by the callref.
     * @param {string} field
     * @return {Promise<string>}
     */
    async getCallValue(field) {
        const result = await this._xmlmc.data.sqlQuery('swdata', `SELECT ${field} FROM opencall WHERE callref = ${this.reference} `);
        return result.data[0][field];
    }
}
exports.CallRecord = CallRecord;
