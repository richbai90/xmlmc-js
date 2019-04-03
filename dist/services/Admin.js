"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Admin {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'admin';
        this.paramMap = new _map2.default([['addEmailRoutingRule', ['condition', 'mode', 'mailbox', 'folder']], ['deleteEmailRoutingRule', ['condition', 'mode', 'mailbox', 'folder']], ['getAuthentication', ['userId']], ['getServerConfiguration', ['EMailRoutingRules']], ['lockAnalyst', ['userId']], ['setAuthentication', ['userId', 'authenticationType', 'authenticationString']], ['unlockAnalyst', ['userId']]]);
    }
    addEmailRoutingRule(condition, optionalParams) {
        let request = new Request_1.Request(this.service, 'addEmailRoutingRule', (0, _assign2.default)({}, { condition }, optionalParams || {}), this.paramMap.get('addEmailRoutingRule') || []);
        return this.connection.sendRequest(request);
    }
    deleteEmailRoutingRule(condition, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteEmailRoutingRule', (0, _assign2.default)({}, { condition }, optionalParams || {}), this.paramMap.get('deleteEmailRoutingRule') || []);
        return this.connection.sendRequest(request);
    }
    getAuthentication(userId, optionalParams) {
        let request = new Request_1.Request(this.service, 'getAuthentication', (0, _assign2.default)({}, { userId }, optionalParams || {}), this.paramMap.get('getAuthentication') || []);
        return this.connection.sendRequest(request);
    }
    getServerConfiguration(optionalParams) {
        let request = new Request_1.Request(this.service, 'getServerConfiguration', optionalParams || {}, this.paramMap.get('getServerConfiguration') || []);
        return this.connection.sendRequest(request);
    }
    lockAnalyst(userId, optionalParams) {
        let request = new Request_1.Request(this.service, 'lockAnalyst', (0, _assign2.default)({}, { userId }, optionalParams || {}), this.paramMap.get('lockAnalyst') || []);
        return this.connection.sendRequest(request);
    }
    setAuthentication(userId, authenticationString, optionalParams) {
        let request = new Request_1.Request(this.service, 'setAuthentication', (0, _assign2.default)({}, {
            userId,
            authenticationString
        }, optionalParams || {}), this.paramMap.get('setAuthentication') || []);
        return this.connection.sendRequest(request);
    }
    unlockAnalyst(userId, optionalParams) {
        let request = new Request_1.Request(this.service, 'unlockAnalyst', (0, _assign2.default)({}, { userId }, optionalParams || {}), this.paramMap.get('unlockAnalyst') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Admin = Admin;