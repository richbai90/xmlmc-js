import * as paramTypes from '../types/MylibraryTypes';
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Mylibrary {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    addUserLibraryResource(resource: Object, optionalParams?: paramTypes.addUserLibraryResourceParams): Promise<XmlmcResponse>;
    createFolder(folder: string, optionalParams?: paramTypes.createFolderParams): Promise<XmlmcResponse>;
    deleteFile(file: string, optionalParams?: paramTypes.deleteFileParams): Promise<XmlmcResponse>;
    deleteFolder(folder: string, optionalParams?: paramTypes.deleteFolderParams): Promise<XmlmcResponse>;
    deleteUserLibraryResource(name: string, optionalParams?: paramTypes.deleteUserLibraryResourceParams): Promise<XmlmcResponse>;
    getFile(path: string, optionalParams?: paramTypes.getFileParams): Promise<XmlmcResponse>;
    getFolder(optionalParams?: paramTypes.getFolderParams): Promise<XmlmcResponse>;
    getFolderFromPath(optionalParams?: paramTypes.getFolderFromPathParams): Promise<XmlmcResponse>;
    getUserLibraryResources(optionalParams?: paramTypes.getUserLibraryResourcesParams): Promise<XmlmcResponse>;
    putFile(path: string, file: Object, optionalParams?: paramTypes.putFileParams): Promise<XmlmcResponse>;
    renameItem(path: string, newName: string, optionalParams?: paramTypes.renameItemParams): Promise<XmlmcResponse>;
}
