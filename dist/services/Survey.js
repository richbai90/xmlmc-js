"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Survey {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'survey';
        this.paramMap = new _map2.default([['sendCustomerCallSurvey', ['surveyId', 'callref']]]);
    }
    sendCustomerCallSurvey(surveyId, callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'sendCustomerCallSurvey', (0, _assign2.default)({}, {
            surveyId,
            callref
        }, optionalParams || {}), this.paramMap.get('sendCustomerCallSurvey') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Survey = Survey;