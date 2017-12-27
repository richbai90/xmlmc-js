import * as paramTypes from '../types/AdminTypes';
import { AxiosError, AxiosResponse } from "axios";
import { Connection } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Admin {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    addEmailRoutingRule(condition: string, optionalParams?: paramTypes.addEmailRoutingRuleParams): Promise<AxiosResponse | AxiosError>;
    deleteEmailRoutingRule(condition: string, optionalParams?: paramTypes.deleteEmailRoutingRuleParams): Promise<AxiosResponse | AxiosError>;
    getAuthentication(userId: string, optionalParams?: paramTypes.getAuthenticationParams): Promise<AxiosResponse | AxiosError>;
    getServerConfiguration(optionalParams?: paramTypes.getServerConfigurationParams): Promise<AxiosResponse | AxiosError>;
    lockAnalyst(userId: string, optionalParams?: paramTypes.lockAnalystParams): Promise<AxiosResponse | AxiosError>;
    setAuthentication(userId: string, authenticationString: string, optionalParams?: paramTypes.setAuthenticationParams): Promise<AxiosResponse | AxiosError>;
    unlockAnalyst(userId: string, optionalParams?: paramTypes.unlockAnalystParams): Promise<AxiosResponse | AxiosError>;
}
