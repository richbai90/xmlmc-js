"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Reporting {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'reporting';
        this.paramMap = new Map([['getCustomReportTree', ['folderPath', 'recursive']], ['getSystemReportTree', ['folderID', 'recursive']]]);
    }
    getCustomReportTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'getCustomReportTree', optionalParams || {}, this.paramMap.get('getCustomReportTree') || []);
        return this.connection.sendRequest(request);
    }
    getSystemReportTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'getSystemReportTree', optionalParams || {}, this.paramMap.get('getSystemReportTree') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Reporting = Reporting;