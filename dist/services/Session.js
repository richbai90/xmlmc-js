"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Session {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'session';
        this.paramMap = new _map2.default([['analystLogoff', ['sessionId']], ['analystLogon', ['userId', 'password']], ['analystLogonTrust', ['userId', 'secretKey']], ['bindSession', ['sessionId']], ['changePassword', ['oldPassword', 'newPassword']], ['convertDateTimeInText', ['inputText']], ['getSessionInfo', ['sessionId']], ['getSessionInfo2', ['sessionId']], ['hasRight', ['userRight']], ['isSessionValid', ['sessionId']], ['lockCustomerAccount', ['selfServiceInstance', 'customerId', 'permanent', 'duration']], ['selfServiceLogon', ['selfServiceInstance', 'customerId', 'password']], ['setDatabaseRight', ['tableName', 'rightFlag', 'rightAllowed']], ['setOutputValidation', ['validateResultMessage']], ['setUserRight', ['rightClass', 'rightFlag', 'rightAllowed']], ['setVariable', ['sessionVariable']], ['switchAnalystContext', ['groupId', 'analystId']], ['unlockCustomerAccount', ['selfServiceInstance', 'customerId']]]);
        this.id = null;
        this._id = "";
        this._sessionInfo = null;
    }
    get info() {
        return this._sessionInfo;
    }
    get id() {
        return this._id;
    }
    set id(sessionId) {
        var _this = this;

        this._id = sessionId || "";
        if (sessionId && sessionId != "") {
            (0, _asyncToGenerator3.default)(function* () {
                const params = (yield _this.getSessionInfo2({ sessionId })).params;
                _this._sessionInfo = params;
            })();
        } else {
            this._sessionInfo = {
                sessionId: "",
                connectionId: -1,
                sessionType: -1,
                connectedSince: new Date(0),
                analystName: "",
                analystId: "",
                notifyPort: -1,
                maxUdpSize: -1,
                currentDataDictionary: "",
                dateTimeFormat: "",
                dateFormat: "",
                timeFormat: "",
                currencySymbol: "",
                timeZone: "",
                timeZoneOffset: -1,
                privLevel: -1,
                oracleInUse: 0,
                npaProtocol: -1,
                sla: -1,
                slb: -1,
                slc: -1,
                sld: -1,
                sle: -1,
                slf: -1,
                slg: -1,
                slh: -1,
                msSqlInUse: 0,
                validateOutput: false,
                appRight: -1,
                analystInfo: {
                    analystId: "",
                    name: "",
                    "class": "",
                    supportGroup: "",
                    privilegeLevel: -1,
                    rightsA: -1,
                    rightsB: -1,
                    rightsC: -1,
                    rightsD: -1,
                    rightsE: -1,
                    rightsF: -1,
                    rightsG: -1,
                    rightsH: -1,
                    userDefaults: -1,
                    maxBackdatePeriod: -1,
                    timeZone: "",
                    dataDictionary: "",
                    availableStatus: "",
                    country: -1,
                    language: "",
                    dateTimeFormat: "",
                    dateFormat: "",
                    timeFormat: "",
                    currencySymbol: "",
                    maxAssignedCalls: -1,
                    lastLogOnTime: -1,
                    closeLevel: -1,
                    logLevel: -1
                },
                group: ""
            };
        }
    }
    analystLogoff(optionalParams) {
        let request = new Request_1.Request(this.service, 'analystLogoff', optionalParams || {}, this.paramMap.get('analystLogoff') || []);
        this.id = null;
        return this.connection.sendRequest(request);
    }
    analystLogon(userId, password, optionalParams) {
        let request = new Request_1.Request(this.service, 'analystLogon', (0, _assign2.default)({}, {
            userId,
            password
        }, optionalParams || {}), this.paramMap.get('analystLogon') || []);
        return this.connection.sendRequest(request).then(response => {
            this.id = response.params.sessionId;
            return response;
        });
    }
    analystLogonTrust(userId, secretKey, optionalParams) {
        let request = new Request_1.Request(this.service, 'analystLogonTrust', (0, _assign2.default)({}, {
            userId,
            secretKey
        }, optionalParams || {}), this.paramMap.get('analystLogonTrust') || []);
        return this.connection.sendRequest(request).then(response => {
            this.id = response.params.sessionId;
            return response;
        });
    }
    bindSession(sessionId, optionalParams) {
        let request = new Request_1.Request(this.service, 'bindSession', (0, _assign2.default)({}, { sessionId }, optionalParams || {}), this.paramMap.get('bindSession') || []);
        return this.connection.sendRequest(request).then(response => {
            this.id = response.params.sessionId;
            return response;
        });
    }
    changePassword(oldPassword, newPassword, optionalParams) {
        let request = new Request_1.Request(this.service, 'changePassword', (0, _assign2.default)({}, {
            oldPassword,
            newPassword
        }, optionalParams || {}), this.paramMap.get('changePassword') || []);
        return this.connection.sendRequest(request);
    }
    closeLocalSession(optionalParams) {
        let request = new Request_1.Request(this.service, 'closeLocalSession', optionalParams || {}, this.paramMap.get('closeLocalSession') || []);
        return this.connection.sendRequest(request);
    }
    convertDateTimeInText(inputText, optionalParams) {
        let request = new Request_1.Request(this.service, 'convertDateTimeInText', (0, _assign2.default)({}, { inputText }, optionalParams || {}), this.paramMap.get('convertDateTimeInText') || []);
        return this.connection.sendRequest(request);
    }
    createLocalSession(optionalParams) {
        let request = new Request_1.Request(this.service, 'createLocalSession', optionalParams || {}, this.paramMap.get('createLocalSession') || []);
        return this.connection.sendRequest(request);
    }
    getSessionDDInfo(optionalParams) {
        let request = new Request_1.Request(this.service, 'getSessionDDInfo', optionalParams || {}, this.paramMap.get('getSessionDDInfo') || []);
        return this.connection.sendRequest(request);
    }
    getSessionInfo(optionalParams) {
        let request = new Request_1.Request(this.service, 'getSessionInfo', optionalParams || {}, this.paramMap.get('getSessionInfo') || []);
        return this.connection.sendRequest(request);
    }
    getSessionInfo2(optionalParams) {
        let request = new Request_1.Request(this.service, 'getSessionInfo2', optionalParams || {}, this.paramMap.get('getSessionInfo2') || []);
        return this.connection.sendRequest(request);
    }
    hasRight(userRight, optionalParams) {
        let request = new Request_1.Request(this.service, 'hasRight', (0, _assign2.default)({}, { userRight }, optionalParams || {}), this.paramMap.get('hasRight') || []);
        return this.connection.sendRequest(request);
    }
    isSessionValid(optionalParams) {
        let request = new Request_1.Request(this.service, 'isSessionValid', optionalParams || {}, this.paramMap.get('isSessionValid') || []);
        return this.connection.sendRequest(request);
    }
    lockCustomerAccount(selfServiceInstance, customerId, permanent, optionalParams) {
        let request = new Request_1.Request(this.service, 'lockCustomerAccount', (0, _assign2.default)({}, {
            selfServiceInstance,
            customerId,
            permanent
        }, optionalParams || {}), this.paramMap.get('lockCustomerAccount') || []);
        return this.connection.sendRequest(request);
    }
    selfServiceLogoff(optionalParams) {
        let request = new Request_1.Request(this.service, 'selfServiceLogoff', optionalParams || {}, this.paramMap.get('selfServiceLogoff') || []);
        this.id = null;
        return this.connection.sendRequest(request);
    }
    selfServiceLogon(selfServiceInstance, customerId, password, optionalParams) {
        let request = new Request_1.Request(this.service, 'selfServiceLogon', (0, _assign2.default)({}, {
            selfServiceInstance,
            customerId,
            password
        }, optionalParams || {}), this.paramMap.get('selfServiceLogon') || []);
        return this.connection.sendRequest(request).then(response => {
            this.id = response.sessionId;
            return response;
        });
    }
    setDatabaseRight(tableName, rightFlag, rightAllowed, optionalParams) {
        let request = new Request_1.Request(this.service, 'setDatabaseRight', (0, _assign2.default)({}, {
            tableName,
            rightFlag,
            rightAllowed
        }, optionalParams || {}), this.paramMap.get('setDatabaseRight') || []);
        return this.connection.sendRequest(request);
    }
    setOutputValidation(validateResultMessage, optionalParams) {
        let request = new Request_1.Request(this.service, 'setOutputValidation', (0, _assign2.default)({}, { validateResultMessage }, optionalParams || {}), this.paramMap.get('setOutputValidation') || []);
        return this.connection.sendRequest(request);
    }
    setUserRight(rightClass, rightFlag, rightAllowed, optionalParams) {
        let request = new Request_1.Request(this.service, 'setUserRight', (0, _assign2.default)({}, {
            rightClass,
            rightFlag,
            rightAllowed
        }, optionalParams || {}), this.paramMap.get('setUserRight') || []);
        return this.connection.sendRequest(request);
    }
    setVariable(sessionVariable, optionalParams) {
        let request = new Request_1.Request(this.service, 'setVariable', (0, _assign2.default)({}, { sessionVariable }, optionalParams || {}), this.paramMap.get('setVariable') || []);
        return this.connection.sendRequest(request);
    }
    switchAnalystContext(groupId, optionalParams) {
        let request = new Request_1.Request(this.service, 'switchAnalystContext', (0, _assign2.default)({}, { groupId }, optionalParams || {}), this.paramMap.get('switchAnalystContext') || []);
        return this.connection.sendRequest(request);
    }
    unlockCustomerAccount(selfServiceInstance, customerId, optionalParams) {
        let request = new Request_1.Request(this.service, 'unlockCustomerAccount', (0, _assign2.default)({}, {
            selfServiceInstance,
            customerId
        }, optionalParams || {}), this.paramMap.get('unlockCustomerAccount') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Session = Session;