import {create, XMLElementOrXMLNode} from 'xmlbuilder';
import {XmlmcParam, XmlmcParams, XmlmcRequest, InputData} from './types/XmlmcTypes'

export class Request implements XmlmcRequest {

    service: string;
    method: string;
    paramsNotSet: boolean;
    xmlmc: XMLElementOrXMLNode;

    constructor(service: string, method: string, params: XmlmcParams = {}, paramMap: Array<string>, inputData? : InputData) {
        this.service = service;
        this.method = method;
        this.xmlmc = create('methodCall').att('service', service).att('method', method);
        this.paramsNotSet = true;

        if (Object.keys(params).length) {
            this.addParams(params, paramMap);
        }

        if(inputData) {
            this.addData(inputData);
        }
    }


    _createXmlmc(params: XmlmcParams, el = this.xmlmc, key = 'params'): void {
        if (typeof el === 'string') {
            key = <string>el;
        }
        if (el === this.xmlmc && this.paramsNotSet) {
            el = el.ele(key);
            this.paramsNotSet = false;
        }
        const paramKeys = Object.keys(params);
        paramKeys.forEach((p: string) => {
            let param: XmlmcParam = params[p];
            if (param === undefined) {
                return;
            }
            if (Object.getPrototypeOf(param) === Object.prototype) {
                const _el = el;
                el = el.ele(p);
                this._createXmlmc(<XmlmcParams>params[p], el);
                el = _el;
            } else {
                el.ele(p, param.toString());
            }
        })
    }

    /**
     * Add data to the xmlmc string
     * @param data data to add
     */
    addData(data : InputData) {
        const ele = this.xmlmc.ele('data');
        Object.keys(data).forEach(key => {
            ele.ele(key, data[key].toString())
        })
    }


    /**
     * Add a simple / complex param
     * @param {Params} param
     * @param {string} value
     */
    addParam(param: string, value: XmlmcParam): void {
        const params: XmlmcParams = {};
        params[param] = value;
        this._createXmlmc(params);
    }

    /**
     * Add all the params at once
     * @param {Params} params
     * @param paramMap
     */
    addParams(params: XmlmcParams, paramMap: Array<string>): void {
        let orderedParams: XmlmcParams = {};
        // ensure that all the params are in the proper order
        paramMap.forEach((v) => {
            if (params.hasOwnProperty(v)) {
                orderedParams[v] = params[v];
            }
        });
        this._createXmlmc(orderedParams);
    }



    toString(): string {
        return this.xmlmc.toString();
    }

}


