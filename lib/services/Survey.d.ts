import * as paramTypes from '../types/SurveyTypes';
import { AxiosError, AxiosResponse } from "axios";
import { Connection } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Survey {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    sendCustomerCallSurvey(surveyId: Object, callref: Object, optionalParams?: paramTypes.sendCustomerCallSurveyParams): Promise<AxiosResponse | AxiosError>;
}
