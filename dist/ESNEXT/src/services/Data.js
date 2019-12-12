"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Data {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'data';
        this.paramMap = new Map([['addRecord', ['table', 'returnModifiedData',]], ['deleteRecord', ['table', 'keyValue',]], ['getColumnInfoList', ['database', 'table',]], ['getRecord', ['database', 'table', 'keyValue', 'formatValues', 'returnMeta', 'returnRawValues',]], ['getStoredQueryList', ['folder',]], ['getTableInfoList', ['database',]], ['invokeStoredQuery', ['storedQuery', 'parameters',]], ['runDataImport', ['confFileName', 'dataFileName',]], ['sqlQuery', ['database', 'query', 'rowOffset', 'rowCount', 'formatValues', 'returnMeta', 'maxResults', 'returnRawValues',]], ['updateRecord', ['table', 'returnModifiedData',]],]);
    }
    addRecord(table, data, optionalParams) {
        let request = new Request_1.Request(this.service, 'addRecord', Object.assign({}, { table }, optionalParams || {}), this.paramMap.get('addRecord') || [], data);
        return this.connection.sendRequest(request);
    }
    deleteRecord(table, keyValue, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteRecord', Object.assign({}, {
            table,
            keyValue
        }, optionalParams || {}), this.paramMap.get('deleteRecord') || []);
        return this.connection.sendRequest(request);
    }
    getColumnInfoList(database, table, optionalParams) {
        let request = new Request_1.Request(this.service, 'getColumnInfoList', Object.assign({}, {
            database,
            table
        }, optionalParams || {}), this.paramMap.get('getColumnInfoList') || []);
        return this.connection.sendRequest(request);
    }
    getRecord(table, keyValue, optionalParams) {
        let request = new Request_1.Request(this.service, 'getRecord', Object.assign({}, {
            table,
            keyValue
        }, optionalParams || {}), this.paramMap.get('getRecord') || []);
        return this.connection.sendRequest(request);
    }
    getStoredQueryList(optionalParams) {
        let request = new Request_1.Request(this.service, 'getStoredQueryList', (optionalParams || {}), this.paramMap.get('getStoredQueryList') || []);
        return this.connection.sendRequest(request);
    }
    getTableInfoList(database, optionalParams) {
        let request = new Request_1.Request(this.service, 'getTableInfoList', Object.assign({}, { database }, optionalParams || {}), this.paramMap.get('getTableInfoList') || []);
        return this.connection.sendRequest(request);
    }
    invokeStoredQuery(storedQuery, optionalParams) {
        let request = new Request_1.Request(this.service, 'invokeStoredQuery', Object.assign({}, { storedQuery }, optionalParams || {}), this.paramMap.get('invokeStoredQuery') || []);
        return this.connection.sendRequest(request);
    }
    runDataImport(confFileName, dataFileName, optionalParams) {
        let request = new Request_1.Request(this.service, 'runDataImport', Object.assign({}, {
            confFileName,
            dataFileName
        }, optionalParams || {}), this.paramMap.get('runDataImport') || []);
        return this.connection.sendRequest(request);
    }
    sqlQuery(database, query, optionalParams) {
        let request = new Request_1.Request(this.service, 'sqlQuery', Object.assign({}, {
            database,
            query
        }, optionalParams || {}), this.paramMap.get('sqlQuery') || []);
        return this.connection.sendRequest(request);
    }
    updateRecord(table, data, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateRecord', Object.assign({}, { table }, optionalParams || {}), this.paramMap.get('updateRecord') || [], data);
        return this.connection.sendRequest(request);
    }
}
exports.Data = Data;
