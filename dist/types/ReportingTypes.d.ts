import { XmlmcParam } from "./XmlmcTypes";
export interface getCustomReportTreeParams {
    [key: string]: XmlmcParam;
    folderPath?: string;
    recursive?: boolean;
}
export interface getSystemReportTreeParams {
    [key: string]: XmlmcParam;
    folderID?: number;
    recursive?: boolean;
}
