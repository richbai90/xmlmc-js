"use strict";

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        const promise = new _promise2.default((resolve, reject) => {
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
        const promise = new _promise2.default((resolve, reject) => {
            if (!cookie) {
                // no cookie to set here so dont set one
                resolve();
            } else {
                const toughCookie = tough_cookie_1.Cookie.parse(cookie);
                if (!toughCookie) {
                    reject(`invalid cookie format provided : ${cookie}`);
                    return;
                }
                jar.setCookie(toughCookie, url, err => {
                    if (err) {
                        reject(err.toString());
                    } else {
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
    post(body) {
        var _this = this;

        return (0, _asyncToGenerator3.default)(function* () {
            const headers = {
                "Content-Type": "text/xmlmc",
                Charset: "UTF-8",
                Accept: "text/json",
                "Accept-Charset": "UTF-8",
                "Cache-Control": "no-cache"
            };
            let cookie;
            try {
                cookie = yield _this.getCookies();
            } catch (e) {
                // no cookie to get
            }
            const response = yield node_fetch_1.default(_this.url, {
                method: "POST",
                headers: cookie ? (0, _extends3.default)({ cookie }, headers) : headers,
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
                yield _this.setCookie(response.headers.get('Set-Cookie'));
            } catch (e) {
                // couldn't set the cookie
            }
            return transformResponse((yield response.json()));
        })();
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
        return new _promise2.default((resolve, reject) => {
            this.post(xmlmc.toString()).then(response => {
                response.status ? resolve(response) : reject(response);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
exports.Connection = Connection;
function transformResponse(response) {
    let { "@status": status, data } = response,
        rest = (0, _objectWithoutProperties3.default)(response, ["@status", "data"]);
    let parsedResponse = (0, _assign2.default)({ status: status, params: {}, data: [] }, rest);
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
        return Array.isArray(data.rowData.row) && data.rowData.row || [data.rowData.row];
    }
    return [data];
}
function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return Object(obj) === obj || typeof obj[_iterator2.default] === "function";
}