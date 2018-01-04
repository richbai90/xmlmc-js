import * as paramTypes from '../types/MylibraryTypes';
import { AxiosError } from "axios";
import { Connection, XmlmcResponse } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Mylibrary {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    addUserLibraryResource(resource: Object, optionalParams?: paramTypes.addUserLibraryResourceParams): Promise<XmlmcResponse | AxiosError>;
    createFolder(folder: string, optionalParams?: paramTypes.createFolderParams): Promise<XmlmcResponse | AxiosError>;
    deleteFile(file: string, optionalParams?: paramTypes.deleteFileParams): Promise<XmlmcResponse | AxiosError>;
    deleteFolder(folder: string, optionalParams?: paramTypes.deleteFolderParams): Promise<XmlmcResponse | AxiosError>;
    deleteUserLibraryResource(name: string, optionalParams?: paramTypes.deleteUserLibraryResourceParams): Promise<XmlmcResponse | AxiosError>;
    getFile(path: string, optionalParams?: paramTypes.getFileParams): Promise<XmlmcResponse | AxiosError>;
    getFolder(optionalParams?: paramTypes.getFolderParams): Promise<XmlmcResponse | AxiosError>;
    getFolderFromPath(optionalParams?: paramTypes.getFolderFromPathParams): Promise<XmlmcResponse | AxiosError>;
    getUserLibraryResources(optionalParams?: paramTypes.getUserLibraryResourcesParams): Promise<XmlmcResponse | AxiosError>;
    putFile(path: string, file: Object, optionalParams?: paramTypes.putFileParams): Promise<XmlmcResponse | AxiosError>;
    renameItem(path: string, newName: string, optionalParams?: paramTypes.renameItemParams): Promise<XmlmcResponse | AxiosError>;
}
