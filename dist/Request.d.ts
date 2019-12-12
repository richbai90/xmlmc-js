import { XMLElementOrXMLNode } from 'xmlbuilder';
import { XmlmcParam, XmlmcParams, XmlmcRequest, InputData } from './types/XmlmcTypes';
export declare class Request implements XmlmcRequest {
    service: string;
    method: string;
    paramsNotSet: boolean;
    xmlmc: XMLElementOrXMLNode;
    constructor(service: string, method: string, params: XmlmcParams | undefined, paramMap: Array<string>, inputData?: InputData);
    _createXmlmc(params: XmlmcParams, el?: XMLElementOrXMLNode, key?: string): void;
    /**
     * Add data to the xmlmc string
     * @param data data to add
     */
    addData(data: InputData): void;
    /**
     * Add a simple / complex param
     * @param {Params} param
     * @param {string} value
     */
    addParam(param: string, value: XmlmcParam): void;
    /**
     * Add all the params at once
     * @param {Params} params
     * @param paramMap
     */
    addParams(params: XmlmcParams, paramMap: Array<string>): void;
    toString(): string;
}
