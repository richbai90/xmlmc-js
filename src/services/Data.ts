import * as paramTypes from '../types/DataTypes'

import {XmlmcParams, InputData} from "../types/XmlmcTypes";
import {Connection, XmlmcResponse} from '../Connection'
import {XmlMethodCall} from '..'
import {Request} from '../Request'


    export class Data {
        private connection: Connection;
        private xmlmc: XmlMethodCall;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: XmlMethodCall) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'data';
            this.paramMap = new Map([['addRecord', ['table', 'returnModifiedData',]], ['deleteRecord', ['table', 'keyValue',]], ['getColumnInfoList', ['database', 'table',]], ['getRecord', ['database', 'table', 'keyValue', 'formatValues', 'returnMeta', 'returnRawValues',]], ['getStoredQueryList', ['folder',]], ['getTableInfoList', ['database',]], ['invokeStoredQuery', ['storedQuery', 'parameters',]], ['runDataImport', ['confFileName', 'dataFileName',]], ['sqlQuery', ['database', 'query', 'rowOffset', 'rowCount', 'formatValues', 'returnMeta', 'maxResults', 'returnRawValues',]], ['updateRecord', ['table', 'returnModifiedData',]],]);
        }

        addRecord(table: string, data: InputData, optionalParams?: paramTypes.addRecordParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'addRecord', <XmlmcParams>Object.assign({}, {table}, optionalParams || {}), this.paramMap.get('addRecord') || [], data);
            return this.connection.sendRequest(request)
        }

        deleteRecord(table: string, keyValue: string, optionalParams?: paramTypes.deleteRecordParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'deleteRecord', <XmlmcParams>Object.assign({}, {
                table,
                keyValue
            }, optionalParams || {}), this.paramMap.get('deleteRecord') || []);
            return this.connection.sendRequest(request)
        }

        getColumnInfoList(database: string, table: string, optionalParams?: paramTypes.getColumnInfoListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getColumnInfoList', <XmlmcParams>Object.assign({}, {
                database,
                table
            }, optionalParams || {}), this.paramMap.get('getColumnInfoList') || []);
            return this.connection.sendRequest(request)
        }

        getRecord(table: string, keyValue: string, optionalParams?: paramTypes.getRecordParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getRecord', <XmlmcParams>Object.assign({}, {
                table,
                keyValue
            }, optionalParams || {}), this.paramMap.get('getRecord') || []);
            return this.connection.sendRequest(request)
        }

        getStoredQueryList(optionalParams?: paramTypes.getStoredQueryListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getStoredQueryList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getStoredQueryList') || []);
            return this.connection.sendRequest(request)
        }

        getTableInfoList(database: string, optionalParams?: paramTypes.getTableInfoListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getTableInfoList', <XmlmcParams>Object.assign({}, {database}, optionalParams || {}), this.paramMap.get('getTableInfoList') || []);
            return this.connection.sendRequest(request)
        }

        invokeStoredQuery(storedQuery: string, optionalParams?: paramTypes.invokeStoredQueryParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'invokeStoredQuery', <XmlmcParams>Object.assign({}, {storedQuery}, optionalParams || {}), this.paramMap.get('invokeStoredQuery') || []);
            return this.connection.sendRequest(request)
        }

        runDataImport(confFileName: string, dataFileName: string, optionalParams?: paramTypes.runDataImportParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'runDataImport', <XmlmcParams>Object.assign({}, {
                confFileName,
                dataFileName
            }, optionalParams || {}), this.paramMap.get('runDataImport') || []);
            return this.connection.sendRequest(request)
        }

        sqlQuery(database: string, query: string, optionalParams?: paramTypes.sqlQueryParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'sqlQuery', <XmlmcParams>Object.assign({}, {
                database,
                query
            }, optionalParams || {}), this.paramMap.get('sqlQuery') || []);
            return this.connection.sendRequest(request)
        }

        updateRecord(table: string, data: InputData, optionalParams?: paramTypes.updateRecordParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'updateRecord', <XmlmcParams>Object.assign({}, {table}, optionalParams || {}), this.paramMap.get('updateRecord') || [], data);
            return this.connection.sendRequest(request)
        }
    }

