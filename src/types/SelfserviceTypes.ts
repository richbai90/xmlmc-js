import {XmlmcParam, XmlmcParams, EmbeddedFileAttachment} from "./XmlmcTypes"
export interface changePasswordParams {
[key: string] : XmlmcParam;
    oldPassword? : string;
    newPassword? : string;
}
export interface customerCancelCallParams {
[key: string] : XmlmcParam;
    callRef? : number;
    description? : string;
    extraUpdateDbValues? : XmlmcParam;
}
export interface customerGetCallDetailsParams {
[key: string] : XmlmcParam;
    callref? : number;
    formatValues? : boolean;
    returnMeta? : boolean;
    returnRawValues? : boolean;
}
export interface customerGetCallListParams {
[key: string] : XmlmcParam;
    returnOpen? : boolean;
    returnClosed? : boolean;
    returnCancelled? : boolean;
    formatValues? : boolean;
    returnMeta? : boolean;
    returnRawValues? : boolean;
}
export interface customerGetProfileCodeTreeParams {
[key: string] : XmlmcParam;
    node? : string;
    filter? : string;
    returnFullTree? : boolean;
    returnInactiveCodes? : boolean;
}
export interface customerGetResolutionCodeTreeParams {
[key: string] : XmlmcParam;
    node? : string;
    filter? : string;
    returnFullTree? : boolean;
    returnInactiveCodes? : boolean;
}
export interface customerLogNewCallParams {
[key: string] : XmlmcParam;
    logIncoming? : boolean;
    callClass? : string;
    slaName? : string;
    assetId? : string;
    costCenter? : string;
    probCode? : string;
    site? : string;
    condition? : number;
    groupId? : string;
    analystId? : string;
    timeSpent? : number;
    updateMessage? : string;
    updateCode? : string;
    updateSource? : string;
    fileAttachment? : EmbeddedFileAttachment;
    additionalCallValues? : XmlmcParam;
}
export interface customerUpdateCallParams {
[key: string] : XmlmcParam;
    callref? : number;
    timeSpent? : number;
    description? : string;
    updateSource? : string;
    updateCode? : string;
    fileAttachment? : EmbeddedFileAttachment;
    extraUpdateDbValues? : XmlmcParam;
}
export interface customerUpdateCallValuesParams {
[key: string] : XmlmcParam;
    callref? : number;
    actionVerb? : string;
    updateMessage? : string;
    additionalCallValues? : XmlmcParam;
}
export interface requestPasswordResetParams {
[key: string] : XmlmcParam;
    selfServiceId? : string;
    customerId? : string;
    loginId? : string;
}
export interface verifyPasswordResetTokenParams {
[key: string] : XmlmcParam;
    selfServiceId? : string;
    customerId? : string;
    loginId? : string;
    token? : string;
    password? : string;
}
