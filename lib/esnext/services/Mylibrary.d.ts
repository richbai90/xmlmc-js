import * as paramTypes from '../types/MylibraryTypes';
import { AxiosError, AxiosResponse } from "axios";
import { Connection } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Mylibrary {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    addUserLibraryResource(resource: Object, optionalParams?: paramTypes.addUserLibraryResourceParams): Promise<AxiosResponse | AxiosError>;
    createFolder(folder: string, optionalParams?: paramTypes.createFolderParams): Promise<AxiosResponse | AxiosError>;
    deleteFile(file: string, optionalParams?: paramTypes.deleteFileParams): Promise<AxiosResponse | AxiosError>;
    deleteFolder(folder: string, optionalParams?: paramTypes.deleteFolderParams): Promise<AxiosResponse | AxiosError>;
    deleteUserLibraryResource(name: string, optionalParams?: paramTypes.deleteUserLibraryResourceParams): Promise<AxiosResponse | AxiosError>;
    getFile(path: string, optionalParams?: paramTypes.getFileParams): Promise<AxiosResponse | AxiosError>;
    getFolder(optionalParams?: paramTypes.getFolderParams): Promise<AxiosResponse | AxiosError>;
    getFolderFromPath(optionalParams?: paramTypes.getFolderFromPathParams): Promise<AxiosResponse | AxiosError>;
    getUserLibraryResources(optionalParams?: paramTypes.getUserLibraryResourcesParams): Promise<AxiosResponse | AxiosError>;
    putFile(path: string, file: Object, optionalParams?: paramTypes.putFileParams): Promise<AxiosResponse | AxiosError>;
    renameItem(path: string, newName: string, optionalParams?: paramTypes.renameItemParams): Promise<AxiosResponse | AxiosError>;
}
