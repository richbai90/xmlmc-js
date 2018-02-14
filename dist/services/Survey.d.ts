import * as paramTypes from '../types/SurveyTypes';
import { Connection, XmlmcResponse } from '../Connection';
import { XmlMethodCall } from '..';
export declare class Survey {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: XmlMethodCall);
    sendCustomerCallSurvey(surveyId: Object, callref: Object, optionalParams?: paramTypes.sendCustomerCallSurveyParams): Promise<XmlmcResponse>;
}
