import { XmlmcParam, SessionVariable } from "./XmlmcTypes";
export interface analystLogoffParams {
    [key: string]: XmlmcParam;
    sessionId?: string;
}
export interface analystLogonParams {
    [key: string]: XmlmcParam;
    userId?: string;
    password?: string;
}
export interface analystLogonTrustParams {
    [key: string]: XmlmcParam;
    userId?: string;
    secretKey?: string;
}
export interface bindSessionParams {
    [key: string]: XmlmcParam;
    sessionId?: string;
}
export interface changePasswordParams {
    [key: string]: XmlmcParam;
    oldPassword?: string;
    newPassword?: string;
}
export interface closeLocalSessionParams {
    [key: string]: XmlmcParam;
}
export interface convertDateTimeInTextParams {
    [key: string]: XmlmcParam;
    inputText?: string;
}
export interface createLocalSessionParams {
    [key: string]: XmlmcParam;
}
export interface getSessionDDInfoParams {
    [key: string]: XmlmcParam;
}
export interface getSessionInfoParams {
    [key: string]: XmlmcParam;
    sessionId?: string;
}
export interface getSessionInfo2Params {
    [key: string]: XmlmcParam;
    sessionId?: string;
}
export interface hasRightParams {
    [key: string]: XmlmcParam;
    userRight?: string;
}
export interface isSessionValidParams {
    [key: string]: XmlmcParam;
    sessionId?: string;
}
export interface lockCustomerAccountParams {
    [key: string]: XmlmcParam;
    selfServiceInstance?: string;
    customerId?: string;
    permanent?: boolean;
    duration?: number;
}
export interface selfServiceLogoffParams {
    [key: string]: XmlmcParam;
}
export interface selfServiceLogonParams {
    [key: string]: XmlmcParam;
    selfServiceInstance?: string;
    customerId?: string;
    password?: string;
}
export interface setDatabaseRightParams {
    [key: string]: XmlmcParam;
    tableName?: string;
    rightFlag?: number;
    rightAllowed?: boolean;
}
export interface setOutputValidationParams {
    [key: string]: XmlmcParam;
    validateResultMessage?: boolean;
}
export interface setUserRightParams {
    [key: string]: XmlmcParam;
    rightClass?: string;
    rightFlag?: number;
    rightAllowed?: boolean;
}
export interface setVariableParams {
    [key: string]: XmlmcParam;
    sessionVariable?: SessionVariable;
}
export interface switchAnalystContextParams {
    [key: string]: XmlmcParam;
    groupId?: string;
    analystId?: string;
}
export interface unlockCustomerAccountParams {
    [key: string]: XmlmcParam;
    selfServiceInstance?: string;
    customerId?: string;
}
