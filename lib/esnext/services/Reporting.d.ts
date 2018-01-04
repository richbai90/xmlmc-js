import * as paramTypes from '../types/ReportingTypes';
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Reporting {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    getCustomReportTree(optionalParams?: paramTypes.getCustomReportTreeParams): Promise<XmlmcResponse>;
    getSystemReportTree(optionalParams?: paramTypes.getSystemReportTreeParams): Promise<XmlmcResponse>;
}
