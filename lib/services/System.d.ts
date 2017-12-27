import * as paramTypes from '../types/SystemTypes';
import { AxiosError, AxiosResponse } from "axios";
import { Connection } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class System {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    getFileTypeRestriction(optionalParams?: paramTypes.getFileTypeRestrictionParams): Promise<AxiosResponse | AxiosError>;
    getSystemInfo(optionalParams?: paramTypes.getSystemInfoParams): Promise<AxiosResponse | AxiosError>;
    getTimezoneDetails(optionalParams?: paramTypes.getTimezoneDetailsParams): Promise<AxiosResponse | AxiosError>;
    getTimezoneList(optionalParams?: paramTypes.getTimezoneListParams): Promise<AxiosResponse | AxiosError>;
    getTimezoneOffset(optionalParams?: paramTypes.getTimezoneOffsetParams): Promise<AxiosResponse | AxiosError>;
    multiClipAddItem(personalClipboard: boolean, name: string, itemData: string, optionalParams?: paramTypes.multiClipAddItemParams): Promise<AxiosResponse | AxiosError>;
    multiClipDeleteItem(itemId: Object, optionalParams?: paramTypes.multiClipDeleteItemParams): Promise<AxiosResponse | AxiosError>;
    multiClipGetItemData(itemId: number, optionalParams?: paramTypes.multiClipGetItemDataParams): Promise<AxiosResponse | AxiosError>;
    multiClipGetTree(optionalParams?: paramTypes.multiClipGetTreeParams): Promise<AxiosResponse | AxiosError>;
    multiClipSetItemData(itemId: Object, itemData: string, optionalParams?: paramTypes.multiClipSetItemDataParams): Promise<AxiosResponse | AxiosError>;
    offsetEpochTime(epochTime: number, optionalParams?: paramTypes.offsetEpochTimeParams): Promise<AxiosResponse | AxiosError>;
    sendProductFeedback(message: string, optionalParams?: paramTypes.sendProductFeedbackParams): Promise<AxiosResponse | AxiosError>;
}
