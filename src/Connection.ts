import http, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import {Request} from "./Request";
import {CookieJar} from "tough-cookie";
import axiosCookieJarSupport = require('@3846masa/axios-cookiejar-support');

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
    [index : string] : any;
    status: boolean;
    data: Array<{[index : string] : any}>;
    params: {[index : string] : any};
}

export class Connection {

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
    constructor(server: string = 'localhost', port: number = 5015) {
        this.server = server;
        this.port = port;
        this.https = false;
        this.storeCookies = typeof window === 'undefined';
        if (this.storeCookies) {
            this._setupCookieJar(new CookieJar(), axiosCookieJarSupport);
        } else {
            this._connect(server, port);
        }
    }

    /**
     * private connect method. Responsible for inferring https.
     * Creates an instance of axios to use to send requests to and from the server.
     * @param server
     * @param port
     * @returns {*}
     * @private
     */
    private _connect(server: string, port: number): void {
        let url;
        switch (port) {
            case 443:
                this.https = true;
                url = `https://${server}/sw/`;
                break;
            case 80:
                url = `http://${server}/sw/`;
                break;
            default:
                url = `http://${server}:${port}`;
        }


        this.endpoint = http.create({
            baseURL: url,
            withCredentials: true,
            headers: {
                "Content-Type": "text/xmlmc",
                "Charset": "UTF-8",
                "Accept": "text/json",
                "Accept-Charset": "UTF-8",
                "Cache-Control": "no-cache",
            },
            transformResponse,
        });

    }

    /**
     * @param xmlmc
     * @returns {Promise.<Response>}
     * @throws Module importing error. Occurs if for some reason we were unable to require the underlying modules. Indicates a problem with the library, not the developer.
     */
    async sendRequest(xmlmc: Request): Promise<XmlmcResponse> {
        return new Promise<XmlmcResponse>((resolve, reject) => {
            const post: string = this.port === 80 || this.https ? '/xmlmc/' : '/sw';
            this.endpoint.post(post, xmlmc.toString(), {withCredentials: true}).then((response: AxiosResponse) => {
                response.data.status ? resolve(<XmlmcResponse>response.data) : reject(response.data);
            }).catch((err: AxiosError) => {
                reject(err);
            });
        })
    }

    private _setupCookieJar(jar: CookieJar, axiosCookieJar: (instance: AxiosInstance) => AxiosInstance): void {
        axiosCookieJar(http);

        // create the cookie jar we will use
        this.cookieJar = jar;
        // create an instnace of axios
        this._connect(this.server, this.port);
        // tell the instance to use the cookie jar
        this.endpoint.defaults.jar = this.cookieJar;
        // Automatically send the cookie with each request
        this.endpoint.defaults.withCredentials = true;

        const endpoint = this.endpoint;
        const defaultConfig = endpoint.defaults;

        // Pass the entire URL including the base URL with each post
        // todo: May not be neccessary, but could be good to do the same for get method as well.


        endpoint['post'] = (url: string, data: AxiosResponse['data'], config: AxiosRequestConfig) => {
            let requestConfig = Object.assign(config || {}, {
                method: 'POST',
                url: url.match(/^(\/)\w+/) ? (defaultConfig.baseURL ? defaultConfig.baseURL + url : url) : (url === "" ? (defaultConfig.baseURL || url) : url),
                data: data,
            });
            return endpoint.request(requestConfig)
        }

    }
}

function transformResponse(response: string) {
    let parsedResponse: AxiosResponse['data'] = JSON.parse(response);
    let {'@status': status, data, ...rest} = parsedResponse;
    parsedResponse = Object.assign({status: status, params: {}, data: []}, rest);

    data = isIterable(data) && data;
    if (data) {
        parsedResponse.data = handleDataParam(data);

        if (data.hasOwnProperty('metaData')) {
            parsedResponse.params.metadata = data.metaData;
        }

        if (data.hasOwnProperty('generatedId')) {
            parsedResponse.params.generatedId = data.generatedId;
        }
    }

    return parsedResponse;
}

function handleDataParam(data: AxiosResponse['data']): AxiosResponse['data'] {
    if (Array.isArray(data)) {
        return data;
    }
    if (data.hasOwnProperty('rowData')) {
        return (Array.isArray(data.rowData.row) && data.rowData.row) || [data.rowData.row];
    }
}

function isIterable(obj: any): boolean {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }

    return Object(obj) === obj || typeof obj[Symbol.iterator] === 'function';
}


