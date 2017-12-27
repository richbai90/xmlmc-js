import * as paramTypes from '../types/ReportingTypes';
import { AxiosError, AxiosResponse } from "axios";
import { Connection } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Reporting {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    getCustomReportTree(optionalParams?: paramTypes.getCustomReportTreeParams): Promise<AxiosResponse | AxiosError>;
    getSystemReportTree(optionalParams?: paramTypes.getSystemReportTreeParams): Promise<AxiosResponse | AxiosError>;
}
