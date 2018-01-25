import * as paramTypes from'../../types/SurveyTypes'
import {AxiosError, AxiosResponse} from "axios";
import {XmlmcParams} from"../../types/XmlmcTypes";
import {Connection, XmlmcResponse} from '../Connection'
import Xmlmc from '../XmlMethodCall'
import {Request} from '../../Request'

    export class Survey {
        private connection: Connection;
        private xmlmc: Xmlmc;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: Xmlmc) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'survey';
            this.paramMap = new Map([['sendCustomerCallSurvey', ['surveyId', 'callref',]],]);
        }

        sendCustomerCallSurvey(surveyId: Object, callref: Object, optionalParams?: paramTypes.sendCustomerCallSurveyParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'sendCustomerCallSurvey', <XmlmcParams>Object.assign({}, {
                surveyId,
                callref
            }, optionalParams || {}), this.paramMap.get('sendCustomerCallSurvey') || []);
            return this.connection.sendRequest(request)
        }
    }

