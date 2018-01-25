import * as paramTypes from '../../types/SystemTypes';
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class System {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    getFileTypeRestriction(optionalParams?: paramTypes.getFileTypeRestrictionParams): Promise<XmlmcResponse>;
    getSystemInfo(optionalParams?: paramTypes.getSystemInfoParams): Promise<XmlmcResponse>;
    getTimezoneDetails(optionalParams?: paramTypes.getTimezoneDetailsParams): Promise<XmlmcResponse>;
    getTimezoneList(optionalParams?: paramTypes.getTimezoneListParams): Promise<XmlmcResponse>;
    getTimezoneOffset(optionalParams?: paramTypes.getTimezoneOffsetParams): Promise<XmlmcResponse>;
    multiClipAddItem(personalClipboard: boolean, name: string, itemData: string, optionalParams?: paramTypes.multiClipAddItemParams): Promise<XmlmcResponse>;
    multiClipDeleteItem(itemId: Object, optionalParams?: paramTypes.multiClipDeleteItemParams): Promise<XmlmcResponse>;
    multiClipGetItemData(itemId: number, optionalParams?: paramTypes.multiClipGetItemDataParams): Promise<XmlmcResponse>;
    multiClipGetTree(optionalParams?: paramTypes.multiClipGetTreeParams): Promise<XmlmcResponse>;
    multiClipSetItemData(itemId: Object, itemData: string, optionalParams?: paramTypes.multiClipSetItemDataParams): Promise<XmlmcResponse>;
    offsetEpochTime(epochTime: number, optionalParams?: paramTypes.offsetEpochTimeParams): Promise<XmlmcResponse>;
    sendProductFeedback(message: string, optionalParams?: paramTypes.sendProductFeedbackParams): Promise<XmlmcResponse>;
}
