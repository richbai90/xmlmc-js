"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class System {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'system';
        this.paramMap = new _map2.default([['getTimezoneDetails', ['timeZone']], ['getTimezoneOffset', ['timeZone']], ['multiClipAddItem', ['personalClipboard', 'name', 'itemData', 'multiClipGroup']], ['multiClipDeleteItem', ['itemId']], ['multiClipGetItemData', ['itemId']], ['multiClipSetItemData', ['itemId', 'itemData']], ['offsetEpochTime', ['epochTime', 'timeZone']], ['sendProductFeedback', ['app', 'message', 'nps']]]);
    }
    getFileTypeRestriction(optionalParams) {
        let request = new Request_1.Request(this.service, 'getFileTypeRestriction', optionalParams || {}, this.paramMap.get('getFileTypeRestriction') || []);
        return this.connection.sendRequest(request);
    }
    getSystemInfo(optionalParams) {
        let request = new Request_1.Request(this.service, 'getSystemInfo', optionalParams || {}, this.paramMap.get('getSystemInfo') || []);
        return this.connection.sendRequest(request);
    }
    getTimezoneDetails(optionalParams) {
        let request = new Request_1.Request(this.service, 'getTimezoneDetails', optionalParams || {}, this.paramMap.get('getTimezoneDetails') || []);
        return this.connection.sendRequest(request);
    }
    getTimezoneList(optionalParams) {
        let request = new Request_1.Request(this.service, 'getTimezoneList', optionalParams || {}, this.paramMap.get('getTimezoneList') || []);
        return this.connection.sendRequest(request);
    }
    getTimezoneOffset(optionalParams) {
        let request = new Request_1.Request(this.service, 'getTimezoneOffset', optionalParams || {}, this.paramMap.get('getTimezoneOffset') || []);
        return this.connection.sendRequest(request);
    }
    multiClipAddItem(personalClipboard, name, itemData, optionalParams) {
        let request = new Request_1.Request(this.service, 'multiClipAddItem', (0, _assign2.default)({}, {
            personalClipboard,
            name,
            itemData
        }, optionalParams || {}), this.paramMap.get('multiClipAddItem') || []);
        return this.connection.sendRequest(request);
    }
    multiClipDeleteItem(itemId, optionalParams) {
        let request = new Request_1.Request(this.service, 'multiClipDeleteItem', (0, _assign2.default)({}, { itemId }, optionalParams || {}), this.paramMap.get('multiClipDeleteItem') || []);
        return this.connection.sendRequest(request);
    }
    multiClipGetItemData(itemId, optionalParams) {
        let request = new Request_1.Request(this.service, 'multiClipGetItemData', (0, _assign2.default)({}, { itemId }, optionalParams || {}), this.paramMap.get('multiClipGetItemData') || []);
        return this.connection.sendRequest(request);
    }
    multiClipGetTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'multiClipGetTree', optionalParams || {}, this.paramMap.get('multiClipGetTree') || []);
        return this.connection.sendRequest(request);
    }
    multiClipSetItemData(itemId, itemData, optionalParams) {
        let request = new Request_1.Request(this.service, 'multiClipSetItemData', (0, _assign2.default)({}, {
            itemId,
            itemData
        }, optionalParams || {}), this.paramMap.get('multiClipSetItemData') || []);
        return this.connection.sendRequest(request);
    }
    offsetEpochTime(epochTime, optionalParams) {
        let request = new Request_1.Request(this.service, 'offsetEpochTime', (0, _assign2.default)({}, { epochTime }, optionalParams || {}), this.paramMap.get('offsetEpochTime') || []);
        return this.connection.sendRequest(request);
    }
    sendProductFeedback(message, optionalParams) {
        let request = new Request_1.Request(this.service, 'sendProductFeedback', (0, _assign2.default)({}, { message }, optionalParams || {}), this.paramMap.get('sendProductFeedback') || []);
        return this.connection.sendRequest(request);
    }
}
exports.System = System;