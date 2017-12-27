import {XmlmcParam} from "./XmlmcTypes"

export interface addEmailRoutingRuleParams {
    [key: string]: XmlmcParam;

    condition?: string;
    mode?: boolean;
    mailbox?: string;
    folder?: string;
}

export interface deleteEmailRoutingRuleParams {
    [key: string]: XmlmcParam;

    condition?: string;
    mode?: boolean;
    mailbox?: string;
    folder?: string;
}

export interface getAuthenticationParams {
    [key: string]: XmlmcParam;

    userId?: string;
}

export interface getServerConfigurationParams {
    [key: string]: XmlmcParam;

    EMailRoutingRules?: boolean;
}

export interface lockAnalystParams {
    [key: string]: XmlmcParam;

    userId?: string;
}

export interface setAuthenticationParams {
    [key: string]: XmlmcParam;

    userId?: string;
    authenticationType?: number;
    authenticationString?: string;
}

export interface unlockAnalystParams {
    [key: string]: XmlmcParam;

    userId?: string;
}
