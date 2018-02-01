import * as paramTypes from '../types/AdminTypes'
import {AxiosError, AxiosResponse} from "axios";
import {XmlmcParams} from "../types/XmlmcTypes";
import {Connection, XmlmcResponse} from '../Connection'
import {XmlMethodCall} from '..'
import {Request} from '../Request'

    export class Admin {
        private connection: Connection;
        private xmlmc: XmlMethodCall;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: XmlMethodCall) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'admin';
            this.paramMap = new Map([['addEmailRoutingRule', ['condition', 'mode', 'mailbox', 'folder',]], ['deleteEmailRoutingRule', ['condition', 'mode', 'mailbox', 'folder',]], ['getAuthentication', ['userId',]], ['getServerConfiguration', ['EMailRoutingRules',]], ['lockAnalyst', ['userId',]], ['setAuthentication', ['userId', 'authenticationType', 'authenticationString',]], ['unlockAnalyst', ['userId',]],]);
        }

        addEmailRoutingRule(condition: string, optionalParams?: paramTypes.addEmailRoutingRuleParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'addEmailRoutingRule', <XmlmcParams>Object.assign({}, {condition}, optionalParams || {}), this.paramMap.get('addEmailRoutingRule') || []);
            return this.connection.sendRequest(request)
        }

        deleteEmailRoutingRule(condition: string, optionalParams?: paramTypes.deleteEmailRoutingRuleParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'deleteEmailRoutingRule', <XmlmcParams>Object.assign({}, {condition}, optionalParams || {}), this.paramMap.get('deleteEmailRoutingRule') || []);
            return this.connection.sendRequest(request)
        }

        getAuthentication(userId: string, optionalParams?: paramTypes.getAuthenticationParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getAuthentication', <XmlmcParams>Object.assign({}, {userId}, optionalParams || {}), this.paramMap.get('getAuthentication') || []);
            return this.connection.sendRequest(request)
        }

        getServerConfiguration(optionalParams?: paramTypes.getServerConfigurationParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getServerConfiguration', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getServerConfiguration') || []);
            return this.connection.sendRequest(request)
        }

        lockAnalyst(userId: string, optionalParams?: paramTypes.lockAnalystParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'lockAnalyst', <XmlmcParams>Object.assign({}, {userId}, optionalParams || {}), this.paramMap.get('lockAnalyst') || []);
            return this.connection.sendRequest(request)
        }

        setAuthentication(userId: string, authenticationString: string, optionalParams?: paramTypes.setAuthenticationParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'setAuthentication', <XmlmcParams>Object.assign({}, {
                userId,
                authenticationString
            }, optionalParams || {}), this.paramMap.get('setAuthentication') || []);
            return this.connection.sendRequest(request)
        }

        unlockAnalyst(userId: string, optionalParams?: paramTypes.unlockAnalystParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'unlockAnalyst', <XmlmcParams>Object.assign({}, {userId}, optionalParams || {}), this.paramMap.get('unlockAnalyst') || []);
            return this.connection.sendRequest(request)
        }
    }

