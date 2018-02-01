"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../../Request");
class Survey {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'survey';
        this.paramMap = new Map([['sendCustomerCallSurvey', ['surveyId', 'callref',]],]);
    }
    sendCustomerCallSurvey(surveyId, callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'sendCustomerCallSurvey', Object.assign({}, {
            surveyId,
            callref
        }, optionalParams || {}), this.paramMap.get('sendCustomerCallSurvey') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Survey = Survey;
