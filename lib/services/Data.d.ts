import * as paramTypes from '../types/DataTypes';
import { AxiosError, AxiosResponse } from "axios";
import { Connection } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Data {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    addRecord(table: string, optionalParams?: paramTypes.addRecordParams): Promise<AxiosResponse | AxiosError>;
    deleteRecord(table: string, keyValue: string, optionalParams?: paramTypes.deleteRecordParams): Promise<AxiosResponse | AxiosError>;
    getColumnInfoList(database: string, table: string, optionalParams?: paramTypes.getColumnInfoListParams): Promise<AxiosResponse | AxiosError>;
    getRecord(table: string, keyValue: string, optionalParams?: paramTypes.getRecordParams): Promise<AxiosResponse | AxiosError>;
    getStoredQueryList(optionalParams?: paramTypes.getStoredQueryListParams): Promise<AxiosResponse | AxiosError>;
    getTableInfoList(database: string, optionalParams?: paramTypes.getTableInfoListParams): Promise<AxiosResponse | AxiosError>;
    invokeStoredQuery(storedQuery: string, optionalParams?: paramTypes.invokeStoredQueryParams): Promise<AxiosResponse | AxiosError>;
    runDataImport(confFileName: string, dataFileName: string, optionalParams?: paramTypes.runDataImportParams): Promise<AxiosResponse | AxiosError>;
    sqlQuery(database: string, query: string, optionalParams?: paramTypes.sqlQueryParams): Promise<AxiosResponse | AxiosError>;
    updateRecord(table: string, optionalParams?: paramTypes.updateRecordParams): Promise<AxiosResponse | AxiosError>;
}
