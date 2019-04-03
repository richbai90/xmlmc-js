import { XmlmcParam, UserLibraryResourceItem, EmbeddedFileAttachment } from "./XmlmcTypes";
export interface addUserLibraryResourceParams {
    [key: string]: XmlmcParam;
    resource?: UserLibraryResourceItem;
}
export interface createFolderParams {
    [key: string]: XmlmcParam;
    folder?: string;
}
export interface deleteFileParams {
    [key: string]: XmlmcParam;
    file?: string;
}
export interface deleteFolderParams {
    [key: string]: XmlmcParam;
    folder?: string;
    forceDelete?: boolean;
}
export interface deleteUserLibraryResourceParams {
    [key: string]: XmlmcParam;
    name?: string;
}
export interface getFileParams {
    [key: string]: XmlmcParam;
    path?: string;
}
export interface getFolderParams {
    [key: string]: XmlmcParam;
    path?: string;
    includeFiles?: boolean;
}
export interface getFolderFromPathParams {
    [key: string]: XmlmcParam;
    path?: string;
    includeSubFolders?: boolean;
}
export interface getUserLibraryResourcesParams {
    [key: string]: XmlmcParam;
}
export interface putFileParams {
    [key: string]: XmlmcParam;
    path?: string;
    forceOverwrite?: boolean;
    file?: EmbeddedFileAttachment;
}
export interface renameItemParams {
    [key: string]: XmlmcParam;
    path?: string;
    newName?: string;
}
