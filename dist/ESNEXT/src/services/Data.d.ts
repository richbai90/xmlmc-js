import * as paramTypes from '../types/DataTypes';
import { InputData } from "../types/XmlmcTypes";
import { Connection, XmlmcResponse } from '../Connection';
import { XmlMethodCall } from '..';
export declare class Data {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: XmlMethodCall);
    addRecord(table: string, data: InputData, optionalParams?: paramTypes.addRecordParams): Promise<XmlmcResponse>;
    deleteRecord(table: string, keyValue: string, optionalParams?: paramTypes.deleteRecordParams): Promise<XmlmcResponse>;
    getColumnInfoList(database: string, table: string, optionalParams?: paramTypes.getColumnInfoListParams): Promise<XmlmcResponse>;
    getRecord(table: string, keyValue: string, optionalParams?: paramTypes.getRecordParams): Promise<XmlmcResponse>;
    getStoredQueryList(optionalParams?: paramTypes.getStoredQueryListParams): Promise<XmlmcResponse>;
    getTableInfoList(database: string, optionalParams?: paramTypes.getTableInfoListParams): Promise<XmlmcResponse>;
    invokeStoredQuery(storedQuery: string, optionalParams?: paramTypes.invokeStoredQueryParams): Promise<XmlmcResponse>;
    runDataImport(confFileName: string, dataFileName: string, optionalParams?: paramTypes.runDataImportParams): Promise<XmlmcResponse>;
    sqlQuery(database: string, query: string, optionalParams?: paramTypes.sqlQueryParams): Promise<XmlmcResponse>;
    updateRecord(table: string, data: InputData, optionalParams?: paramTypes.updateRecordParams): Promise<XmlmcResponse>;
}
