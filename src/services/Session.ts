import * as paramTypes from '../types/SessionTypes'
import {XmlmcParams} from "../types/XmlmcTypes";
import {Connection, XmlmcResponse} from '../Connection'
import {XmlMethodCall} from '..'
import {Request} from '../Request'

export interface SessionInfo {
    [index: string]: any;
    sessionId: string;
    connectionId: number;
    sessionType: number;
    analystName: string;
    analystId: string;
    notifyPort: number;
    maxUdpSize: number;
    currentDataDictionary: string;
    dateTimeFormat: string;
    dateFormat: string;
    timeFormat: string;
    currencySymbol: string;
    timeZone: string;
    timeZoneOffset: number;
    privLevel: number;
    oracleInUse: number;
    npaProtocol: number;
    sla: number;
    slb: number;
    slc: number;
    sld: number;
    sle: number;
    slf: number;
    slg: number;
    slh: number;
    msSqlInUse: number;
    validateOutput: boolean;
    appRight: number;
    analystInfo: {
        analystId: string;
        name: string;
        "class": string;
        supportGroup: string;
        privilegeLevel: number;
        rightsA: number;
        rightsB: number;
        rightsC: number;
        rightsD: number;
        rightsE: number;
        rightsF: number;
        rightsG: number;
        rightsH: number;
        userDefaults: number;
        maxBackdatePeriod: number;
        timeZone: string;
        dataDictionary: string;
        availableStatus: string;
        country: number;
        language: string;
        dateTimeFormat: string;
        dateFormat: string;
        timeFormat: string;
        currencySymbol: string;
        maxAssignedCalls: number;
        lastLogOnTime: number;
        closeLevel: number;
        logLevel: number
    };
    group: string;
}

export class Session {
    private connection: Connection;
    private xmlmc: XmlMethodCall;
    private service: string;
    private paramMap: Map<string, Array<string>>;
    private _sessionInfo: SessionInfo;
    private _id : string;

    constructor(connection: Connection, xmlmc: XmlMethodCall) {
        this._id = '';
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'session';
        this.paramMap = new Map([['analystLogoff', ['sessionId',]], ['analystLogon', ['userId', 'password',]], ['analystLogonTrust', ['userId', 'secretKey',]], ['bindSession', ['sessionId',]], ['changePassword', ['oldPassword', 'newPassword',]], ['convertDateTimeInText', ['inputText',]], ['getSessionInfo', ['sessionId',]], ['getSessionInfo2', ['sessionId',]], ['hasRight', ['userRight',]], ['isSessionValid', ['sessionId',]], ['lockCustomerAccount', ['selfServiceInstance', 'customerId', 'permanent', 'duration',]], ['selfServiceLogon', ['selfServiceInstance', 'customerId', 'password',]], ['setDatabaseRight', ['tableName', 'rightFlag', 'rightAllowed',]], ['setOutputValidation', ['validateResultMessage',]], ['setUserRight', ['rightClass', 'rightFlag', 'rightAllowed',]], ['setVariable', ['sessionVariable',]], ['switchAnalystContext', ['groupId', 'analystId',]], ['unlockCustomerAccount', ['selfServiceInstance', 'customerId',]],]);
        this.id = null;
        this._sessionInfo = {
            sessionId: '',
    connectionId: -1,
    sessionType: -1,
    analystName: '',
    analystId: '',
    notifyPort: -1,
    maxUdpSize: -1,
    currentDataDictionary: '',
    dateTimeFormat: '',
    dateFormat: '',
    timeFormat: '',
    currencySymbol: '',
    timeZone: '',
    timeZoneOffset: -1,
    privLevel: -1,
    oracleInUse: -1,
    npaProtocol: -1,
    sla: -1,
    slb: -1,
    slc: -1,
    sld: -1,
    sle: -1,
    slf: -1,
    slg: -1,
    slh: -1,
    msSqlInUse: -1,
    validateOutput: false,
    appRight: -1,
    analystInfo: {
        analystId: '',
        name: '',
        "class": '',
        supportGroup: '',
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
        timeZone: '',
        dataDictionary: '',
        availableStatus: '',
        country: -1,
        language: '',
        dateTimeFormat: '',
        dateFormat: '',
        timeFormat: '',
        currencySymbol: '',
        maxAssignedCalls: -1,
        lastLogOnTime: -1,
        closeLevel: -1,
        logLevel: -1,    },
    group: '',
        };
    }

