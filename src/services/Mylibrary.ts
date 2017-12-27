import * as paramTypes from '../types/MylibraryTypes'
import {AxiosError, AxiosResponse} from "axios";
import {XmlmcParams} from "../types/XmlmcTypes";
import {Connection} from '../Connection'
import Xmlmc from '../XmlMethodCall'
import {Request} from '../Request'

    export class Mylibrary {
        private connection: Connection;
        private xmlmc: Xmlmc;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: Xmlmc) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'mylibrary';
            this.paramMap = new Map([['addUserLibraryResource', ['resource',]], ['createFolder', ['folder',]], ['deleteFile', ['file',]], ['deleteFolder', ['folder', 'forceDelete',]], ['deleteUserLibraryResource', ['name',]], ['getFile', ['path',]], ['getFolder', ['path', 'includeFiles',]], ['getFolderFromPath', ['path', 'includeSubFolders',]], ['putFile', ['path', 'forceOverwrite', 'file',]], ['renameItem', ['path', 'newName',]],]);
        }

        addUserLibraryResource(resource: Object, optionalParams?: paramTypes.addUserLibraryResourceParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'addUserLibraryResource', <XmlmcParams>Object.assign({}, {resource}, optionalParams || {}), this.paramMap.get('addUserLibraryResource') || []);
            return this.connection.sendRequest(request)
        }

        createFolder(folder: string, optionalParams?: paramTypes.createFolderParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'createFolder', <XmlmcParams>Object.assign({}, {folder}, optionalParams || {}), this.paramMap.get('createFolder') || []);
            return this.connection.sendRequest(request)
        }

        deleteFile(file: string, optionalParams?: paramTypes.deleteFileParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'deleteFile', <XmlmcParams>Object.assign({}, {file}, optionalParams || {}), this.paramMap.get('deleteFile') || []);
            return this.connection.sendRequest(request)
        }

        deleteFolder(folder: string, optionalParams?: paramTypes.deleteFolderParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'deleteFolder', <XmlmcParams>Object.assign({}, {folder}, optionalParams || {}), this.paramMap.get('deleteFolder') || []);
            return this.connection.sendRequest(request)
        }

        deleteUserLibraryResource(name: string, optionalParams?: paramTypes.deleteUserLibraryResourceParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'deleteUserLibraryResource', <XmlmcParams>Object.assign({}, {name}, optionalParams || {}), this.paramMap.get('deleteUserLibraryResource') || []);
            return this.connection.sendRequest(request)
        }

        getFile(path: string, optionalParams?: paramTypes.getFileParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'getFile', <XmlmcParams>Object.assign({}, {path}, optionalParams || {}), this.paramMap.get('getFile') || []);
            return this.connection.sendRequest(request)
        }

        getFolder(optionalParams?: paramTypes.getFolderParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'getFolder', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getFolder') || []);
            return this.connection.sendRequest(request)
        }

        getFolderFromPath(optionalParams?: paramTypes.getFolderFromPathParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'getFolderFromPath', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getFolderFromPath') || []);
            return this.connection.sendRequest(request)
        }

        getUserLibraryResources(optionalParams?: paramTypes.getUserLibraryResourcesParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'getUserLibraryResources', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getUserLibraryResources') || []);
            return this.connection.sendRequest(request)
        }

        putFile(path: string, file: Object, optionalParams?: paramTypes.putFileParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'putFile', <XmlmcParams>Object.assign({}, {
                path,
                file
            }, optionalParams || {}), this.paramMap.get('putFile') || []);
            return this.connection.sendRequest(request)
        }

        renameItem(path: string, newName: string, optionalParams?: paramTypes.renameItemParams): Promise<AxiosResponse | AxiosError> {
            let request = new Request(this.service, 'renameItem', <XmlmcParams>Object.assign({}, {
                path,
                newName
            }, optionalParams || {}), this.paramMap.get('renameItem') || []);
            return this.connection.sendRequest(request)
        }
    }

