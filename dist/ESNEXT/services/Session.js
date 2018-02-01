"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Session {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'session';
        this.paramMap = new Map([['analystLogoff', ['sessionId',]], ['analystLogon', ['userId', 'password',]], ['analystLogonTrust', ['userId', 'secretKey',]], ['bindSession', ['sessionId',]], ['changePassword', ['oldPassword', 'newPassword',]], ['convertDateTimeInText', ['inputText',]], ['getSessionInfo', ['sessionId',]], ['getSessionInfo2', ['sessionId',]], ['hasRight', ['userRight',]], ['isSessionValid', ['sessionId',]], ['lockCustomerAccount', ['selfServiceInstance', 'customerId', 'permanent', 'duration',]], ['selfServiceLogon', ['selfServiceInstance', 'customerId', 'password',]], ['setDatabaseRight', ['tableName', 'rightFlag', 'rightAllowed',]], ['setOutputValidation', ['validateResultMessage',]], ['setUserRight', ['rightClass', 'rightFlag', 'rightAllowed',]], ['setVariable', ['sessionVariable',]], ['switchAnalystContext', ['groupId', 'analystId',]], ['unlockCustomerAccount', ['selfServiceInstance', 'customerId',]],]);
    }
    analystLogoff(optionalParams) {
        let request = new Request_1.Request(this.service, 'analystLogoff', (optionalParams || {}), this.paramMap.get('analystLogoff') || []);
        return this.connection.sendRequest(request);
    }
    analystLogon(userId, password, optionalParams) {
        let request = new Request_1.Request(this.service, 'analystLogon', Object.assign({}, {
            userId,
            password
        }, optionalParams || {}), this.paramMap.get('analystLogon') || []);
        return this.connection.sendRequest(request);
    }
    analystLogonTrust(userId, secretKey, optionalParams) {
        let request = new Request_1.Request(this.service, 'analystLogonTrust', Object.assign({}, {
            userId,
            secretKey
        }, optionalParams || {}), this.paramMap.get('analystLogonTrust') || []);
        return this.connection.sendRequest(request);
    }
    bindSession(sessionId, optionalParams) {
        let request = new Request_1.Request(this.service, 'bindSession', Object.assign({}, { sessionId }, optionalParams || {}), this.paramMap.get('bindSession') || []);
        return this.connection.sendRequest(request);
    }
    changePassword(oldPassword, newPassword, optionalParams) {
        let request = new Request_1.Request(this.service, 'changePassword', Object.assign({}, {
            oldPassword,
            newPassword
        }, optionalParams || {}), this.paramMap.get('changePassword') || []);
        return this.connection.sendRequest(request);
    }
    closeLocalSession(optionalParams) {
        let request = new Request_1.Request(this.service, 'closeLocalSession', (optionalParams || {}), this.paramMap.get('closeLocalSession') || []);
        return this.connection.sendRequest(request);
    }
    convertDateTimeInText(inputText, optionalParams) {
        let request = new Request_1.Request(this.service, 'convertDateTimeInText', Object.assign({}, { inputText }, optionalParams || {}), this.paramMap.get('convertDateTimeInText') || []);
        return this.connection.sendRequest(request);
    }
    createLocalSession(optionalParams) {
        let request = new Request_1.Request(this.service, 'createLocalSession', (optionalParams || {}), this.paramMap.get('createLocalSession') || []);
        return this.connection.sendRequest(request);
    }
    getSessionDDInfo(optionalParams) {
        let request = new Request_1.Request(this.service, 'getSessionDDInfo', (optionalParams || {}), this.paramMap.get('getSessionDDInfo') || []);
        return this.connection.sendRequest(request);
    }
    getSessionInfo(optionalParams) {
        let request = new Request_1.Request(this.service, 'getSessionInfo', (optionalParams || {}), this.paramMap.get('getSessionInfo') || []);
        return this.connection.sendRequest(request);
    }
    getSessionInfo2(optionalParams) {
        let request = new Request_1.Request(this.service, 'getSessionInfo2', (optionalParams || {}), this.paramMap.get('getSessionInfo2') || []);
        return this.connection.sendRequest(request);
    }
    hasRight(userRight, optionalParams) {
        let request = new Request_1.Request(this.service, 'hasRight', Object.assign({}, { userRight }, optionalParams || {}), this.paramMap.get('hasRight') || []);
        return this.connection.sendRequest(request);
    }
    isSessionValid(optionalParams) {
        let request = new Request_1.Request(this.service, 'isSessionValid', (optionalParams || {}), this.paramMap.get('isSessionValid') || []);
        return this.connection.sendRequest(request);
    }
    lockCustomerAccount(selfServiceInstance, customerId, permanent, optionalParams) {
        let request = new Request_1.Request(this.service, 'lockCustomerAccount', Object.assign({}, {
            selfServiceInstance,
            customerId,
            permanent
        }, optionalParams || {}), this.paramMap.get('lockCustomerAccount') || []);
        return this.connection.sendRequest(request);
    }
    selfServiceLogoff(optionalParams) {
        let request = new Request_1.Request(this.service, 'selfServiceLogoff', (optionalParams || {}), this.paramMap.get('selfServiceLogoff') || []);
        return this.connection.sendRequest(request);
    }
    selfServiceLogon(selfServiceInstance, customerId, password, optionalParams) {
        let request = new Request_1.Request(this.service, 'selfServiceLogon', Object.assign({}, {
            selfServiceInstance,
            customerId,
            password
        }, optionalParams || {}), this.paramMap.get('selfServiceLogon') || []);
        return this.connection.sendRequest(request);
    }
    setDatabaseRight(tableName, rightFlag, rightAllowed, optionalParams) {
        let request = new Request_1.Request(this.service, 'setDatabaseRight', Object.assign({}, {
            tableName,
            rightFlag,
            rightAllowed
        }, optionalParams || {}), this.paramMap.get('setDatabaseRight') || []);
        return this.connection.sendRequest(request);
    }
    setOutputValidation(validateResultMessage, optionalParams) {
        let request = new Request_1.Request(this.service, 'setOutputValidation', Object.assign({}, { validateResultMessage }, optionalParams || {}), this.paramMap.get('setOutputValidation') || []);
        return this.connection.sendRequest(request);
    }
    setUserRight(rightClass, rightFlag, rightAllowed, optionalParams) {
        let request = new Request_1.Request(this.service, 'setUserRight', Object.assign({}, {
            rightClass,
            rightFlag,
            rightAllowed
        }, optionalParams || {}), this.paramMap.get('setUserRight') || []);
        return this.connection.sendRequest(request);
    }
    setVariable(sessionVariable, optionalParams) {
        let request = new Request_1.Request(this.service, 'setVariable', Object.assign({}, { sessionVariable }, optionalParams || {}), this.paramMap.get('setVariable') || []);
        return this.connection.sendRequest(request);
    }
    switchAnalystContext(groupId, optionalParams) {
        let request = new Request_1.Request(this.service, 'switchAnalystContext', Object.assign({}, { groupId }, optionalParams || {}), this.paramMap.get('switchAnalystContext') || []);
        return this.connection.sendRequest(request);
    }
    unlockCustomerAccount(selfServiceInstance, customerId, optionalParams) {
        let request = new Request_1.Request(this.service, 'unlockCustomerAccount', Object.assign({}, {
            selfServiceInstance,
            customerId
        }, optionalParams || {}), this.paramMap.get('unlockCustomerAccount') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Session = Session;
