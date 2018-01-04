import * as paramTypes from '../types/AdminTypes';
import { AxiosError } from "axios";
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Admin {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    addEmailRoutingRule(condition: string, optionalParams?: paramTypes.addEmailRoutingRuleParams): Promise<XmlmcResponse | AxiosError>;
    deleteEmailRoutingRule(condition: string, optionalParams?: paramTypes.deleteEmailRoutingRuleParams): Promise<XmlmcResponse | AxiosError>;
    getAuthentication(userId: string, optionalParams?: paramTypes.getAuthenticationParams): Promise<XmlmcResponse | AxiosError>;
    getServerConfiguration(optionalParams?: paramTypes.getServerConfigurationParams): Promise<XmlmcResponse | AxiosError>;
    lockAnalyst(userId: string, optionalParams?: paramTypes.lockAnalystParams): Promise<XmlmcResponse | AxiosError>;
    setAuthentication(userId: string, authenticationString: string, optionalParams?: paramTypes.setAuthenticationParams): Promise<XmlmcResponse | AxiosError>;
    unlockAnalyst(userId: string, optionalParams?: paramTypes.unlockAnalystParams): Promise<XmlmcResponse | AxiosError>;
}
