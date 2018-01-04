import * as paramTypes from '../types/SelfserviceTypes';
import { AxiosError } from "axios";
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Selfservice {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    changePassword(oldPassword: string, newPassword: string, optionalParams?: paramTypes.changePasswordParams): Promise<XmlmcResponse | AxiosError>;
    customerCancelCall(callRef: number, description: string, optionalParams?: paramTypes.customerCancelCallParams): Promise<XmlmcResponse | AxiosError>;
    customerGetCallDetails(callref: number, optionalParams?: paramTypes.customerGetCallDetailsParams): Promise<XmlmcResponse | AxiosError>;
    customerGetCallList(optionalParams?: paramTypes.customerGetCallListParams): Promise<XmlmcResponse | AxiosError>;
    customerGetProfileCodeTree(optionalParams?: paramTypes.customerGetProfileCodeTreeParams): Promise<XmlmcResponse | AxiosError>;
    customerGetResolutionCodeTree(optionalParams?: paramTypes.customerGetResolutionCodeTreeParams): Promise<XmlmcResponse | AxiosError>;
    customerLogNewCall(callClass: string, groupId: string, optionalParams?: paramTypes.customerLogNewCallParams): Promise<XmlmcResponse | AxiosError>;
    customerUpdateCall(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.customerUpdateCallParams): Promise<XmlmcResponse | AxiosError>;
    customerUpdateCallValues(callref: number, additionalCallValues: Object, optionalParams?: paramTypes.customerUpdateCallValuesParams): Promise<XmlmcResponse | AxiosError>;
    requestPasswordReset(selfServiceId: string, optionalParams?: paramTypes.requestPasswordResetParams): Promise<XmlmcResponse | AxiosError>;
    verifyPasswordResetToken(selfServiceId: string, token: string, password: string, optionalParams?: paramTypes.verifyPasswordResetTokenParams): Promise<XmlmcResponse | AxiosError>;
}
