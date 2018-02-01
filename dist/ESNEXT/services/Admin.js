"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Admin {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'admin';
        this.paramMap = new Map([['addEmailRoutingRule', ['condition', 'mode', 'mailbox', 'folder',]], ['deleteEmailRoutingRule', ['condition', 'mode', 'mailbox', 'folder',]], ['getAuthentication', ['userId',]], ['getServerConfiguration', ['EMailRoutingRules',]], ['lockAnalyst', ['userId',]], ['setAuthentication', ['userId', 'authenticationType', 'authenticationString',]], ['unlockAnalyst', ['userId',]],]);
    }
    addEmailRoutingRule(condition, optionalParams) {
        let request = new Request_1.Request(this.service, 'addEmailRoutingRule', Object.assign({}, { condition }, optionalParams || {}), this.paramMap.get('addEmailRoutingRule') || []);
        return this.connection.sendRequest(request);
    }
    deleteEmailRoutingRule(condition, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteEmailRoutingRule', Object.assign({}, { condition }, optionalParams || {}), this.paramMap.get('deleteEmailRoutingRule') || []);
        return this.connection.sendRequest(request);
    }
    getAuthentication(userId, optionalParams) {
        let request = new Request_1.Request(this.service, 'getAuthentication', Object.assign({}, { userId }, optionalParams || {}), this.paramMap.get('getAuthentication') || []);
        return this.connection.sendRequest(request);
    }
    getServerConfiguration(optionalParams) {
        let request = new Request_1.Request(this.service, 'getServerConfiguration', (optionalParams || {}), this.paramMap.get('getServerConfiguration') || []);
        return this.connection.sendRequest(request);
    }
    lockAnalyst(userId, optionalParams) {
        let request = new Request_1.Request(this.service, 'lockAnalyst', Object.assign({}, { userId }, optionalParams || {}), this.paramMap.get('lockAnalyst') || []);
        return this.connection.sendRequest(request);
    }
    setAuthentication(userId, authenticationString, optionalParams) {
        let request = new Request_1.Request(this.service, 'setAuthentication', Object.assign({}, {
            userId,
            authenticationString
        }, optionalParams || {}), this.paramMap.get('setAuthentication') || []);
        return this.connection.sendRequest(request);
    }
    unlockAnalyst(userId, optionalParams) {
        let request = new Request_1.Request(this.service, 'unlockAnalyst', Object.assign({}, { userId }, optionalParams || {}), this.paramMap.get('unlockAnalyst') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Admin = Admin;
