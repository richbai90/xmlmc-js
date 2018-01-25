import * as paramTypes from '../types/SelfserviceTypes';
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Selfservice {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    changePassword(oldPassword: string, newPassword: string, optionalParams?: paramTypes.changePasswordParams): Promise<XmlmcResponse>;
    customerCancelCall(callRef: number, description: string, optionalParams?: paramTypes.customerCancelCallParams): Promise<XmlmcResponse>;
    customerGetCallDetails(callref: number, optionalParams?: paramTypes.customerGetCallDetailsParams): Promise<XmlmcResponse>;
    customerGetCallList(optionalParams?: paramTypes.customerGetCallListParams): Promise<XmlmcResponse>;
    customerGetProfileCodeTree(optionalParams?: paramTypes.customerGetProfileCodeTreeParams): Promise<XmlmcResponse>;
    customerGetResolutionCodeTree(optionalParams?: paramTypes.customerGetResolutionCodeTreeParams): Promise<XmlmcResponse>;
    customerLogNewCall(callClass: string, groupId: string, optionalParams?: paramTypes.customerLogNewCallParams): Promise<XmlmcResponse>;
    customerUpdateCall(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.customerUpdateCallParams): Promise<XmlmcResponse>;
    customerUpdateCallValues(callref: number, additionalCallValues: Object, optionalParams?: paramTypes.customerUpdateCallValuesParams): Promise<XmlmcResponse>;
    requestPasswordReset(selfServiceId: string, optionalParams?: paramTypes.requestPasswordResetParams): Promise<XmlmcResponse>;
    verifyPasswordResetToken(selfServiceId: string, token: string, password: string, optionalParams?: paramTypes.verifyPasswordResetTokenParams): Promise<XmlmcResponse>;
}
