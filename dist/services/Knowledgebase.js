"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Knowledgebase {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'knowledgebase';
        this.paramMap = new _map2.default([['articleAdd', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'problem', 'solution', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired']], ['articleDelete', ['docRef', 'forceDelete']], ['articleUpdate', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'problem', 'solution', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired']], ['catalogAdd', ['name']], ['catalogDelete', ['catalogId']], ['catalogRename', ['catalogId', 'newName']], ['documentAdd', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'forceOverwrite', 'document', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired']], ['documentAddChange', ['docRef', 'date', 'analystID', 'groupID', 'description']], ['documentClearChanges', ['docRef']], ['documentDelete', ['docRef', 'forceDelete']], ['documentFlagForModification', ['docRef', 'clearFlag']], ['documentGetCallref', ['docRef']], ['documentGetChanges', ['docRef']], ['documentGetInfo', ['docRef']], ['documentGetRelated', ['docRef']], ['documentGetSurveyAverageUsefulness', ['docRef']], ['documentGetType', ['docRef']], ['documentGetUrl', ['docRef']], ['documentIncreaseAccessCounter', ['docRef', 'counterValue']], ['documentList', ['catalogId', 'maxResults']], ['documentSetRelated', ['docRef', 'relatedDocRef']], ['documentSetSurveyInfo', ['docRef', 'analystID', 'groupID', 'usefulness']], ['documentUpdate', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'document', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired']], ['doesFileExist', ['fileName']], ['isCallInKnowledgeBase', ['callref']], ['queryKeyword', ['queryString', 'catalogId', 'queryType', 'searchTitle', 'searchKeywords', 'searchProblem', 'searchSolution', 'searchCallProbCode', 'includeRetiredDocuments', 'maxResults', 'sortResultsBy', 'sortResultsAsc']], ['queryNatural', ['queryString', 'catalogId', 'includeRetiredDocuments', 'maxResults', 'sortResultsBy', 'sortResultsAsc']], ['unpublishedCallAdd', ['callRef']], ['unpublishedCallDelete', ['callRef']], ['unpublishedCallList', ['maxResults']]]);
    }
    articleAdd(title, docVisibleToCustomers, docStatus, catalogId, optionalParams) {
        let request = new Request_1.Request(this.service, 'articleAdd', (0, _assign2.default)({}, {
            title,
            docVisibleToCustomers,
            docStatus,
            catalogId
        }, optionalParams || {}), this.paramMap.get('articleAdd') || []);
        return this.connection.sendRequest(request);
    }
    articleDelete(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'articleDelete', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('articleDelete') || []);
        return this.connection.sendRequest(request);
    }
    articleUpdate(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'articleUpdate', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('articleUpdate') || []);
        return this.connection.sendRequest(request);
    }
    catalogAdd(name, optionalParams) {
        let request = new Request_1.Request(this.service, 'catalogAdd', (0, _assign2.default)({}, { name }, optionalParams || {}), this.paramMap.get('catalogAdd') || []);
        return this.connection.sendRequest(request);
    }
    catalogDelete(catalogId, optionalParams) {
        let request = new Request_1.Request(this.service, 'catalogDelete', (0, _assign2.default)({}, { catalogId }, optionalParams || {}), this.paramMap.get('catalogDelete') || []);
        return this.connection.sendRequest(request);
    }
    catalogList(optionalParams) {
        let request = new Request_1.Request(this.service, 'catalogList', optionalParams || {}, this.paramMap.get('catalogList') || []);
        return this.connection.sendRequest(request);
    }
    catalogRename(catalogId, newName, optionalParams) {
        let request = new Request_1.Request(this.service, 'catalogRename', (0, _assign2.default)({}, {
            catalogId,
            newName
        }, optionalParams || {}), this.paramMap.get('catalogRename') || []);
        return this.connection.sendRequest(request);
    }
    documentAdd(title, docVisibleToCustomers, docStatus, catalogId, document, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentAdd', (0, _assign2.default)({}, {
            title,
            docVisibleToCustomers,
            docStatus,
            catalogId,
            document
        }, optionalParams || {}), this.paramMap.get('documentAdd') || []);
        return this.connection.sendRequest(request);
    }
    documentAddChange(docRef, date, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentAddChange', (0, _assign2.default)({}, {
            docRef,
            date
        }, optionalParams || {}), this.paramMap.get('documentAddChange') || []);
        return this.connection.sendRequest(request);
    }
    documentClearChanges(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentClearChanges', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentClearChanges') || []);
        return this.connection.sendRequest(request);
    }
    documentDelete(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentDelete', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentDelete') || []);
        return this.connection.sendRequest(request);
    }
    documentFlagForModification(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentFlagForModification', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentFlagForModification') || []);
        return this.connection.sendRequest(request);
    }
    documentGetCallref(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetCallref', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetCallref') || []);
        return this.connection.sendRequest(request);
    }
    documentGetChanges(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetChanges', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetChanges') || []);
        return this.connection.sendRequest(request);
    }
    documentGetInfo(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetInfo', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetInfo') || []);
        return this.connection.sendRequest(request);
    }
    documentGetRelated(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetRelated', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetRelated') || []);
        return this.connection.sendRequest(request);
    }
    documentGetSurveyAverageUsefulness(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetSurveyAverageUsefulness', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetSurveyAverageUsefulness') || []);
        return this.connection.sendRequest(request);
    }
    documentGetType(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetType', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetType') || []);
        return this.connection.sendRequest(request);
    }
    documentGetUrl(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetUrl', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetUrl') || []);
        return this.connection.sendRequest(request);
    }
    documentIncreaseAccessCounter(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentIncreaseAccessCounter', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentIncreaseAccessCounter') || []);
        return this.connection.sendRequest(request);
    }
    documentList(optionalParams) {
        let request = new Request_1.Request(this.service, 'documentList', optionalParams || {}, this.paramMap.get('documentList') || []);
        return this.connection.sendRequest(request);
    }
    documentSetRelated(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentSetRelated', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentSetRelated') || []);
        return this.connection.sendRequest(request);
    }
    documentSetSurveyInfo(docRef, analystID, groupID, usefulness, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentSetSurveyInfo', (0, _assign2.default)({}, {
            docRef,
            analystID,
            groupID,
            usefulness
        }, optionalParams || {}), this.paramMap.get('documentSetSurveyInfo') || []);
        return this.connection.sendRequest(request);
    }
    documentUpdate(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentUpdate', (0, _assign2.default)({}, { docRef }, optionalParams || {}), this.paramMap.get('documentUpdate') || []);
        return this.connection.sendRequest(request);
    }
    doesFileExist(fileName, optionalParams) {
        let request = new Request_1.Request(this.service, 'doesFileExist', (0, _assign2.default)({}, { fileName }, optionalParams || {}), this.paramMap.get('doesFileExist') || []);
        return this.connection.sendRequest(request);
    }
    isCallInKnowledgeBase(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'isCallInKnowledgeBase', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('isCallInKnowledgeBase') || []);
        return this.connection.sendRequest(request);
    }
    queryKeyword(queryString, queryType, optionalParams) {
        let request = new Request_1.Request(this.service, 'queryKeyword', (0, _assign2.default)({}, {
            queryString,
            queryType
        }, optionalParams || {}), this.paramMap.get('queryKeyword') || []);
        return this.connection.sendRequest(request);
    }
    queryNatural(queryString, optionalParams) {
        let request = new Request_1.Request(this.service, 'queryNatural', (0, _assign2.default)({}, { queryString }, optionalParams || {}), this.paramMap.get('queryNatural') || []);
        return this.connection.sendRequest(request);
    }
    templateList(optionalParams) {
        let request = new Request_1.Request(this.service, 'templateList', optionalParams || {}, this.paramMap.get('templateList') || []);
        return this.connection.sendRequest(request);
    }
    unpublishedCallAdd(callRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'unpublishedCallAdd', (0, _assign2.default)({}, { callRef }, optionalParams || {}), this.paramMap.get('unpublishedCallAdd') || []);
        return this.connection.sendRequest(request);
    }
    unpublishedCallDelete(callRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'unpublishedCallDelete', (0, _assign2.default)({}, { callRef }, optionalParams || {}), this.paramMap.get('unpublishedCallDelete') || []);
        return this.connection.sendRequest(request);
    }
    unpublishedCallList(optionalParams) {
        let request = new Request_1.Request(this.service, 'unpublishedCallList', optionalParams || {}, this.paramMap.get('unpublishedCallList') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Knowledgebase = Knowledgebase;