import { Request } from "../Request";
/**
 * @typedef {Object} Response
 * @param {boolean} status
 * @param {Object} params
 */
/**
 * Class represents a server connection.
 * Responsible for maintaining a connection to the server.
 * Ensures that a cookie is saved each time a request is sent and received.
 */
export interface XmlmcResponse {
    [index: string]: any;
    status: boolean;
    data: Array<{
        [index: string]: any;
    }>;
    params: {
        [index: string]: any;
    };
}
export declare class Connection {
    protected server: string;
    protected port: number;
    protected https: boolean;
    private cookie;
    private url;
    /**
     * Create a connection. Defers to the private _connect method.
     * @param {string} server - IP or FQDN to send the requests to
     * @param {number} port - Port to use when sending the requests. For https use 443. Defaults to 5015.
     */
    constructor(server?: string, port?: number);
    getCookie(): string | null;
    private setCookie;
    /**
     * Private method responsible for posting the XML Request to the endpoint
     * @param {string} body XML request
     */
    private post;
    /**
     * private connect method. Responsible for inferring https.
     * Creates an instance of axios to use to send requests to and from the server.
     * @param server
     * @param port
     * @returns {*}
     * @private
     */
    private _connect;
    /**
     * @param xmlmc
     * @returns {Promise.<Response>}
     * @throws Module importing error. Occurs if for some reason we were unable to require the underlying modules. Indicates a problem with the library, not the developer.
     */
    sendRequest(xmlmc: Request): Promise<XmlmcResponse>;
}
export interface ParsedResponse {
    status: boolean;
    params: {
        [p: string]: any;
    };
    data: Array<{
        [p: string]: any;
    }>;
}
