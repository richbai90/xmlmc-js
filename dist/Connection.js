"use strict";

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const tough_cookie_1 = require("tough-cookie");
const axiosCookieJarSupport = require("@3846masa/axios-cookiejar-support");
class Connection {
    /**
     * Create a connection. Defers to the private _connect method.
     * @param {string} server - IP or FQDN to send the requests to
     * @param {number} port - Port to use when sending the requests. For https use 443. Defaults to 5015.
     */
    constructor(server = 'localhost', port = 5015) {
        this.server = server;
        this.port = port;
        this.https = false;
        this.cookieJar = new tough_cookie_1.CookieJar();
        this.endpoint = null;
        this._setupCookieJar(this.cookieJar, axiosCookieJarSupport);
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
        this.endpoint = axios_1.default.create({
            baseURL: url,
            withCredentials: true,
            headers: {
                "Content-Type": "text/xmlmc",
                "Charset": "UTF-8",
                "Accept": "text/json",
                "Accept-Charset": "UTF-8",
                "Cache-Control": "no-cache"
            },
            transformResponse
        });
    }
    /**
     * @param xmlmc
     * @returns {Promise.<Response>}
     * @throws Module importing error. Occurs if for some reason we were unable to require the underlying modules. Indicates a problem with the library, not the developer.
     */
    sendRequest(xmlmc) {
        const endpoint = this.endpoint;
        return new _promise2.default((resolve, reject) => {
            const post = this.port === 80 || this.https ? '/xmlmc/' : '/sw';
            endpoint.post(post, xmlmc.toString(), { withCredentials: true }).then(response => {
                response.data.status ? resolve(response.data) : reject(response.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    _setupCookieJar(jar, axiosCookieJar) {
        // axiosCookieJar(http);
        // create the cookie jar we will use
        this.cookieJar = jar;
        // create an instnace of axios
        this._connect(this.server, this.port);
        const endpoint = this.endpoint;
        // tell the instance to use the cookie jar
        endpoint.defaults.jar = this.cookieJar;
        // Automatically send the cookie with each request
        endpoint.defaults.withCredentials = true;
        const defaultConfig = endpoint.defaults;
        // Pass the entire URL including the base URL with each post
        // todo: May not be neccessary, but could be good to do the same for get method as well.
        endpoint['post'] = (url, data, config) => {
            let requestConfig = (0, _assign2.default)(config || {}, {
                method: 'POST',
                url: url.match(/^(\/)\w+/) ? defaultConfig.baseURL ? defaultConfig.baseURL + url : url : url === "" ? defaultConfig.baseURL || url : url,
                data: data
            });
            return endpoint.request(requestConfig);
        };
        axiosCookieJar(endpoint);
    }
}
exports.Connection = Connection;
function transformResponse(response) {
    let parsedResponse = JSON.parse(response);
    let { '@status': status, data } = parsedResponse,
        rest = (0, _objectWithoutProperties3.default)(parsedResponse, ['@status', "data"]);
    parsedResponse = (0, _assign2.default)({ status: status, params: {}, data: [] }, rest);
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
function handleDataParam(data) {
    if (Array.isArray(data)) {
        return data;
    }
    if (data.hasOwnProperty('rowData')) {
        return Array.isArray(data.rowData.row) && data.rowData.row || [data.rowData.row];
    }
}
function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return Object(obj) === obj || typeof obj[_iterator2.default] === 'function';
}