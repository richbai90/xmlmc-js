import {XmlmcParam, XmlmcParams, EmbeddedFileAttachment} from "./XmlmcTypes"
export interface articleAddParams {
[key: string] : XmlmcParam;
    docRef? : string;
    title? : string;
    docVisibleToCustomers? : boolean;
    docStatus? : number;
    catalogId? : number;
    problem? : string;
    solution? : string;
    author? : string;
    callref? : string;
    callProbCode? : string;
    docDate? : Date;
    keywords? : string;
    template? : string;
    ownerAnalystID? : string;
    ownerGroupID? : string;
    expiryDate? : Date;
    isRetired? : boolean;
}
export interface articleDeleteParams {
[key: string] : XmlmcParam;
    docRef? : string;
    forceDelete? : boolean;
}
export interface articleUpdateParams {
[key: string] : XmlmcParam;
    docRef? : string;
    title? : string;
    docVisibleToCustomers? : boolean;
    docStatus? : number;
    catalogId? : number;
    problem? : string;
    solution? : string;
    author? : string;
    callref? : string;
    callProbCode? : string;
    docDate? : Date;
    keywords? : string;
    template? : string;
    ownerAnalystID? : string;
    ownerGroupID? : string;
    expiryDate? : Date;
    isRetired? : boolean;
}
export interface catalogAddParams {
[key: string] : XmlmcParam;
    name? : string;
}
export interface catalogDeleteParams {
[key: string] : XmlmcParam;
    catalogId? : number;
}
export interface catalogListParams {[key: string] : XmlmcParam;}
export interface catalogRenameParams {
[key: string] : XmlmcParam;
    catalogId? : number;
    newName? : string;
}
export interface documentAddParams {
[key: string] : XmlmcParam;
    docRef? : string;
    title? : string;
    docVisibleToCustomers? : boolean;
    docStatus? : number;
    catalogId? : number;
    author? : string;
    callref? : string;
    callProbCode? : string;
    docDate? : Date;
    keywords? : string;
    template? : string;
    forceOverwrite? : boolean;
    document? : EmbeddedFileAttachment;
    ownerAnalystID? : string;
    ownerGroupID? : string;
    expiryDate? : Date;
    isRetired? : boolean;
}
export interface documentAddChangeParams {
[key: string] : XmlmcParam;
    docRef? : string;
    date? : Date;
    analystID? : string;
    groupID? : string;
    description? : string;
}
export interface documentClearChangesParams {
[key: string] : XmlmcParam;
    docRef? : string;
}
export interface documentDeleteParams {
[key: string] : XmlmcParam;
    docRef? : string;
    forceDelete? : boolean;
}
export interface documentFlagForModificationParams {
[key: string] : XmlmcParam;
    docRef? : string;
    clearFlag? : boolean;
}
export interface documentGetCallrefParams {
[key: string] : XmlmcParam;
    docRef? : string;
}
export interface documentGetChangesParams {
[key: string] : XmlmcParam;
    docRef? : string;
}
export interface documentGetInfoParams {
[key: string] : XmlmcParam;
    docRef? : string;
}
export interface documentGetRelatedParams {
[key: string] : XmlmcParam;
    docRef? : string;
}
export interface documentGetSurveyAverageUsefulnessParams {
[key: string] : XmlmcParam;
    docRef? : string;
}
export interface documentGetTypeParams {
[key: string] : XmlmcParam;
    docRef? : string;
}
export interface documentGetUrlParams {
[key: string] : XmlmcParam;
    docRef? : string;
}
export interface documentIncreaseAccessCounterParams {
[key: string] : XmlmcParam;
    docRef? : string;
    counterValue? : number;
}
export interface documentListParams {
[key: string] : XmlmcParam;
    catalogId? : number;
    maxResults? : number;
}
export interface documentSetRelatedParams {
[key: string] : XmlmcParam;
    docRef? : string;
    relatedDocRef? : string;
}
export interface documentSetSurveyInfoParams {
[key: string] : XmlmcParam;
    docRef? : string;
    analystID? : string;
    groupID? : string;
    usefulness? : number;
}
export interface documentUpdateParams {
[key: string] : XmlmcParam;
    docRef? : string;
    title? : string;
    docVisibleToCustomers? : boolean;
    docStatus? : number;
    catalogId? : number;
    author? : string;
    callref? : string;
    callProbCode? : string;
    docDate? : Date;
    keywords? : string;
    template? : string;
    document? : EmbeddedFileAttachment;
    ownerAnalystID? : string;
    ownerGroupID? : string;
    expiryDate? : Date;
    isRetired? : boolean;
}
export interface doesFileExistParams {
[key: string] : XmlmcParam;
    fileName? : string;
}
export interface isCallInKnowledgeBaseParams {
[key: string] : XmlmcParam;
    callref? : string;
}
export interface queryKeywordParams {
[key: string] : XmlmcParam;
    queryString? : string;
    catalogId? : number;
    queryType? : string;
    searchTitle? : boolean;
    searchKeywords? : boolean;
    searchProblem? : boolean;
    searchSolution? : boolean;
    searchCallProbCode? : boolean;
    includeRetiredDocuments? : boolean;
    maxResults? : number;
    sortResultsBy? : number;
    sortResultsAsc? : boolean;
}
export interface queryNaturalParams {
[key: string] : XmlmcParam;
    queryString? : string;
    catalogId? : number;
    includeRetiredDocuments? : boolean;
    maxResults? : number;
    sortResultsBy? : number;
    sortResultsAsc? : boolean;
}
export interface templateListParams {[key: string] : XmlmcParam;}
export interface unpublishedCallAddParams {
[key: string] : XmlmcParam;
    callRef? : number;
}
export interface unpublishedCallDeleteParams {
[key: string] : XmlmcParam;
    callRef? : number;
}
export interface unpublishedCallListParams {
[key: string] : XmlmcParam;
    maxResults? : number;
}
