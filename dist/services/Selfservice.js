"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Selfservice {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'selfservice';
        this.paramMap = new _map2.default([['changePassword', ['oldPassword', 'newPassword']], ['customerCancelCall', ['callRef', 'description', 'extraUpdateDbValues']], ['customerGetCallDetails', ['callref', 'formatValues', 'returnMeta', 'returnRawValues']], ['customerGetCallList', ['returnOpen', 'returnClosed', 'returnCancelled', 'formatValues', 'returnMeta', 'returnRawValues']], ['customerGetProfileCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes']], ['customerGetResolutionCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes']], ['customerLogNewCall', ['logIncoming', 'callClass', 'slaName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'groupId', 'analystId', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'additionalCallValues']], ['customerUpdateCall', ['callref', 'timeSpent', 'description', 'updateSource', 'updateCode', 'fileAttachment', 'extraUpdateDbValues']], ['customerUpdateCallValues', ['callref', 'actionVerb', 'updateMessage', 'additionalCallValues']], ['requestPasswordReset', ['selfServiceId', 'customerId', 'loginId']], ['verifyPasswordResetToken', ['selfServiceId', 'customerId', 'loginId', 'token', 'password']]]);
    }
    changePassword(oldPassword, newPassword, optionalParams) {
        let request = new Request_1.Request(this.service, 'changePassword', (0, _assign2.default)({}, {
            oldPassword,
            newPassword
        }, optionalParams || {}), this.paramMap.get('changePassword') || []);
        return this.connection.sendRequest(request);
    }
    customerCancelCall(callRef, description, optionalParams) {
        let request = new Request_1.Request(this.service, 'customerCancelCall', (0, _assign2.default)({}, {
            callRef,
            description
        }, optionalParams || {}), this.paramMap.get('customerCancelCall') || []);
        return this.connection.sendRequest(request);
    }
    customerGetCallDetails(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'customerGetCallDetails', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('customerGetCallDetails') || []);
        return this.connection.sendRequest(request);
    }
    customerGetCallList(optionalParams) {
        let request = new Request_1.Request(this.service, 'customerGetCallList', optionalParams || {}, this.paramMap.get('customerGetCallList') || []);
        return this.connection.sendRequest(request);
    }
    customerGetProfileCodeTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'customerGetProfileCodeTree', optionalParams || {}, this.paramMap.get('customerGetProfileCodeTree') || []);
        return this.connection.sendRequest(request);
    }
    customerGetResolutionCodeTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'customerGetResolutionCodeTree', optionalParams || {}, this.paramMap.get('customerGetResolutionCodeTree') || []);
        return this.connection.sendRequest(request);
    }
    customerLogNewCall(callClass, groupId, optionalParams) {
        let request = new Request_1.Request(this.service, 'customerLogNewCall', (0, _assign2.default)({}, {
            callClass,
            groupId
        }, optionalParams || {}), this.paramMap.get('customerLogNewCall') || []);
        return this.connection.sendRequest(request);
    }
    customerUpdateCall(callref, timeSpent, description, optionalParams) {
        let request = new Request_1.Request(this.service, 'customerUpdateCall', (0, _assign2.default)({}, {
            callref,
            timeSpent,
            description
        }, optionalParams || {}), this.paramMap.get('customerUpdateCall') || []);
        return this.connection.sendRequest(request);
    }
    customerUpdateCallValues(callref, additionalCallValues, optionalParams) {
        let request = new Request_1.Request(this.service, 'customerUpdateCallValues', (0, _assign2.default)({}, {
            callref,
            additionalCallValues
        }, optionalParams || {}), this.paramMap.get('customerUpdateCallValues') || []);
        return this.connection.sendRequest(request);
    }
    requestPasswordReset(selfServiceId, optionalParams) {
        let request = new Request_1.Request(this.service, 'requestPasswordReset', (0, _assign2.default)({}, { selfServiceId }, optionalParams || {}), this.paramMap.get('requestPasswordReset') || []);
        return this.connection.sendRequest(request);
    }
    verifyPasswordResetToken(selfServiceId, token, password, optionalParams) {
        let request = new Request_1.Request(this.service, 'verifyPasswordResetToken', (0, _assign2.default)({}, {
            selfServiceId,
            token,
            password
        }, optionalParams || {}), this.paramMap.get('verifyPasswordResetToken') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Selfservice = Selfservice;