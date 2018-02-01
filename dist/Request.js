"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const xmlbuilder_1 = require("xmlbuilder");
class Request {
    constructor(service, method, params = {}, paramMap) {
        this.service = service;
        this.method = method;
        this.xmlmc = xmlbuilder_1.create('methodCall').att('service', service).att('method', method);
        this.paramsNotSet = true;
        if (params) {
            this.addParams(params, paramMap);
        }
    }
    _createXmlmc(params, el = this.xmlmc, key = 'params') {
        if (typeof el === 'string') {
            key = el;
        }
        if (el === this.xmlmc && this.paramsNotSet) {
            el = el.ele(key);
            this.paramsNotSet = false;
        }
        const paramKeys = Object.keys(params);
        paramKeys.forEach(p => {
            let param = params[p];
            if (param === undefined) {
                return;
            }
            if (Object.getPrototypeOf(param) === Object.prototype) {
                el = el.ele(p);
                this._createXmlmc(params[p], el);
            } else {
                el.ele(p, param.toString());
            }
        });
    }
    /**
     * Add a simple / complex param
     * @param {Params} param
     * @param {string} value
     */
    addParam(param, value) {
        const params = {};
        params[param] = value;
        this._createXmlmc(params);
    }
    /**
     * Add all the params at once
     * @param {Params} params
     * @param paramMap
     */
    addParams(params, paramMap) {
        let orderedParams = {};
        // ensure that all the params are in the proper order
        paramMap.forEach(v => {
            if (params.hasOwnProperty(v)) {
                orderedParams[v] = params[v];
            }
        });
        this._createXmlmc(orderedParams);
    }
    toString() {
        return this.xmlmc.toString();
    }
}
exports.Request = Request;