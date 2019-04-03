"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        var _this = this;

        // query for the call class if we don't have it yet, and cache it for future.
        if (!this._callClass) return (0, _asyncToGenerator3.default)(function* () {
            return _this._callClass = yield _this.getCallValue('callclass');
        })();
        return (0, _asyncToGenerator3.default)(function* () {
            return _this._callClass;
        })();
    }
    /**
     * Get a promise that resolves with the summary of the call
     * @return {Promise<string>}
     */
    get summary() {
        var _this2 = this;

        if (!this._summary) return (0, _asyncToGenerator3.default)(function* () {
            return _this2._summary = yield _this2.getCallValue('itsm_title');
        })();
        return (0, _asyncToGenerator3.default)(function* () {
            return _this2._summary;
        })();
    }
    /**
     * Get a promise that resolves with the description of the call
     * @return {Promise<string>}
     */
    get description() {
        var _this3 = this;

        if (!this._description) return (0, _asyncToGenerator3.default)(function* () {
            return _this3._description = yield _this3.getCallValue('prob_text');
        })();
        return (0, _asyncToGenerator3.default)(function* () {
            return _this3._description;
        })();
    }
    /**
     * Get a promise that resolves with the owner id of the call
     * @return {Promise<string>}
     */
    get owner() {
        var _this4 = this;

        if (!this._owner) return (0, _asyncToGenerator3.default)(function* () {
            return _this4._owner = yield _this4.getCallValue('owner');
        })();
        return (0, _asyncToGenerator3.default)(function* () {
            return _this4._owner;
        })();
    }
    /**
     * Get a promise that resolves with the Customer details of the call
     * @return {Promise<Customer>}
     */
    get customer() {
        var _this5 = this;

        if (!this._customer) {
            return (0, _asyncToGenerator3.default)(function* () {
                return _this5._customer = (0, _assign2.default)({
                    fullname: '',
                    firstname: '',
                    lastname: '',
                    telephonenumber: '',
                    email: '',
                    department: '',
                    company: '',
                    site: ''
                }, (yield _this5._xmlmc.data.sqlQuery("swdata", `select fullname as fullName, firstname as firstName, surname as lastName, telext as telephoneNumber, email, department, userdb.companyname as company, userdb.site from userdb join opencall on userdb.keysearch = opencall.cust_id where opencall.callref = ${_this5.reference}`)).data[0]);
            })();
        }
        return (0, _asyncToGenerator3.default)(function* () {
            return _this5._customer;
        })();
    }
    /**
     * Get a promise that resolves with the numeric Status of the call Corresponding to the Call.Status ENUM
     * @return {Promise<Status>}
     */
    get status() {
        var _this6 = this;

        if (!this._status) return (0, _asyncToGenerator3.default)(function* () {
            _this6._status = parseInt((yield _this6.getCallValue('status')));
            return _this6._status;
        })();
        return (0, _asyncToGenerator3.default)(function* () {
            return _this6._status;
        })();
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
        var _this7 = this;

        if (!this._logDateX) return (0, _asyncToGenerator3.default)(function* () {
            _this7._logDateX = parseInt((yield _this7.getCallValue('logdatex')));
            return new Date(_this7._logDateX * 1000);
        })();
        return (0, _asyncToGenerator3.default)(function* () {
            return new Date(_this7._logDateX * 1000);
        })();
    }
    /**
     * Get a promise that resolves with the latest update of the call
     * @return {Promise<string>}
     */
    get latestUpdate() {
        var _this8 = this;

        if (!this._lastUpdateText) return (0, _asyncToGenerator3.default)(function* () {
            return _this8._lastUpdateText = yield _this8.getCallValue('last_text');
        })();
        return (0, _asyncToGenerator3.default)(function* () {
            return _this8._lastUpdateText;
        })();
    }
    /**
     * Add an update to the call.
     * @param {string} text
     * @return {Call}
     */
    update(text) {
        var _this9 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield _this9._xmlmc.helpdesk.updateCalls(_this9.reference, 5, text).then(function () {
                console.log(text);
                _this9._lastUpdateText = text;
                return text;
            }).catch(function (e) {
                throw e;
            });
            return _this9;
        })();
    }
    /**
     * Assign the call to a new owner.
     * @param {string} group
     * @param {string} owner Owner ID
     * @return {Call}
     */
    assignTo(group, owner) {
        var _this10 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield (owner ? _this10._xmlmc.helpdesk.assignCalls(_this10.reference, group, { analystId: owner }) : _this10._xmlmc.helpdesk.assignCalls(_this10.reference, group)).then(function () {
                _this10._owner = owner || group;
                // invalidate the lastUpdateText Cache
                _this10._lastUpdateText = null;
            }).catch(function (e) {
                throw e;
            });
            return _this10;
        })();
    }
    /**
     * Place the call on hold.
     * @return {Call}
     */
    placeOnHold(holdUntil, holdReason) {
        var _this11 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield _this11._xmlmc.helpdesk.holdCalls(_this11.reference, 5, holdReason, holdUntil).then(function () {
                _this11._status = Status.OnHold;
                _this11._lastUpdateText = holdReason;
            }).catch(function (e) {
                throw e;
            });
            return _this11;
        })();
    }
    /**
     * Take the call off hold.
     * @return {Call}
     */
    takeOffHold() {
        var _this12 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield _this12._xmlmc.helpdesk.takeCallsOffHold(_this12.reference).then(function () {
                _this12._status = Status.OffHold;
            }).catch(function (e) {
                throw e;
            });
            return _this12;
        })();
    }
    /**
     * Cancel the call.
     * @param {string} cancelReason
     * @return {Call}
     */
    cancel(cancelReason) {
        var _this13 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield _this13._xmlmc.helpdesk.cancelCalls(_this13.reference, cancelReason).then(function () {
                _this13._status = Status.Cancelled;
                _this13._lastUpdateText = cancelReason;
            }).catch(function (e) {
                throw e;
            });
            return _this13;
        })();
    }
    /**
     * Resolve the call.
     * @param {string} resolution
     * @return {Call}
     */
    resolve(resolution) {
        var _this14 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield _this14._xmlmc.helpdesk.resolveCalls(_this14.reference, 5, resolution).then(function () {
                _this14._status = Status.Resolved;
                _this14._lastUpdateText = resolution;
            }).catch(function (e) {
                throw e;
            });
            return _this14;
        })();
    }
    /**
     * Close the call.
     * @param {string} closureDetails
     * @return {Call}
     */
    close(closureDetails) {
        var _this15 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield _this15._xmlmc.helpdesk.closeCalls(_this15.reference, 5, closureDetails).then(function () {
                _this15._status = Status.Closed;
                _this15._lastUpdateText = closureDetails;
            }).catch(function (e) {
                throw e;
            });
            return _this15;
        })();
    }
    /**
     * Reactivate the call if it is closed/resolved.
     * @return {Call}
     */
    reactivate() {
        var _this16 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield _this16._xmlmc.helpdesk.reactivateCalls(_this16.reference).then(function () {
                _this16.getCallValue("status").then(function (s) {
                    _this16._status = parseInt(s);
                });
            }).catch(function (e) {
                throw e;
            });
            return _this16;
        })();
    }
    /**
     * Accept the call in the context of the current analyst.
     * @return {Call}
     */
    accept() {
        var _this17 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield _this17._xmlmc.helpdesk.acceptCalls(_this17.reference).then(function () {
                _this17._status = Status.Pending;
            }).catch(function (e) {
                throw e;
            });
            return _this17;
        })();
    }
    /**
     * Add the call to the current user's watch list.
     * @return {Call}
     */
    addToWatchlist() {
        var _this18 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            yield _this18._xmlmc.helpdesk.watchCalls(_this18.reference);
            return _this18;
        })();
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
        return _promise2.default.resolve(this);
    }
    /**
     * Gets a call value from the database filtered by the callref.
     * @param {string} field
     * @return {Promise<string>}
     */
    getCallValue(field) {
        var _this19 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            const result = yield _this19._xmlmc.data.sqlQuery('swdata', `SELECT ${field} FROM opencall WHERE callref = ${_this19.reference} `);
            return result.data[0][field];
        })();
    }
}
exports.CallRecord = CallRecord;