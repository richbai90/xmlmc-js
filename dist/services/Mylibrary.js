"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Mylibrary {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'mylibrary';
        this.paramMap = new _map2.default([['addUserLibraryResource', ['resource']], ['createFolder', ['folder']], ['deleteFile', ['file']], ['deleteFolder', ['folder', 'forceDelete']], ['deleteUserLibraryResource', ['name']], ['getFile', ['path']], ['getFolder', ['path', 'includeFiles']], ['getFolderFromPath', ['path', 'includeSubFolders']], ['putFile', ['path', 'forceOverwrite', 'file']], ['renameItem', ['path', 'newName']]]);
    }
    addUserLibraryResource(resource, optionalParams) {
        let request = new Request_1.Request(this.service, 'addUserLibraryResource', (0, _assign2.default)({}, { resource }, optionalParams || {}), this.paramMap.get('addUserLibraryResource') || []);
        return this.connection.sendRequest(request);
    }
    createFolder(folder, optionalParams) {
        let request = new Request_1.Request(this.service, 'createFolder', (0, _assign2.default)({}, { folder }, optionalParams || {}), this.paramMap.get('createFolder') || []);
        return this.connection.sendRequest(request);
    }
    deleteFile(file, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteFile', (0, _assign2.default)({}, { file }, optionalParams || {}), this.paramMap.get('deleteFile') || []);
        return this.connection.sendRequest(request);
    }
    deleteFolder(folder, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteFolder', (0, _assign2.default)({}, { folder }, optionalParams || {}), this.paramMap.get('deleteFolder') || []);
        return this.connection.sendRequest(request);
    }
    deleteUserLibraryResource(name, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteUserLibraryResource', (0, _assign2.default)({}, { name }, optionalParams || {}), this.paramMap.get('deleteUserLibraryResource') || []);
        return this.connection.sendRequest(request);
    }
    getFile(path, optionalParams) {
        let request = new Request_1.Request(this.service, 'getFile', (0, _assign2.default)({}, { path }, optionalParams || {}), this.paramMap.get('getFile') || []);
        return this.connection.sendRequest(request);
    }
    getFolder(optionalParams) {
        let request = new Request_1.Request(this.service, 'getFolder', optionalParams || {}, this.paramMap.get('getFolder') || []);
        return this.connection.sendRequest(request);
    }
    getFolderFromPath(optionalParams) {
        let request = new Request_1.Request(this.service, 'getFolderFromPath', optionalParams || {}, this.paramMap.get('getFolderFromPath') || []);
        return this.connection.sendRequest(request);
    }
    getUserLibraryResources(optionalParams) {
        let request = new Request_1.Request(this.service, 'getUserLibraryResources', optionalParams || {}, this.paramMap.get('getUserLibraryResources') || []);
        return this.connection.sendRequest(request);
    }
    putFile(path, file, optionalParams) {
        let request = new Request_1.Request(this.service, 'putFile', (0, _assign2.default)({}, {
            path,
            file
        }, optionalParams || {}), this.paramMap.get('putFile') || []);
        return this.connection.sendRequest(request);
    }
    renameItem(path, newName, optionalParams) {
        let request = new Request_1.Request(this.service, 'renameItem', (0, _assign2.default)({}, {
            path,
            newName
        }, optionalParams || {}), this.paramMap.get('renameItem') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Mylibrary = Mylibrary;