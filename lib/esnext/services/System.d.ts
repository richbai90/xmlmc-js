import * as paramTypes from '../types/SystemTypes';
import { AxiosError } from "axios";
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class System {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    getFileTypeRestriction(optionalParams?: paramTypes.getFileTypeRestrictionParams): Promise<XmlmcResponse | AxiosError>;
    getSystemInfo(optionalParams?: paramTypes.getSystemInfoParams): Promise<XmlmcResponse | AxiosError>;
    getTimezoneDetails(optionalParams?: paramTypes.getTimezoneDetailsParams): Promise<XmlmcResponse | AxiosError>;
    getTimezoneList(optionalParams?: paramTypes.getTimezoneListParams): Promise<XmlmcResponse | AxiosError>;
    getTimezoneOffset(optionalParams?: paramTypes.getTimezoneOffsetParams): Promise<XmlmcResponse | AxiosError>;
    multiClipAddItem(personalClipboard: boolean, name: string, itemData: string, optionalParams?: paramTypes.multiClipAddItemParams): Promise<XmlmcResponse | AxiosError>;
    multiClipDeleteItem(itemId: Object, optionalParams?: paramTypes.multiClipDeleteItemParams): Promise<XmlmcResponse | AxiosError>;
    multiClipGetItemData(itemId: number, optionalParams?: paramTypes.multiClipGetItemDataParams): Promise<XmlmcResponse | AxiosError>;
    multiClipGetTree(optionalParams?: paramTypes.multiClipGetTreeParams): Promise<XmlmcResponse | AxiosError>;
    multiClipSetItemData(itemId: Object, itemData: string, optionalParams?: paramTypes.multiClipSetItemDataParams): Promise<XmlmcResponse | AxiosError>;
    offsetEpochTime(epochTime: number, optionalParams?: paramTypes.offsetEpochTimeParams): Promise<XmlmcResponse | AxiosError>;
    sendProductFeedback(message: string, optionalParams?: paramTypes.sendProductFeedbackParams): Promise<XmlmcResponse | AxiosError>;
}
