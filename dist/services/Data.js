"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Data {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'data';
        this.paramMap = new _map2.default([['addRecord', ['table', 'returnModifiedData']], ['deleteRecord', ['table', 'keyValue']], ['getColumnInfoList', ['database', 'table']], ['getRecord', ['database', 'table', 'keyValue', 'formatValues', 'returnMeta', 'returnRawValues']], ['getStoredQueryList', ['folder']], ['getTableInfoList', ['database']], ['invokeStoredQuery', ['storedQuery', 'parameters']], ['runDataImport', ['confFileName', 'dataFileName']], ['sqlQuery', ['database', 'query', 'rowOffset', 'rowCount', 'formatValues', 'returnMeta', 'maxResults', 'returnRawValues']], ['updateRecord', ['table', 'returnModifiedData']]]);
    }
    addRecord(table, optionalParams) {
        let request = new Request_1.Request(this.service, 'addRecord', (0, _assign2.default)({}, { table }, optionalParams || {}), this.paramMap.get('addRecord') || []);
        return this.connection.sendRequest(request);
    }
    deleteRecord(table, keyValue, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteRecord', (0, _assign2.default)({}, {
            table,
            keyValue
        }, optionalParams || {}), this.paramMap.get('deleteRecord') || []);
        return this.connection.sendRequest(request);
    }
    getColumnInfoList(database, table, optionalParams) {
        let request = new Request_1.Request(this.service, 'getColumnInfoList', (0, _assign2.default)({}, {
            database,
            table
        }, optionalParams || {}), this.paramMap.get('getColumnInfoList') || []);
        return this.connection.sendRequest(request);
    }
    getRecord(table, keyValue, optionalParams) {
        let request = new Request_1.Request(this.service, 'getRecord', (0, _assign2.default)({}, {
            table,
            keyValue
        }, optionalParams || {}), this.paramMap.get('getRecord') || []);
        return this.connection.sendRequest(request);
    }
    getStoredQueryList(optionalParams) {
        let request = new Request_1.Request(this.service, 'getStoredQueryList', optionalParams || {}, this.paramMap.get('getStoredQueryList') || []);
        return this.connection.sendRequest(request);
    }
    getTableInfoList(database, optionalParams) {
        let request = new Request_1.Request(this.service, 'getTableInfoList', (0, _assign2.default)({}, { database }, optionalParams || {}), this.paramMap.get('getTableInfoList') || []);
        return this.connection.sendRequest(request);
    }
    invokeStoredQuery(storedQuery, optionalParams) {
        let request = new Request_1.Request(this.service, 'invokeStoredQuery', (0, _assign2.default)({}, { storedQuery }, optionalParams || {}), this.paramMap.get('invokeStoredQuery') || []);
        return this.connection.sendRequest(request);
    }
    runDataImport(confFileName, dataFileName, optionalParams) {
        let request = new Request_1.Request(this.service, 'runDataImport', (0, _assign2.default)({}, {
            confFileName,
            dataFileName
        }, optionalParams || {}), this.paramMap.get('runDataImport') || []);
        return this.connection.sendRequest(request);
    }
    sqlQuery(database, query, optionalParams) {
        let request = new Request_1.Request(this.service, 'sqlQuery', (0, _assign2.default)({}, {
            database,
            query
        }, optionalParams || {}), this.paramMap.get('sqlQuery') || []);
        return this.connection.sendRequest(request);
    }
    updateRecord(table, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateRecord', (0, _assign2.default)({}, { table }, optionalParams || {}), this.paramMap.get('updateRecord') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Data = Data;