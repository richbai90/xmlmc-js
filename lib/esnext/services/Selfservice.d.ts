import * as paramTypes from '../types/SelfserviceTypes';
import { AxiosError, AxiosResponse } from "axios";
import { Connection } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Selfservice {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    changePassword(oldPassword: string, newPassword: string, optionalParams?: paramTypes.changePasswordParams): Promise<AxiosResponse | AxiosError>;
    customerCancelCall(callRef: number, description: string, optionalParams?: paramTypes.customerCancelCallParams): Promise<AxiosResponse | AxiosError>;
    customerGetCallDetails(callref: number, optionalParams?: paramTypes.customerGetCallDetailsParams): Promise<AxiosResponse | AxiosError>;
    customerGetCallList(optionalParams?: paramTypes.customerGetCallListParams): Promise<AxiosResponse | AxiosError>;
    customerGetProfileCodeTree(optionalParams?: paramTypes.customerGetProfileCodeTreeParams): Promise<AxiosResponse | AxiosError>;
    customerGetResolutionCodeTree(optionalParams?: paramTypes.customerGetResolutionCodeTreeParams): Promise<AxiosResponse | AxiosError>;
    customerLogNewCall(callClass: string, groupId: string, optionalParams?: paramTypes.customerLogNewCallParams): Promise<AxiosResponse | AxiosError>;
    customerUpdateCall(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.customerUpdateCallParams): Promise<AxiosResponse | AxiosError>;
    customerUpdateCallValues(callref: number, additionalCallValues: Object, optionalParams?: paramTypes.customerUpdateCallValuesParams): Promise<AxiosResponse | AxiosError>;
    requestPasswordReset(selfServiceId: string, optionalParams?: paramTypes.requestPasswordResetParams): Promise<AxiosResponse | AxiosError>;
    verifyPasswordResetToken(selfServiceId: string, token: string, password: string, optionalParams?: paramTypes.verifyPasswordResetTokenParams): Promise<AxiosResponse | AxiosError>;
}
