import {XmlmcParam, XmlmcParams, } from "./XmlmcTypes"
export interface getFileTypeRestrictionParams {[key: string] : XmlmcParam;}
export interface getSystemInfoParams {[key: string] : XmlmcParam;}
export interface getTimezoneDetailsParams {
[key: string] : XmlmcParam;
    timeZone? : string;
}
export interface getTimezoneListParams {[key: string] : XmlmcParam;}
export interface getTimezoneOffsetParams {
[key: string] : XmlmcParam;
    timeZone? : string;
}
export interface multiClipAddItemParams {
[key: string] : XmlmcParam;
    personalClipboard? : boolean;
    name? : string;
    itemData? : string;
    multiClipGroup? : string;
}
export interface multiClipDeleteItemParams {
[key: string] : XmlmcParam;
    itemId? : number;
}
export interface multiClipGetItemDataParams {
[key: string] : XmlmcParam;
    itemId? : number;
}
export interface multiClipGetTreeParams {[key: string] : XmlmcParam;}
export interface multiClipSetItemDataParams {
[key: string] : XmlmcParam;
    itemId? : number;
    itemData? : string;
}
export interface offsetEpochTimeParams {
[key: string] : XmlmcParam;
    epochTime? : number;
    timeZone? : string;
}
export interface sendProductFeedbackParams {
[key: string] : XmlmcParam;
    app? : string;
    message? : string;
    nps? : number;
}
