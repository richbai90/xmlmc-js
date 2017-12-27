import {XmlmcParam} from "./XmlmcTypes"

export interface addRecordParams {
    [key: string]: XmlmcParam;

    table?: string;
    returnModifiedData?: boolean;
}

export interface deleteRecordParams {
    [key: string]: XmlmcParam;

    table?: string;
    keyValue?: string;
}

export interface getColumnInfoListParams {
    [key: string]: XmlmcParam;

    database?: string;
    table?: string;
}

export interface getRecordParams {
    [key: string]: XmlmcParam;

    database?: string;
    table?: string;
    keyValue?: string;
    formatValues?: boolean;
    returnMeta?: boolean;
    returnRawValues?: boolean;
}

export interface getStoredQueryListParams {
    [key: string]: XmlmcParam;

    folder?: string;
}

export interface getTableInfoListParams {
    [key: string]: XmlmcParam;

    database?: string;
}

export interface invokeStoredQueryParams {
    [key: string]: XmlmcParam;

    storedQuery?: string;
    parameters?: string;
}

export interface runDataImportParams {
    [key: string]: XmlmcParam;

    confFileName?: string;
    dataFileName?: string;
}

export interface sqlQueryParams {
    [key: string]: XmlmcParam;

    database?: string;
    query?: string;
    rowOffset?: number;
    rowCount?: number;
    formatValues?: boolean;
    returnMeta?: boolean;
    maxResults?: number;
    returnRawValues?: boolean;
}

export interface updateRecordParams {
    [key: string]: XmlmcParam;

    table?: string;
    returnModifiedData?: boolean;
}
