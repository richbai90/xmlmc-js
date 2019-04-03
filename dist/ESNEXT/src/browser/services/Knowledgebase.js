"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../../Request");
class Knowledgebase {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'knowledgebase';
        this.paramMap = new Map([['articleAdd', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'problem', 'solution', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired',]], ['articleDelete', ['docRef', 'forceDelete',]], ['articleUpdate', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'problem', 'solution', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired',]], ['catalogAdd', ['name',]], ['catalogDelete', ['catalogId',]], ['catalogRename', ['catalogId', 'newName',]], ['documentAdd', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'forceOverwrite', 'document', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired',]], ['documentAddChange', ['docRef', 'date', 'analystID', 'groupID', 'description',]], ['documentClearChanges', ['docRef',]], ['documentDelete', ['docRef', 'forceDelete',]], ['documentFlagForModification', ['docRef', 'clearFlag',]], ['documentGetCallref', ['docRef',]], ['documentGetChanges', ['docRef',]], ['documentGetInfo', ['docRef',]], ['documentGetRelated', ['docRef',]], ['documentGetSurveyAverageUsefulness', ['docRef',]], ['documentGetType', ['docRef',]], ['documentGetUrl', ['docRef',]], ['documentIncreaseAccessCounter', ['docRef', 'counterValue',]], ['documentList', ['catalogId', 'maxResults',]], ['documentSetRelated', ['docRef', 'relatedDocRef',]], ['documentSetSurveyInfo', ['docRef', 'analystID', 'groupID', 'usefulness',]], ['documentUpdate', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'document', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired',]], ['doesFileExist', ['fileName',]], ['isCallInKnowledgeBase', ['callref',]], ['queryKeyword', ['queryString', 'catalogId', 'queryType', 'searchTitle', 'searchKeywords', 'searchProblem', 'searchSolution', 'searchCallProbCode', 'includeRetiredDocuments', 'maxResults', 'sortResultsBy', 'sortResultsAsc',]], ['queryNatural', ['queryString', 'catalogId', 'includeRetiredDocuments', 'maxResults', 'sortResultsBy', 'sortResultsAsc',]], ['unpublishedCallAdd', ['callRef',]], ['unpublishedCallDelete', ['callRef',]], ['unpublishedCallList', ['maxResults',]],]);
    }
    articleAdd(title, docVisibleToCustomers, docStatus, catalogId, optionalParams) {
        let request = new Request_1.Request(this.service, 'articleAdd', Object.assign({}, {
            title,
            docVisibleToCustomers,
            docStatus,
            catalogId
        }, optionalParams || {}), this.paramMap.get('articleAdd') || []);
        return this.connection.sendRequest(request);
    }
    articleDelete(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'articleDelete', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('articleDelete') || []);
        return this.connection.sendRequest(request);
    }
    articleUpdate(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'articleUpdate', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('articleUpdate') || []);
        return this.connection.sendRequest(request);
    }
    catalogAdd(name, optionalParams) {
        let request = new Request_1.Request(this.service, 'catalogAdd', Object.assign({}, { name }, optionalParams || {}), this.paramMap.get('catalogAdd') || []);
        return this.connection.sendRequest(request);
    }
    catalogDelete(catalogId, optionalParams) {
        let request = new Request_1.Request(this.service, 'catalogDelete', Object.assign({}, { catalogId }, optionalParams || {}), this.paramMap.get('catalogDelete') || []);
        return this.connection.sendRequest(request);
    }
    catalogList(optionalParams) {
        let request = new Request_1.Request(this.service, 'catalogList', (optionalParams || {}), this.paramMap.get('catalogList') || []);
        return this.connection.sendRequest(request);
    }
    catalogRename(catalogId, newName, optionalParams) {
        let request = new Request_1.Request(this.service, 'catalogRename', Object.assign({}, {
            catalogId,
            newName
        }, optionalParams || {}), this.paramMap.get('catalogRename') || []);
        return this.connection.sendRequest(request);
    }
    documentAdd(title, docVisibleToCustomers, docStatus, catalogId, document, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentAdd', Object.assign({}, {
            title,
            docVisibleToCustomers,
            docStatus,
            catalogId,
            document
        }, optionalParams || {}), this.paramMap.get('documentAdd') || []);
        return this.connection.sendRequest(request);
    }
    documentAddChange(docRef, date, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentAddChange', Object.assign({}, {
            docRef,
            date
        }, optionalParams || {}), this.paramMap.get('documentAddChange') || []);
        return this.connection.sendRequest(request);
    }
    documentClearChanges(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentClearChanges', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentClearChanges') || []);
        return this.connection.sendRequest(request);
    }
    documentDelete(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentDelete', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentDelete') || []);
        return this.connection.sendRequest(request);
    }
    documentFlagForModification(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentFlagForModification', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentFlagForModification') || []);
        return this.connection.sendRequest(request);
    }
    documentGetCallref(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetCallref', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetCallref') || []);
        return this.connection.sendRequest(request);
    }
    documentGetChanges(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetChanges', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetChanges') || []);
        return this.connection.sendRequest(request);
    }
    documentGetInfo(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetInfo', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetInfo') || []);
        return this.connection.sendRequest(request);
    }
    documentGetRelated(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetRelated', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetRelated') || []);
        return this.connection.sendRequest(request);
    }
    documentGetSurveyAverageUsefulness(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetSurveyAverageUsefulness', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetSurveyAverageUsefulness') || []);
        return this.connection.sendRequest(request);
    }
    documentGetType(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetType', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetType') || []);
        return this.connection.sendRequest(request);
    }
    documentGetUrl(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentGetUrl', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentGetUrl') || []);
        return this.connection.sendRequest(request);
    }
    documentIncreaseAccessCounter(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentIncreaseAccessCounter', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentIncreaseAccessCounter') || []);
        return this.connection.sendRequest(request);
    }
    documentList(optionalParams) {
        let request = new Request_1.Request(this.service, 'documentList', (optionalParams || {}), this.paramMap.get('documentList') || []);
        return this.connection.sendRequest(request);
    }
    documentSetRelated(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentSetRelated', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentSetRelated') || []);
        return this.connection.sendRequest(request);
    }
    documentSetSurveyInfo(docRef, analystID, groupID, usefulness, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentSetSurveyInfo', Object.assign({}, {
            docRef,
            analystID,
            groupID,
            usefulness
        }, optionalParams || {}), this.paramMap.get('documentSetSurveyInfo') || []);
        return this.connection.sendRequest(request);
    }
    documentUpdate(docRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'documentUpdate', Object.assign({}, { docRef }, optionalParams || {}), this.paramMap.get('documentUpdate') || []);
        return this.connection.sendRequest(request);
    }
    doesFileExist(fileName, optionalParams) {
        let request = new Request_1.Request(this.service, 'doesFileExist', Object.assign({}, { fileName }, optionalParams || {}), this.paramMap.get('doesFileExist') || []);
        return this.connection.sendRequest(request);
    }
    isCallInKnowledgeBase(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'isCallInKnowledgeBase', Object.assign({}, { callref }, optionalParams || {}), this.paramMap.get('isCallInKnowledgeBase') || []);
        return this.connection.sendRequest(request);
    }
    queryKeyword(queryString, queryType, optionalParams) {
        let request = new Request_1.Request(this.service, 'queryKeyword', Object.assign({}, {
            queryString,
            queryType
        }, optionalParams || {}), this.paramMap.get('queryKeyword') || []);
        return this.connection.sendRequest(request);
    }
    queryNatural(queryString, optionalParams) {
        let request = new Request_1.Request(this.service, 'queryNatural', Object.assign({}, { queryString }, optionalParams || {}), this.paramMap.get('queryNatural') || []);
        return this.connection.sendRequest(request);
    }
    templateList(optionalParams) {
        let request = new Request_1.Request(this.service, 'templateList', (optionalParams || {}), this.paramMap.get('templateList') || []);
        return this.connection.sendRequest(request);
    }
    unpublishedCallAdd(callRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'unpublishedCallAdd', Object.assign({}, { callRef }, optionalParams || {}), this.paramMap.get('unpublishedCallAdd') || []);
        return this.connection.sendRequest(request);
    }
    unpublishedCallDelete(callRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'unpublishedCallDelete', Object.assign({}, { callRef }, optionalParams || {}), this.paramMap.get('unpublishedCallDelete') || []);
        return this.connection.sendRequest(request);
    }
    unpublishedCallList(optionalParams) {
        let request = new Request_1.Request(this.service, 'unpublishedCallList', (optionalParams || {}), this.paramMap.get('unpublishedCallList') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Knowledgebase = Knowledgebase;
