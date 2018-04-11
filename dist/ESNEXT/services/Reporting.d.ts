import * as paramTypes from '../types/ReportingTypes';
import { Connection, XmlmcResponse } from '../Connection';
import { XmlMethodCall } from '..';
export declare class Reporting {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: XmlMethodCall);
    getCustomReportTree(optionalParams?: paramTypes.getCustomReportTreeParams): Promise<XmlmcResponse>;
    getSystemReportTree(optionalParams?: paramTypes.getSystemReportTreeParams): Promise<XmlmcResponse>;
}
