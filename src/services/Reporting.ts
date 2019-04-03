import * as paramTypes from '../types/ReportingTypes'

import {XmlmcParams} from "../types/XmlmcTypes";
import {Connection, XmlmcResponse} from '../Connection'
import {XmlMethodCall} from '..'
import {Request} from '../Request'

    export class Reporting {
        private connection: Connection;
        private xmlmc: XmlMethodCall;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: XmlMethodCall) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'reporting';
            this.paramMap = new Map([['getCustomReportTree', ['folderPath', 'recursive',]], ['getSystemReportTree', ['folderID', 'recursive',]],]);
        }

        getCustomReportTree(optionalParams?: paramTypes.getCustomReportTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCustomReportTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getCustomReportTree') || []);
            return this.connection.sendRequest(request)
        }

        getSystemReportTree(optionalParams?: paramTypes.getSystemReportTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getSystemReportTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getSystemReportTree') || []);
            return this.connection.sendRequest(request)
        }
    }

