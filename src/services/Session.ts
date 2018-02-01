import * as paramTypes from '../types/SessionTypes'
import {AxiosError, AxiosResponse} from "axios";
import {XmlmcParams} from "../types/XmlmcTypes";
import {Connection, XmlmcResponse} from '../Connection'
import Xmlmc from '..'
import {Request} from '../Request'


    export class Session {
        private connection: Connection;
        private xmlmc: Xmlmc;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: Xmlmc) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'session';
            this.paramMap = new Map([['analystLogoff', ['sessionId',]], ['analystLogon', ['userId', 'password',]], ['analystLogonTrust', ['userId', 'secretKey',]], ['bindSession', ['sessionId',]], ['changePassword', ['oldPassword', 'newPassword',]], ['convertDateTimeInText', ['inputText',]], ['getSessionInfo', ['sessionId',]], ['getSessionInfo2', ['sessionId',]], ['hasRight', ['userRight',]], ['isSessionValid', ['sessionId',]], ['lockCustomerAccount', ['selfServiceInstance', 'customerId', 'permanent', 'duration',]], ['selfServiceLogon', ['selfServiceInstance', 'customerId', 'password',]], ['setDatabaseRight', ['tableName', 'rightFlag', 'rightAllowed',]], ['setOutputValidation', ['validateResultMessage',]], ['setUserRight', ['rightClass', 'rightFlag', 'rightAllowed',]], ['setVariable', ['sessionVariable',]], ['switchAnalystContext', ['groupId', 'analystId',]], ['unlockCustomerAccount', ['selfServiceInstance', 'customerId',]],]);
        }

        analystLogoff(optionalParams?: paramTypes.analystLogoffParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'analystLogoff', <XmlmcParams>(optionalParams || {}), this.paramMap.get('analystLogoff') || []);
            return this.connection.sendRequest(request)
        }

        analystLogon(userId: string, password: string, optionalParams?: paramTypes.analystLogonParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'analystLogon', <XmlmcParams>Object.assign({}, {
                userId,
                password
            }, optionalParams || {}), this.paramMap.get('analystLogon') || []);
            return this.connection.sendRequest(request)
        }

        analystLogonTrust(userId: string, secretKey: string, optionalParams?: paramTypes.analystLogonTrustParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'analystLogonTrust', <XmlmcParams>Object.assign({}, {
                userId,
                secretKey
            }, optionalParams || {}), this.paramMap.get('analystLogonTrust') || []);
            return this.connection.sendRequest(request)
        }

        bindSession(sessionId: string, optionalParams?: paramTypes.bindSessionParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'bindSession', <XmlmcParams>Object.assign({}, {sessionId}, optionalParams || {}), this.paramMap.get('bindSession') || []);
            return this.connection.sendRequest(request)
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
            return this.connection.sendRequest(request)
        }

        selfServiceLogon(selfServiceInstance: string, customerId: string, password: string, optionalParams?: paramTypes.selfServiceLogonParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'selfServiceLogon', <XmlmcParams>Object.assign({}, {
                selfServiceInstance,
                customerId,
                password
            }, optionalParams || {}), this.paramMap.get('selfServiceLogon') || []);
            return this.connection.sendRequest(request)
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

