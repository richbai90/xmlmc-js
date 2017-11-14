'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Connection = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
        this.storeCookies = typeof window === 'undefined';
        this._connect(server, port);
    }

    /**
     * private connect method. Responsible for inferring https.
     * Creates an instance of axios to use to send requests to and from the server.
     * @param server
     * @param port
     * @returns {*}
     * @private
     */
    _connect(server = 'localhost', port = 5015) {
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

        this.endpoint = _axios2.default.create({
            baseURL: url,
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
     * Ensures that the cookies are sent and received correctly based on the environment.
     * Asynchronously loads tough-cookie & axios-cookie-jar if the environment is node vs browser
     * Returns true once all the files are loaded and configurations made. Returns an error otherwise.
     * @returns {Promise.<boolean>}
     * @private
     */
    _ready() {
        if (this.storeCookies) {
            if (typeof this.cookieJar === 'undefined') {
                return Promise.all([Promise.resolve().then(() => require('tough-cookie')), Promise.resolve().then(() => require('@3846masa/axios-cookiejar-support'))]).then(imports => {
                    let tough, axiosCookieJar;
                    [tough, axiosCookieJar] = imports;
                    setupCookieJar.call(this, ...imports);
                    // axiosCookieJar(http);
                }).then(() => true).catch(e => e);
            }

            // If the cookieJar is already setup no need to import again.

            return Promise.resolve(true);
        }

        // If we don't need to explicitly store the cookies we can just assume we're ready.
        return Promise.resolve(true);
    }

    /**
     * @param xmlmc
     * @returns {Promise.<Response>}
     * @throws Module importing error. Occurs if for some reason we were unable to require the underlying modules. Indicates a problem with the library, not the developer.
     */
    sendRequest(xmlmc) {
        var _this = this;

        return _asyncToGenerator(function* () {

            // Make sure we are ready to send a request
            const ready = yield _this._ready();
            if (ready === true) {
                return new Promise(function (resolve, reject) {
                    const post = _this.port === 80 || _this.https ? '/xmlmc/' : '/sw';
                    _this.endpoint.post(post, xmlmc.toString()).then(function (response) {
                        response.data.status ? resolve(response.data) : reject(response.data);
                    }).catch(function (err) {
                        reject(err);
                    });
                });
            } else {
                throw ready;
            }
        })();
    }

}

exports.Connection = Connection; // Helper method to setup the cookieJar correctly.

function setupCookieJar(tough, axiosCookieJar) {
    // axios cookie jar support
    axiosCookieJar(_axios2.default);
    // create the cookie jar we will use
    this.cookieJar = new tough.CookieJar();
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

    ['post', 'put', 'patch'].forEach(method => {
        endpoint[method] = (url, data, config) => {
            return endpoint.request(Object.assign(config || {}, {
                method: method,
                url: url.match(/^(\/)\w+/) ? defaultConfig.baseURL ? defaultConfig.baseURL + url : url : url === "" ? defaultConfig.baseURL || url : url,
                data: data
            }));
        };
    });
}

function transformResponse(response) {
    response = JSON.parse(response);
    let { '@status': status, data } = response,
        rest = _objectWithoutProperties(response, ['@status', 'data']);
    response = Object.assign({ status: status, params: {}, data: [] }, rest);

    data = isIterable(data) && data;
    if (data) {
        response.data = handleDataParam(data);

        if (data.hasOwnProperty('metaData')) {
            response.params.metadata = data.metaData;
        }

        if (data.hasOwnProperty('generatedId')) {
            response.params.generatedId = data.generatedId;
        }
    }

    return response;
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

    return Object(obj) === obj || typeof obj[Symbol.iterator] === 'function';
}