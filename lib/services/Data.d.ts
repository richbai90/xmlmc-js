import * as paramTypes from '../types/DataTypes';
import { AxiosError } from "axios";
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Data {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    addRecord(table: string, optionalParams?: paramTypes.addRecordParams): Promise<XmlmcResponse | AxiosError>;
    deleteRecord(table: string, keyValue: string, optionalParams?: paramTypes.deleteRecordParams): Promise<XmlmcResponse | AxiosError>;
    getColumnInfoList(database: string, table: string, optionalParams?: paramTypes.getColumnInfoListParams): Promise<XmlmcResponse | AxiosError>;
    getRecord(table: string, keyValue: string, optionalParams?: paramTypes.getRecordParams): Promise<XmlmcResponse | AxiosError>;
    getStoredQueryList(optionalParams?: paramTypes.getStoredQueryListParams): Promise<XmlmcResponse | AxiosError>;
    getTableInfoList(database: string, optionalParams?: paramTypes.getTableInfoListParams): Promise<XmlmcResponse | AxiosError>;
    invokeStoredQuery(storedQuery: string, optionalParams?: paramTypes.invokeStoredQueryParams): Promise<XmlmcResponse | AxiosError>;
    runDataImport(confFileName: string, dataFileName: string, optionalParams?: paramTypes.runDataImportParams): Promise<XmlmcResponse | AxiosError>;
    sqlQuery(database: string, query: string, optionalParams?: paramTypes.sqlQueryParams): Promise<XmlmcResponse | AxiosError>;
    updateRecord(table: string, optionalParams?: paramTypes.updateRecordParams): Promise<XmlmcResponse | AxiosError>;
}
