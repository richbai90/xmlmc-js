import * as paramTypes from '../types/ReportingTypes';
import { AxiosError } from "axios";
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Reporting {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    getCustomReportTree(optionalParams?: paramTypes.getCustomReportTreeParams): Promise<XmlmcResponse | AxiosError>;
    getSystemReportTree(optionalParams?: paramTypes.getSystemReportTreeParams): Promise<XmlmcResponse | AxiosError>;
}
