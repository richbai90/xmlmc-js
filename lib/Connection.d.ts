import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Request } from "./Request";
import { CookieJar } from "tough-cookie";
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
        [index: string]: string;
    }>;
    params: {
        [index: string]: string;
    };
}
export declare class Connection {
    protected server: string;
    protected port: number;
    protected https: boolean;
    protected storeCookies: boolean;
    protected endpoint: AxiosInstance;
    protected cookieJar: CookieJar;
    /**
     * Create a connection. Defers to the private _connect method.
     * @param {string} server - IP or FQDN to send the requests to
     * @param {number} port - Port to use when sending the requests. For https use 443. Defaults to 5015.
     */
    constructor(server?: string, port?: number);
    /**
     * private connect method. Responsible for inferring https.
     * Creates an instance of axios to use to send requests to and from the server.
     * @param server
     * @param port
     * @returns {*}
     * @private
     */
    private _connect(server, port);
    /**
     * @param xmlmc
     * @returns {Promise.<Response>}
     * @throws Module importing error. Occurs if for some reason we were unable to require the underlying modules. Indicates a problem with the library, not the developer.
     */
    sendRequest(xmlmc: Request): Promise<AxiosResponse['data'] | AxiosError>;
    private _setupCookieJar(jar, axiosCookieJar);
}