    get info() {
        return this._sessionInfo;
    }

    get id() {
        return this._id;
    }

    set id(sessionId: string | null) {
        this._id = sessionId || "";
        if (sessionId && sessionId != "") {
            (async () => {
                const params = (await this.getSessionInfo2({sessionId})).params;
                this._sessionInfo = params as SessionInfo;
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
                group: "",
            }
        }
    }


    analystLogoff(optionalParams?: paramTypes.analystLogoffParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'analystLogoff', <XmlmcParams>(optionalParams || {}), this.paramMap.get('analystLogoff') || []);
        this.id = null;
        return this.connection.sendRequest(request)
    }

    analystLogon(userId: string, password: string, optionalParams?: paramTypes.analystLogonParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'analystLogon', <XmlmcParams>Object.assign({}, {
            userId,
            password
        }, optionalParams || {}), this.paramMap.get('analystLogon') || []);
        return this.connection.sendRequest(request).then(response => {
            this.id = response.params.sessionId;
            return response;
        });
    }

    analystLogonTrust(userId: string, secretKey: string, optionalParams?: paramTypes.analystLogonTrustParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'analystLogonTrust', <XmlmcParams>Object.assign({}, {
            userId,
            secretKey
        }, optionalParams || {}), this.paramMap.get('analystLogonTrust') || []);
        return this.connection.sendRequest(request).then(response => {
            this.id = response.params.sessionId;
            return response;
        });
    }

    bindSession(sessionId: string, optionalParams?: paramTypes.bindSessionParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'bindSession', <XmlmcParams>Object.assign({}, {sessionId}, optionalParams || {}), this.paramMap.get('bindSession') || []);
        return this.connection.sendRequest(request).then(response => {
            this.id = response.params.sessionId;
            return response;
        });
    }

    changePassword(oldPassword: string, newPassword: string, optionalParams?: paramTypes.changePasswordParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'changePassword', <XmlmcParams>Object.assign({}, {
            oldPassword,
            newPassword
        }, optionalParams || {}), this.paramMap.get('changePassword') || []);
        return this.connection.sendRequest(request)
    }

    closeLocalSession(optionalParams?: paramTypes.closeLocalSessionParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'closeLocalSession', <XmlmcParams>(optionalParams || {}), this.paramMap.get('closeLocalSession') || []);
        return this.connection.sendRequest(request)
    }

    convertDateTimeInText(inputText: string, optionalParams?: paramTypes.convertDateTimeInTextParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'convertDateTimeInText', <XmlmcParams>Object.assign({}, {inputText}, optionalParams || {}), this.paramMap.get('convertDateTimeInText') || []);
        return this.connection.sendRequest(request)
    }

    createLocalSession(optionalParams?: paramTypes.createLocalSessionParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'createLocalSession', <XmlmcParams>(optionalParams || {}), this.paramMap.get('createLocalSession') || []);
        return this.connection.sendRequest(request)
    }

    getSessionDDInfo(optionalParams?: paramTypes.getSessionDDInfoParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'getSessionDDInfo', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getSessionDDInfo') || []);
        return this.connection.sendRequest(request)
    }

    getSessionInfo(optionalParams?: paramTypes.getSessionInfoParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'getSessionInfo', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getSessionInfo') || []);
        return this.connection.sendRequest(request)
    }

    getSessionInfo2(optionalParams?: paramTypes.getSessionInfo2Params): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'getSessionInfo2', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getSessionInfo2') || []);
        return this.connection.sendRequest(request)
    }

    hasRight(userRight: string, optionalParams?: paramTypes.hasRightParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'hasRight', <XmlmcParams>Object.assign({}, {userRight}, optionalParams || {}), this.paramMap.get('hasRight') || []);
        return this.connection.sendRequest(request)
    }

    isSessionValid(optionalParams?: paramTypes.isSessionValidParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'isSessionValid', <XmlmcParams>(optionalParams || {}), this.paramMap.get('isSessionValid') || []);
        return this.connection.sendRequest(request)
    }

    lockCustomerAccount(selfServiceInstance: string, customerId: string, permanent: boolean, optionalParams?: paramTypes.lockCustomerAccountParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'lockCustomerAccount', <XmlmcParams>Object.assign({}, {
            selfServiceInstance,
            customerId,
            permanent
        }, optionalParams || {}), this.paramMap.get('lockCustomerAccount') || []);
        return this.connection.sendRequest(request)
    }

    selfServiceLogoff(optionalParams?: paramTypes.selfServiceLogoffParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'selfServiceLogoff', <XmlmcParams>(optionalParams || {}), this.paramMap.get('selfServiceLogoff') || []);
        this.id = null;
        return this.connection.sendRequest(request)
    }

    selfServiceLogon(selfServiceInstance: string, customerId: string, password: string, optionalParams?: paramTypes.selfServiceLogonParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'selfServiceLogon', <XmlmcParams>Object.assign({}, {
            selfServiceInstance,
            customerId,
            password
        }, optionalParams || {}), this.paramMap.get('selfServiceLogon') || []);
        return this.connection.sendRequest(request).then(response => {
            this.id = response.sessionId;
            return response;
        })
    }

    setDatabaseRight(tableName: string, rightFlag: number, rightAllowed: boolean, optionalParams?: paramTypes.setDatabaseRightParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'setDatabaseRight', <XmlmcParams>Object.assign({}, {
            tableName,
            rightFlag,
            rightAllowed
        }, optionalParams || {}), this.paramMap.get('setDatabaseRight') || []);
        return this.connection.sendRequest(request)
    }

    setOutputValidation(validateResultMessage: boolean, optionalParams?: paramTypes.setOutputValidationParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'setOutputValidation', <XmlmcParams>Object.assign({}, {validateResultMessage}, optionalParams || {}), this.paramMap.get('setOutputValidation') || []);
        return this.connection.sendRequest(request)
    }

    setUserRight(rightClass: string, rightFlag: number, rightAllowed: boolean, optionalParams?: paramTypes.setUserRightParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'setUserRight', <XmlmcParams>Object.assign({}, {
            rightClass,
            rightFlag,
            rightAllowed
        }, optionalParams || {}), this.paramMap.get('setUserRight') || []);
        return this.connection.sendRequest(request)
    }

    setVariable(sessionVariable: Object, optionalParams?: paramTypes.setVariableParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'setVariable', <XmlmcParams>Object.assign({}, {sessionVariable}, optionalParams || {}), this.paramMap.get('setVariable') || []);
        return this.connection.sendRequest(request)
    }

    switchAnalystContext(groupId: string, optionalParams?: paramTypes.switchAnalystContextParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'switchAnalystContext', <XmlmcParams>Object.assign({}, {groupId}, optionalParams || {}), this.paramMap.get('switchAnalystContext') || []);
        return this.connection.sendRequest(request)
    }

    unlockCustomerAccount(selfServiceInstance: string, customerId: string, optionalParams?: paramTypes.unlockCustomerAccountParams): Promise<XmlmcResponse> {
        let request = new Request(this.service, 'unlockCustomerAccount', <XmlmcParams>Object.assign({}, {
            selfServiceInstance,
            customerId
        }, optionalParams || {}), this.paramMap.get('unlockCustomerAccount') || []);
        return this.connection.sendRequest(request)
    }
}

