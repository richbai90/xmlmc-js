import * as paramTypes from '../types/SystemTypes'
import {AxiosError, AxiosResponse} from "axios";
import {XmlmcParams} from "../types/XmlmcTypes";
import {Connection} from '../Connection'
import Xmlmc from '../XmlMethodCall'
import {Request} from '../Request'

    export class System {
        private connection: Connection;
        private xmlmc: Xmlmc;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: Xmlmc) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'system';
            this.paramMap = new Map([['getTimezoneDetails', ['timeZone',]], ['getTimezoneOffset', ['timeZone',]], ['multiClipAddItem', ['personalClipboard', 'name', 'itemData', 'multiClipGroup',]], ['multiClipDeleteItem', ['itemId',]], ['multiClipGetItemData', ['itemId',]], ['multiClipSetItemData', ['itemId', 'itemData',]], ['offsetEpochTime', ['epochTime', 'timeZone',]], ['sendProductFeedback', ['app', 'message', 'nps',]],]);
        }

        getFileTypeRestriction(optionalParams?: paramTypes.getFileTypeRestrictionParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'getFileTypeRestriction', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getFileTypeRestriction') || []);
            return this.connection.sendRequest(request)
        }

        getSystemInfo(optionalParams?: paramTypes.getSystemInfoParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'getSystemInfo', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getSystemInfo') || []);
            return this.connection.sendRequest(request)
        }

        getTimezoneDetails(optionalParams?: paramTypes.getTimezoneDetailsParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'getTimezoneDetails', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getTimezoneDetails') || []);
            return this.connection.sendRequest(request)
        }

        getTimezoneList(optionalParams?: paramTypes.getTimezoneListParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'getTimezoneList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getTimezoneList') || []);
            return this.connection.sendRequest(request)
        }

        getTimezoneOffset(optionalParams?: paramTypes.getTimezoneOffsetParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'getTimezoneOffset', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getTimezoneOffset') || []);
            return this.connection.sendRequest(request)
        }

        multiClipAddItem(personalClipboard: boolean, name: string, itemData: string, optionalParams?: paramTypes.multiClipAddItemParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'multiClipAddItem', <XmlmcParams>Object.assign({}, {
                personalClipboard,
                name,
                itemData
            }, optionalParams || {}), this.paramMap.get('multiClipAddItem') || []);
            return this.connection.sendRequest(request)
        }

        multiClipDeleteItem(itemId: Object, optionalParams?: paramTypes.multiClipDeleteItemParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'multiClipDeleteItem', <XmlmcParams>Object.assign({}, {itemId}, optionalParams || {}), this.paramMap.get('multiClipDeleteItem') || []);
            return this.connection.sendRequest(request)
        }

        multiClipGetItemData(itemId: number, optionalParams?: paramTypes.multiClipGetItemDataParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'multiClipGetItemData', <XmlmcParams>Object.assign({}, {itemId}, optionalParams || {}), this.paramMap.get('multiClipGetItemData') || []);
            return this.connection.sendRequest(request)
        }

        multiClipGetTree(optionalParams?: paramTypes.multiClipGetTreeParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'multiClipGetTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('multiClipGetTree') || []);
            return this.connection.sendRequest(request)
        }

        multiClipSetItemData(itemId: Object, itemData: string, optionalParams?: paramTypes.multiClipSetItemDataParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'multiClipSetItemData', <XmlmcParams>Object.assign({}, {
                itemId,
                itemData
            }, optionalParams || {}), this.paramMap.get('multiClipSetItemData') || []);
            return this.connection.sendRequest(request)
        }

        offsetEpochTime(epochTime: number, optionalParams?: paramTypes.offsetEpochTimeParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'offsetEpochTime', <XmlmcParams>Object.assign({}, {epochTime}, optionalParams || {}), this.paramMap.get('offsetEpochTime') || []);
            return this.connection.sendRequest(request)
        }

        sendProductFeedback(message: string, optionalParams?: paramTypes.sendProductFeedbackParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'sendProductFeedback', <XmlmcParams>Object.assign({}, {message}, optionalParams || {}), this.paramMap.get('sendProductFeedback') || []);
            return this.connection.sendRequest(request)
        }
    }

