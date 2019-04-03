import * as paramTypes from'../../types/SelfserviceTypes'

import {XmlmcParams} from"../../types/XmlmcTypes";
import {Connection, XmlmcResponse} from '../Connection'
import {XmlMethodCall} from '..'
import {Request} from '../../Request'

    export class Selfservice {
        private connection: Connection;
        private xmlmc: XmlMethodCall;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: XmlMethodCall) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'selfservice';
            this.paramMap = new Map([['changePassword', ['oldPassword', 'newPassword',]], ['customerCancelCall', ['callRef', 'description', 'extraUpdateDbValues',]], ['customerGetCallDetails', ['callref', 'formatValues', 'returnMeta', 'returnRawValues',]], ['customerGetCallList', ['returnOpen', 'returnClosed', 'returnCancelled', 'formatValues', 'returnMeta', 'returnRawValues',]], ['customerGetProfileCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes',]], ['customerGetResolutionCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes',]], ['customerLogNewCall', ['logIncoming', 'callClass', 'slaName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'groupId', 'analystId', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'additionalCallValues',]], ['customerUpdateCall', ['callref', 'timeSpent', 'description', 'updateSource', 'updateCode', 'fileAttachment', 'extraUpdateDbValues',]], ['customerUpdateCallValues', ['callref', 'actionVerb', 'updateMessage', 'additionalCallValues',]], ['requestPasswordReset', ['selfServiceId', 'customerId', 'loginId',]], ['verifyPasswordResetToken', ['selfServiceId', 'customerId', 'loginId', 'token', 'password',]],]);
        }

        changePassword(oldPassword: string, newPassword: string, optionalParams?: paramTypes.changePasswordParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'changePassword', <XmlmcParams>Object.assign({}, {
                oldPassword,
                newPassword
            }, optionalParams || {}), this.paramMap.get('changePassword') || []);
            return this.connection.sendRequest(request)
        }

        customerCancelCall(callRef: number, description: string, optionalParams?: paramTypes.customerCancelCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'customerCancelCall', <XmlmcParams>Object.assign({}, {
                callRef,
                description
            }, optionalParams || {}), this.paramMap.get('customerCancelCall') || []);
            return this.connection.sendRequest(request)
        }

        customerGetCallDetails(callref: number, optionalParams?: paramTypes.customerGetCallDetailsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'customerGetCallDetails', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('customerGetCallDetails') || []);
            return this.connection.sendRequest(request)
        }

        customerGetCallList(optionalParams?: paramTypes.customerGetCallListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'customerGetCallList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('customerGetCallList') || []);
            return this.connection.sendRequest(request)
        }

        customerGetProfileCodeTree(optionalParams?: paramTypes.customerGetProfileCodeTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'customerGetProfileCodeTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('customerGetProfileCodeTree') || []);
            return this.connection.sendRequest(request)
        }

        customerGetResolutionCodeTree(optionalParams?: paramTypes.customerGetResolutionCodeTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'customerGetResolutionCodeTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('customerGetResolutionCodeTree') || []);
            return this.connection.sendRequest(request)
        }

        customerLogNewCall(callClass: string, groupId: string, optionalParams?: paramTypes.customerLogNewCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'customerLogNewCall', <XmlmcParams>Object.assign({}, {
                callClass,
                groupId
            }, optionalParams || {}), this.paramMap.get('customerLogNewCall') || []);
            return this.connection.sendRequest(request)
        }

        customerUpdateCall(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.customerUpdateCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'customerUpdateCall', <XmlmcParams>Object.assign({}, {
                callref,
                timeSpent,
                description
            }, optionalParams || {}), this.paramMap.get('customerUpdateCall') || []);
            return this.connection.sendRequest(request)
        }

        customerUpdateCallValues(callref: number, additionalCallValues: Object, optionalParams?: paramTypes.customerUpdateCallValuesParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'customerUpdateCallValues', <XmlmcParams>Object.assign({}, {
                callref,
                additionalCallValues
            }, optionalParams || {}), this.paramMap.get('customerUpdateCallValues') || []);
            return this.connection.sendRequest(request)
        }

        requestPasswordReset(selfServiceId: string, optionalParams?: paramTypes.requestPasswordResetParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'requestPasswordReset', <XmlmcParams>Object.assign({}, {selfServiceId}, optionalParams || {}), this.paramMap.get('requestPasswordReset') || []);
            return this.connection.sendRequest(request)
        }

        verifyPasswordResetToken(selfServiceId: string, token: string, password: string, optionalParams?: paramTypes.verifyPasswordResetTokenParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'verifyPasswordResetToken', <XmlmcParams>Object.assign({}, {
                selfServiceId,
                token,
                password
            }, optionalParams || {}), this.paramMap.get('verifyPasswordResetToken') || []);
            return this.connection.sendRequest(request)
        }
    }

