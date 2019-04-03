"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const tough_cookie_1 = require("tough-cookie");
class Connection {
    /**
     * Create a connection. Defers to the private _connect method.
     * @param {string} server - IP or FQDN to send the requests to
     * @param {number} port - Port to use when sending the requests. For https use 443. Defaults to 5015.
     */
    constructor(server = "localhost", port = 5015) {
        this.server = server;
        this.port = port;
        this.https = false;
        this.cookieJar = new tough_cookie_1.CookieJar();
        this.url = this._connect(server, port);
    }
    getCookies() {
        const jar = this.cookieJar;
        const url = this.url;
        const promise = new Promise((resolve, reject) => {
            jar.getCookieString(url, (err, cookies) => {
                if (err) {
                    reject(err.toString());
                    return;
                }
                resolve(cookies);
            });
        });
        return promise;
    }
    setCookie(cookie) {
        const jar = this.cookieJar;
        const url = this.url;
        const promise = new Promise((resolve, reject) => {
            if (!cookie) {
                // no cookie to set here so dont set one
                resolve();
            }
            else {
                const toughCookie = tough_cookie_1.Cookie.parse(cookie);
                if (!toughCookie) {
                    reject(`invalid cookie format provided : ${cookie}`);
                    return;
                }
                jar.setCookie(toughCookie, url, err => {
                    if (err) {
                        reject(err.toString());
                    }
                    else {
                        resolve();
                    }
                });
            }
            return promise;
        });
        return promise;
    }
    /**
     * Private method responsible for posting the XML Request to the endpoint
     * @param {string} body XML request
     */
    async post(body) {
        const headers = {
            "Content-Type": "text/xmlmc",
            Charset: "UTF-8",
            Accept: "text/json",
            "Accept-Charset": "UTF-8",
            "Cache-Control": "no-cache"
        };
        let cookie;
        try {
            cookie = await this.getCookies();
        }
        catch (e) {
            // no cookie to get
        }
        const response = await node_fetch_1.default(this.url, {
            method: "POST",
            headers: cookie ? { cookie, ...headers } : headers,
            body
        });
        if (!response.ok) {
            throw {
                status: false,
                params: {
                    error: "network error",
                    status: response.status,
                    text: response.statusText
                },
                data: []
            };
        }
        try {
            await this.setCookie(response.headers.get('Set-Cookie'));
        }
        catch (e) {
            // couldn't set the cookie
        }
        return (transformResponse(await response.json()));
    }
    /**
     * private connect method. Responsible for inferring https.
     * Creates an instance of axios to use to send requests to and from the server.
     * @param server
     * @param port
     * @returns {*}
     * @private
     */
    _connect(server, port) {
        switch (port) {
            case 443:
                this.https = true;
                return `https://${server}/sw/xmlmc/`;
            case 80:
                return `http://${server}/sw/xmlmc/`;
            default:
                return `http://${server}:${port}/sw`;
        }
    }
    /**
     * @param xmlmc
     * @returns {Promise.<Response>}
     * @throws Module importing error. Occurs if for some reason we were unable to require the underlying modules. Indicates a problem with the library, not the developer.
     */
    sendRequest(xmlmc) {
        return new Promise((resolve, reject) => {
            this.post(xmlmc.toString())
                .then(response => {
                response.status ? resolve(response) : reject(response);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
exports.Connection = Connection;
function transformResponse(response) {
    let { "@status": status, data, ...rest } = response;
    let parsedResponse = Object.assign({ status: status, params: {}, data: [] }, rest);
    data = isIterable(data) && data;
    if (data) {
        if (data.hasOwnProperty("metaData")) {
            parsedResponse.params.metadata = data.metaData;
            delete data.metaData;
        }
        if (data.hasOwnProperty("generatedId")) {
            parsedResponse.params.generatedId = data.generatedId;
            delete data.generatedId;
        }
        parsedResponse.data = handleDataParam(data);
    }
    return parsedResponse;
}
function handleDataParam(data) {
    if (Array.isArray(data)) {
        return data;
    }
    if (data.hasOwnProperty("rowData")) {
        return ((Array.isArray(data.rowData.row) && data.rowData.row) || [
            data.rowData.row
        ]);
    }
    return [data];
}
function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return Object(obj) === obj || typeof obj[Symbol.iterator] === "function";
}
