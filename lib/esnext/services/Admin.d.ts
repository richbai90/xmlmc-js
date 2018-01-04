import * as paramTypes from '../types/AdminTypes';
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Admin {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    addEmailRoutingRule(condition: string, optionalParams?: paramTypes.addEmailRoutingRuleParams): Promise<XmlmcResponse>;
    deleteEmailRoutingRule(condition: string, optionalParams?: paramTypes.deleteEmailRoutingRuleParams): Promise<XmlmcResponse>;
    getAuthentication(userId: string, optionalParams?: paramTypes.getAuthenticationParams): Promise<XmlmcResponse>;
    getServerConfiguration(optionalParams?: paramTypes.getServerConfigurationParams): Promise<XmlmcResponse>;
    lockAnalyst(userId: string, optionalParams?: paramTypes.lockAnalystParams): Promise<XmlmcResponse>;
    setAuthentication(userId: string, authenticationString: string, optionalParams?: paramTypes.setAuthenticationParams): Promise<XmlmcResponse>;
    unlockAnalyst(userId: string, optionalParams?: paramTypes.unlockAnalystParams): Promise<XmlmcResponse>;
}
