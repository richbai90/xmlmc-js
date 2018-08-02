import { XmlMethodCall } from "./";
export declare enum Status {
    Pending = 1,
    Unassigned = 2,
    Unaccepted = 3,
    OnHold = 4,
    OffHold = 5,
    Resolved = 6,
    Incoming = 8,
    EscalatedToOwner = 9,
    EscalatedToGroup = 10,
    EscalatedToServiceDesk = 11,
    Lost = 15,
    Closed = 16,
    Cancelled = 17,
    ClosedAsChargeable = 18
}
export interface Customer {
    fullname: string;
    firstname: string;
    lastname: string;
    telephonenumber: string;
    email: string;
    department: string;
    company: string;
    site: string;
    [key: string]: string;
}
/**
 * An abstraction of the API for improved call handling. Represents an existing call allowing for simple call updates
 * assignments, status changes, etc. Supports method chaining. Supports all methods in constant O(1) time.
 */
export declare class CallRecord {
    [key: string]: any;
    private _callref;
    private _logDateX;
    private _lastUpdateText;
    private _xmlmc;
    private _callClass;
    private _summary;
    private _description;
    private _owner;
    private _customer;
    private _status;
    /**
     * Construct a new call object.
     * @param {number} callref
     * @param {XmlMethodCall} xmlmc
     */
    constructor(callref: number, xmlmc: XmlMethodCall);
    /**
     * Get a promise that resolves with the call class
     * @return {Promise<string>}
     */
    readonly callClass: Promise<string>;
    /**
     * Get a promise that resolves with the summary of the call
     * @return {Promise<string>}
     */
    readonly summary: Promise<string>;
    /**
     * Get a promise that resolves with the description of the call
     * @return {Promise<string>}
     */
    readonly description: Promise<string>;
    /**
     * Get a promise that resolves with the owner id of the call
     * @return {Promise<string>}
     */
    readonly owner: Promise<string>;
    /**
     * Get a promise that resolves with the Customer details of the call
     * @return {Promise<Customer>}
     */
    readonly customer: Promise<Customer>;
    /**
     * Get a promise that resolves with the numeric Status of the call Corresponding to the Call.Status ENUM
     * @return {Promise<Status>}
     */
    readonly status: Promise<Status>;
    /**
     * Get the call reference
     * @return {number}
     */
    readonly reference: number;
    /**
     * Get a promise resolves with a Date object of the log date
     * @return {Promise<Date>}
     */
    readonly logDate: Promise<Date>;
    /**
     * Get a promise that resolves with the latest update of the call
     * @return {Promise<string>}
     */
    readonly latestUpdate: Promise<string>;
    /**
     * Add an update to the call.
     * @param {string} text
     * @return {Call}
     */
    update(text: string): Promise<CallRecord>;
    /**
     * Assign the call to a new owner.
     * @param {string} group
     * @param {string} owner Owner ID
     * @return {Call}
     */
    assignTo(group: string, owner?: string): Promise<CallRecord>;
    /**
     * Place the call on hold.
     * @return {Call}
     */
    placeOnHold(holdUntil: Date, holdReason: string): Promise<CallRecord>;
    /**
     * Take the call off hold.
     * @return {Call}
     */
    takeOffHold(): Promise<CallRecord>;
    /**
     * Cancel the call.
     * @param {string} cancelReason
     * @return {Call}
     */
    cancel(cancelReason: string): Promise<CallRecord>;
    /**
     * Resolve the call.
     * @param {string} resolution
     * @return {Call}
     */
    resolve(resolution: string): Promise<CallRecord>;
    /**
     * Close the call.
     * @param {string} closureDetails
     * @return {Call}
     */
    close(closureDetails: string): Promise<CallRecord>;
    /**
     * Reactivate the call if it is closed/resolved.
     * @return {Call}
     */
    reactivate(): Promise<CallRecord>;
    /**
     * Accept the call in the context of the current analyst.
     * @return {Call}
     */
    accept(): Promise<CallRecord>;
    /**
     * Add the call to the current user's watch list.
     * @return {Call}
     */
    addToWatchlist(): Promise<CallRecord>;
    invalidateCache(): Promise<CallRecord>;
    /**
     * Gets a call value from the database filtered by the callref.
     * @param {string} field
     * @return {Promise<string>}
     */
    private getCallValue;
}
