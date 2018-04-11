"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Mylibrary {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'mylibrary';
        this.paramMap = new Map([['addUserLibraryResource', ['resource',]], ['createFolder', ['folder',]], ['deleteFile', ['file',]], ['deleteFolder', ['folder', 'forceDelete',]], ['deleteUserLibraryResource', ['name',]], ['getFile', ['path',]], ['getFolder', ['path', 'includeFiles',]], ['getFolderFromPath', ['path', 'includeSubFolders',]], ['putFile', ['path', 'forceOverwrite', 'file',]], ['renameItem', ['path', 'newName',]],]);
    }
    addUserLibraryResource(resource, optionalParams) {
        let request = new Request_1.Request(this.service, 'addUserLibraryResource', Object.assign({}, { resource }, optionalParams || {}), this.paramMap.get('addUserLibraryResource') || []);
        return this.connection.sendRequest(request);
    }
    createFolder(folder, optionalParams) {
        let request = new Request_1.Request(this.service, 'createFolder', Object.assign({}, { folder }, optionalParams || {}), this.paramMap.get('createFolder') || []);
        return this.connection.sendRequest(request);
    }
    deleteFile(file, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteFile', Object.assign({}, { file }, optionalParams || {}), this.paramMap.get('deleteFile') || []);
        return this.connection.sendRequest(request);
    }
    deleteFolder(folder, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteFolder', Object.assign({}, { folder }, optionalParams || {}), this.paramMap.get('deleteFolder') || []);
        return this.connection.sendRequest(request);
    }
    deleteUserLibraryResource(name, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteUserLibraryResource', Object.assign({}, { name }, optionalParams || {}), this.paramMap.get('deleteUserLibraryResource') || []);
        return this.connection.sendRequest(request);
    }
    getFile(path, optionalParams) {
        let request = new Request_1.Request(this.service, 'getFile', Object.assign({}, { path }, optionalParams || {}), this.paramMap.get('getFile') || []);
        return this.connection.sendRequest(request);
    }
    getFolder(optionalParams) {
        let request = new Request_1.Request(this.service, 'getFolder', (optionalParams || {}), this.paramMap.get('getFolder') || []);
        return this.connection.sendRequest(request);
    }
    getFolderFromPath(optionalParams) {
        let request = new Request_1.Request(this.service, 'getFolderFromPath', (optionalParams || {}), this.paramMap.get('getFolderFromPath') || []);
        return this.connection.sendRequest(request);
    }
    getUserLibraryResources(optionalParams) {
        let request = new Request_1.Request(this.service, 'getUserLibraryResources', (optionalParams || {}), this.paramMap.get('getUserLibraryResources') || []);
        return this.connection.sendRequest(request);
    }
    putFile(path, file, optionalParams) {
        let request = new Request_1.Request(this.service, 'putFile', Object.assign({}, {
            path,
            file
        }, optionalParams || {}), this.paramMap.get('putFile') || []);
        return this.connection.sendRequest(request);
    }
    renameItem(path, newName, optionalParams) {
        let request = new Request_1.Request(this.service, 'renameItem', Object.assign({}, {
            path,
            newName
        }, optionalParams || {}), this.paramMap.get('renameItem') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Mylibrary = Mylibrary;
