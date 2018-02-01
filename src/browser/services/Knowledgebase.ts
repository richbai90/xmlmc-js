import * as paramTypes from'../../types/KnowledgebaseTypes'
import {AxiosError, AxiosResponse} from "axios";
import {XmlmcParams} from"../../types/XmlmcTypes";
import {Connection, XmlmcResponse} from '../Connection'
import {XmlMethodCall} from '..'
import {Request} from '../../Request'


    export class Knowledgebase {
        private connection: Connection;
        private xmlmc: XmlMethodCall;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: XmlMethodCall) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'knowledgebase';
            this.paramMap = new Map([['articleAdd', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'problem', 'solution', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired',]], ['articleDelete', ['docRef', 'forceDelete',]], ['articleUpdate', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'problem', 'solution', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired',]], ['catalogAdd', ['name',]], ['catalogDelete', ['catalogId',]], ['catalogRename', ['catalogId', 'newName',]], ['documentAdd', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'forceOverwrite', 'document', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired',]], ['documentAddChange', ['docRef', 'date', 'analystID', 'groupID', 'description',]], ['documentClearChanges', ['docRef',]], ['documentDelete', ['docRef', 'forceDelete',]], ['documentFlagForModification', ['docRef', 'clearFlag',]], ['documentGetCallref', ['docRef',]], ['documentGetChanges', ['docRef',]], ['documentGetInfo', ['docRef',]], ['documentGetRelated', ['docRef',]], ['documentGetSurveyAverageUsefulness', ['docRef',]], ['documentGetType', ['docRef',]], ['documentGetUrl', ['docRef',]], ['documentIncreaseAccessCounter', ['docRef', 'counterValue',]], ['documentList', ['catalogId', 'maxResults',]], ['documentSetRelated', ['docRef', 'relatedDocRef',]], ['documentSetSurveyInfo', ['docRef', 'analystID', 'groupID', 'usefulness',]], ['documentUpdate', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'document', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired',]], ['doesFileExist', ['fileName',]], ['isCallInKnowledgeBase', ['callref',]], ['queryKeyword', ['queryString', 'catalogId', 'queryType', 'searchTitle', 'searchKeywords', 'searchProblem', 'searchSolution', 'searchCallProbCode', 'includeRetiredDocuments', 'maxResults', 'sortResultsBy', 'sortResultsAsc',]], ['queryNatural', ['queryString', 'catalogId', 'includeRetiredDocuments', 'maxResults', 'sortResultsBy', 'sortResultsAsc',]], ['unpublishedCallAdd', ['callRef',]], ['unpublishedCallDelete', ['callRef',]], ['unpublishedCallList', ['maxResults',]],]);
        }

        articleAdd(title: string, docVisibleToCustomers: boolean, docStatus: Object, catalogId: Object, optionalParams?: paramTypes.articleAddParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'articleAdd', <XmlmcParams>Object.assign({}, {
                title,
                docVisibleToCustomers,
                docStatus,
                catalogId
            }, optionalParams || {}), this.paramMap.get('articleAdd') || []);
            return this.connection.sendRequest(request)
        }

        articleDelete(docRef: string, optionalParams?: paramTypes.articleDeleteParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'articleDelete', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('articleDelete') || []);
            return this.connection.sendRequest(request)
        }

        articleUpdate(docRef: string, optionalParams?: paramTypes.articleUpdateParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'articleUpdate', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('articleUpdate') || []);
            return this.connection.sendRequest(request)
        }

        catalogAdd(name: string, optionalParams?: paramTypes.catalogAddParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'catalogAdd', <XmlmcParams>Object.assign({}, {name}, optionalParams || {}), this.paramMap.get('catalogAdd') || []);
            return this.connection.sendRequest(request)
        }

        catalogDelete(catalogId: number, optionalParams?: paramTypes.catalogDeleteParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'catalogDelete', <XmlmcParams>Object.assign({}, {catalogId}, optionalParams || {}), this.paramMap.get('catalogDelete') || []);
            return this.connection.sendRequest(request)
        }

        catalogList(optionalParams?: paramTypes.catalogListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'catalogList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('catalogList') || []);
            return this.connection.sendRequest(request)
        }

        catalogRename(catalogId: number, newName: string, optionalParams?: paramTypes.catalogRenameParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'catalogRename', <XmlmcParams>Object.assign({}, {
                catalogId,
                newName
            }, optionalParams || {}), this.paramMap.get('catalogRename') || []);
            return this.connection.sendRequest(request)
        }

        documentAdd(title: string, docVisibleToCustomers: boolean, docStatus: number, catalogId: number, document: Object, optionalParams?: paramTypes.documentAddParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentAdd', <XmlmcParams>Object.assign({}, {
                title,
                docVisibleToCustomers,
                docStatus,
                catalogId,
                document
            }, optionalParams || {}), this.paramMap.get('documentAdd') || []);
            return this.connection.sendRequest(request)
        }

        documentAddChange(docRef: string, date: Date, optionalParams?: paramTypes.documentAddChangeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentAddChange', <XmlmcParams>Object.assign({}, {
                docRef,
                date
            }, optionalParams || {}), this.paramMap.get('documentAddChange') || []);
            return this.connection.sendRequest(request)
        }

        documentClearChanges(docRef: string, optionalParams?: paramTypes.documentClearChangesParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentClearChanges', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentClearChanges') || []);
            return this.connection.sendRequest(request)
        }

        documentDelete(docRef: string, optionalParams?: paramTypes.documentDeleteParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentDelete', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentDelete') || []);
            return this.connection.sendRequest(request)
        }

        documentFlagForModification(docRef: string, optionalParams?: paramTypes.documentFlagForModificationParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentFlagForModification', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentFlagForModification') || []);
            return this.connection.sendRequest(request)
        }

        documentGetCallref(docRef: string, optionalParams?: paramTypes.documentGetCallrefParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentGetCallref', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentGetCallref') || []);
            return this.connection.sendRequest(request)
        }

        documentGetChanges(docRef: string, optionalParams?: paramTypes.documentGetChangesParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentGetChanges', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentGetChanges') || []);
            return this.connection.sendRequest(request)
        }

        documentGetInfo(docRef: string, optionalParams?: paramTypes.documentGetInfoParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentGetInfo', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentGetInfo') || []);
            return this.connection.sendRequest(request)
        }

        documentGetRelated(docRef: string, optionalParams?: paramTypes.documentGetRelatedParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentGetRelated', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentGetRelated') || []);
            return this.connection.sendRequest(request)
        }

        documentGetSurveyAverageUsefulness(docRef: string, optionalParams?: paramTypes.documentGetSurveyAverageUsefulnessParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentGetSurveyAverageUsefulness', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentGetSurveyAverageUsefulness') || []);
            return this.connection.sendRequest(request)
        }

        documentGetType(docRef: string, optionalParams?: paramTypes.documentGetTypeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentGetType', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentGetType') || []);
            return this.connection.sendRequest(request)
        }

        documentGetUrl(docRef: string, optionalParams?: paramTypes.documentGetUrlParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentGetUrl', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentGetUrl') || []);
            return this.connection.sendRequest(request)
        }

        documentIncreaseAccessCounter(docRef: string, optionalParams?: paramTypes.documentIncreaseAccessCounterParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentIncreaseAccessCounter', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentIncreaseAccessCounter') || []);
            return this.connection.sendRequest(request)
        }

        documentList(optionalParams?: paramTypes.documentListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('documentList') || []);
            return this.connection.sendRequest(request)
        }

        documentSetRelated(docRef: string, optionalParams?: paramTypes.documentSetRelatedParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentSetRelated', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentSetRelated') || []);
            return this.connection.sendRequest(request)
        }

        documentSetSurveyInfo(docRef: string, analystID: string, groupID: string, usefulness: Object, optionalParams?: paramTypes.documentSetSurveyInfoParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentSetSurveyInfo', <XmlmcParams>Object.assign({}, {
                docRef,
                analystID,
                groupID,
                usefulness
            }, optionalParams || {}), this.paramMap.get('documentSetSurveyInfo') || []);
            return this.connection.sendRequest(request)
        }

        documentUpdate(docRef: string, optionalParams?: paramTypes.documentUpdateParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'documentUpdate', <XmlmcParams>Object.assign({}, {docRef}, optionalParams || {}), this.paramMap.get('documentUpdate') || []);
            return this.connection.sendRequest(request)
        }

        doesFileExist(fileName: string, optionalParams?: paramTypes.doesFileExistParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'doesFileExist', <XmlmcParams>Object.assign({}, {fileName}, optionalParams || {}), this.paramMap.get('doesFileExist') || []);
            return this.connection.sendRequest(request)
        }

        isCallInKnowledgeBase(callref: string, optionalParams?: paramTypes.isCallInKnowledgeBaseParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'isCallInKnowledgeBase', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('isCallInKnowledgeBase') || []);
            return this.connection.sendRequest(request)
        }

        queryKeyword(queryString: string, queryType: string, optionalParams?: paramTypes.queryKeywordParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'queryKeyword', <XmlmcParams>Object.assign({}, {
                queryString,
                queryType
            }, optionalParams || {}), this.paramMap.get('queryKeyword') || []);
            return this.connection.sendRequest(request)
        }

        queryNatural(queryString: string, optionalParams?: paramTypes.queryNaturalParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'queryNatural', <XmlmcParams>Object.assign({}, {queryString}, optionalParams || {}), this.paramMap.get('queryNatural') || []);
            return this.connection.sendRequest(request)
        }

        templateList(optionalParams?: paramTypes.templateListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'templateList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('templateList') || []);
            return this.connection.sendRequest(request)
        }

        unpublishedCallAdd(callRef: number, optionalParams?: paramTypes.unpublishedCallAddParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'unpublishedCallAdd', <XmlmcParams>Object.assign({}, {callRef}, optionalParams || {}), this.paramMap.get('unpublishedCallAdd') || []);
            return this.connection.sendRequest(request)
        }

        unpublishedCallDelete(callRef: number, optionalParams?: paramTypes.unpublishedCallDeleteParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'unpublishedCallDelete', <XmlmcParams>Object.assign({}, {callRef}, optionalParams || {}), this.paramMap.get('unpublishedCallDelete') || []);
            return this.connection.sendRequest(request)
        }

        unpublishedCallList(optionalParams?: paramTypes.unpublishedCallListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'unpublishedCallList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('unpublishedCallList') || []);
            return this.connection.sendRequest(request)
        }
    }

