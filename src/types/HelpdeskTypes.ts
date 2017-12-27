import {
    EmbeddedFileAttachment,
    FileAttachment,
    FileList,
    KeyPair,
    NewWorkListItem,
    WorkItemList,
    XmlmcParam
} from "./XmlmcTypes"

export interface acceptCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    markAsSLAResponse?: boolean;
    timeOfAction?: Date;
}

export interface addCallWorkItemParams {
    [key: string]: XmlmcParam;

    callref?: number;
    parentGroup?: string;
    description?: string;
    time?: number;
    assignToGroup?: string;
    assignToAnalyst?: string;
    actionBy?: number;
    priority?: string;
    type?: string;
    reminder?: number;
    remindAssignee?: boolean;
    remindCallOwner?: boolean;
    notifyGroup?: boolean;
}

export interface addCallWorkListParams {
    [key: string]: XmlmcParam;

    WorkListName?: string;
    callref?: number;
    SequentialWorkList?: boolean;
    CreateMode?: string;
    CreateFromTemplate?: string;
    WorkItem?: NewWorkListItem;
}

export interface addCallsToIssueParams {
    [key: string]: XmlmcParam;

    issueRef?: string;
    callref?: number;
}

export interface addCustomerToIssueParams {
    [key: string]: XmlmcParam;

    issueRef?: string;
    keyValue?: string;
}

export interface addFilesToCallDiaryItemParams {
    [key: string]: XmlmcParam;

    callRef?: number;
    diaryUpdateId?: number;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
}

export interface assignAndHoldCallsto3rdPartyParams {
    [key: string]: XmlmcParam;

    callref?: number;
    assignThirdPartySupplier?: string;
    assignThirdPartyContract?: string;
    holdUntil?: string;
    updateMessage?: string;
    forceAssignment?: boolean;
}

export interface assignCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    groupId?: string;
    analystId?: string;
    tpmContract?: string;
    forceAssignment?: boolean;
}

export interface attachFilesToCallsParams {
    [key: string]: XmlmcParam;

    callRef?: number;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
}

export interface attachMessageToCallParams {
    [key: string]: XmlmcParam;

    mailbox?: string;
    messageId?: string;
    fileName?: string;
    callRef?: number;
    udIndex?: number;
    attachType?: string;
    includeAttachments?: boolean;
    moveMessageToFolderId?: number;
}

export interface callKeywordQueryParams {
    [key: string]: XmlmcParam;

    columnList?: string;
    queryString?: string;
    queryType?: string;
    logStart?: Date;
    logEnd?: Date;
    resolveStart?: Date;
    resolveEnd?: Date;
    status?: string;
    filter?: string;
    maxResults?: number;
}

export interface callNaturalQueryParams {
    [key: string]: XmlmcParam;

    columnList?: string;
    queryString?: string;
    logStart?: Date;
    logEnd?: Date;
    resolveStart?: Date;
    resolveEnd?: Date;
    status?: string;
    filter?: string;
    maxResults?: number;
}

export interface cancelCallsParams {
    [key: string]: XmlmcParam;

    callRef?: number;
    description?: string;
    publicUpdate?: boolean;
    extraUpdateDbValues?: XmlmcParam;
}

export interface changeCallClassParams {
    [key: string]: XmlmcParam;

    callref?: number;
    class?: string;
}

export interface changeCallConditionParams {
    [key: string]: XmlmcParam;

    callref?: number;
    condition?: number;
}

export interface changeCallProblemProfileParams {
    [key: string]: XmlmcParam;

    callref?: number;
    code?: string;
}

export interface closeCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    timeSpent?: number;
    description?: string;
    fixCode?: string;
    isChargeable?: boolean;
    timeOfAction?: Date;
    publicUpdate?: boolean;
    updateSource?: string;
    updateCode?: string;
    delayCacheFlush?: boolean;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    extraUpdateDbValues?: XmlmcParam;
}

export interface completeCallWorkItemParams {
    [key: string]: XmlmcParam;

    callref?: number;
    workItemId?: number;
}

export interface deleteAttachmentFromCallParams {
    [key: string]: XmlmcParam;

    callRef?: number;
    attachId?: number;
}

export interface deleteCallWorkItemsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    workItemId?: number;
}

export interface getAnalystAssignedCallCountParams {
    [key: string]: XmlmcParam;

    analystId?: string;
    groupId?: string;
}

export interface getAnalystAssignmentTreeParams {
    [key: string]: XmlmcParam;

    groupId?: string;
    recursive?: boolean;
}

export interface getAnalystTeamTreeParams {
    [key: string]: XmlmcParam;

    groupId?: string;
    recursive?: boolean;
}

export interface getCallDiaryItemListParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface getCallFileAttachmentParams {
    [key: string]: XmlmcParam;

    callRef?: number;
    fileId?: number;
}

export interface getCallFileAttachmentListParams {
    [key: string]: XmlmcParam;

    callRef?: number;
    updateId?: number;
}

export interface getCallSLAInfoParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface getCallStatusInfoParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface getCallSummaryInfoParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface getCallTotalTimeSpentParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface getCallWorkItemParams {
    [key: string]: XmlmcParam;

    callref?: number;
    workItemId?: number;
}

export interface getCallWorkItemCountParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface getCallWorkItemsParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface getLastCallUpdateIndexParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface getMyWorkItemListParams {
    [key: string]: XmlmcParam;

    configName?: string;
    includeInactiveTasks?: boolean;
    includeCompletedTasks?: boolean;
}

export interface getProfileCodeTreeParams {
    [key: string]: XmlmcParam;

    node?: string;
    filter?: string;
    returnFullTree?: boolean;
    returnInactiveCodes?: boolean;
}

export interface getResolutionCodeTreeParams {
    [key: string]: XmlmcParam;

    node?: string;
    filter?: string;
    returnFullTree?: boolean;
    returnInactiveCodes?: boolean;
}

export interface getTemplateWorkItemsParams {
    [key: string]: XmlmcParam;

    templateName?: string;
    parentGroup?: string;
    workItemId?: number;
}

export interface getThirdPartyAssignmentTreeParams {
    [key: string]: XmlmcParam;
}

export interface getThirdPartySlaInfoForCallParams {
    [key: string]: XmlmcParam;

    callref?: number;
    contractId?: number;
}

export interface getThirdPartyTeamTreeParams {
    [key: string]: XmlmcParam;
}

export interface getWorkflowTemplateNameListParams {
    [key: string]: XmlmcParam;
}

export interface holdCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    timeSpent?: number;
    description?: string;
    holdUntil?: Date;
    publicUpdate?: boolean;
    updateSource?: string;
    updateCode?: string;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    extraUpdateDbValues?: XmlmcParam;
}

export interface issueCloseParams {
    [key: string]: XmlmcParam;

    issueRef?: string;
}

export interface issueCreateParams {
    [key: string]: XmlmcParam;

    publicFlag?: boolean;
    issueType?: number;
    summary?: string;
    description?: string;
    createTime?: Date;
    resolveBy?: Date;
    masterCallref?: number;
    callref?: number;
    additionalValues?: XmlmcParam;
}

export interface issueResolveParams {
    [key: string]: XmlmcParam;

    issueRef?: string;
}

export interface issueUpdateParams {
    [key: string]: XmlmcParam;

    issueRef?: string;
    publicFlag?: boolean;
    issueType?: number;
    summary?: string;
    description?: string;
    resolveBy?: Date;
    masterCallref?: number;
    callref?: number;
    additionalValues?: XmlmcParam;
}

export interface lockCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    reason?: string;
    ignoreStatus?: boolean;
}

export interface logAndAcceptNewCallParams {
    [key: string]: XmlmcParam;

    incomingCallref?: number;
    callClass?: string;
    slaName?: string;
    customerId?: string;
    customerName?: string;
    assetId?: string;
    costCenter?: string;
    probCode?: string;
    site?: string;
    condition?: number;
    logDate?: Date;
    timeSpent?: number;
    updateMessage?: string;
    updateCode?: string;
    updateSource?: string;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    additionalCallValues?: XmlmcParam;
}

export interface logAndAssignNewCallParams {
    [key: string]: XmlmcParam;

    incomingCallref?: number;
    callClass?: string;
    slaName?: string;
    customerId?: string;
    customerName?: string;
    assetId?: string;
    costCenter?: string;
    probCode?: string;
    site?: string;
    condition?: number;
    logDate?: Date;
    groupId?: string;
    analystId?: string;
    timeSpent?: number;
    updateMessage?: string;
    updateCode?: string;
    updateSource?: string;
    forceAssignment?: boolean;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    additionalCallValues?: XmlmcParam;
}

export interface logAndTakeNewCallParams {
    [key: string]: XmlmcParam;

    incomingCallref?: number;
    callClass?: string;
    slaName?: string;
    customerId?: string;
    customerName?: string;
    assetId?: string;
    costCenter?: string;
    probCode?: string;
    site?: string;
    condition?: number;
    logDate?: Date;
    timeSpent?: number;
    updateMessage?: string;
    updateCode?: string;
    updateSource?: string;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    additionalCallValues?: XmlmcParam;
}

export interface logDeferredCallParams {
    [key: string]: XmlmcParam;

    callClass?: string;
    slaName?: string;
    customerId?: string;
    customerName?: string;
    assetId?: string;
    costCenter?: string;
    probCode?: string;
    site?: string;
    condition?: number;
    logDate?: Date;
    groupId?: string;
    analystId?: string;
    timeSpent?: number;
    updateMessage?: string;
    updateCode?: string;
    updateSource?: string;
    forceAssignment?: boolean;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    additionalCallValues?: XmlmcParam;
}

export interface logNewCallParams {
    [key: string]: XmlmcParam;

    incomingCallref?: number;
    callClass?: string;
    slaName?: string;
    customerId?: string;
    customerName?: string;
    assetId?: string;
    costCenter?: string;
    probCode?: string;
    site?: string;
    condition?: number;
    logDate?: Date;
    timeSpent?: number;
    updateMessage?: string;
    updateCode?: string;
    updateSource?: string;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    additionalCallValues?: XmlmcParam;
}

export interface markWatchedCallsUnreadParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface quicklogCallAddParams {
    [key: string]: XmlmcParam;

    name?: string;
    formName?: string;
    callClass?: string;
    mailbox?: string;
    quickLogKeyValues?: KeyPair;
    workItemList?: WorkItemList;
    fileAttachment?: FileList;
}

export interface quicklogCallDeleteParams {
    [key: string]: XmlmcParam;

    name?: string;
    mailbox?: string;
}

export interface quicklogCallGetParams {
    [key: string]: XmlmcParam;

    name?: string;
    mailbox?: string;
}

export interface quicklogCallGetListParams {
    [key: string]: XmlmcParam;

    mailbox?: string;
    formName?: string;
    callClass?: string;
}

export interface quicklogCallUpdateParams {
    [key: string]: XmlmcParam;

    name?: string;
    formName?: string;
    callClass?: string;
    mailbox?: string;
    quickLogKeyValues?: KeyPair;
    workItemList?: WorkItemList;
    fileAttachment?: FileList;
}

export interface reactivateCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    restoreWorkflow?: boolean;
}

export interface removeCallsFromIssueParams {
    [key: string]: XmlmcParam;

    issueRef?: string;
    callref?: number;
}

export interface removeWatchOptionsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    options?: number;
}

export interface resolveCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    timeSpent?: number;
    description?: string;
    fixCode?: string;
    timeOfAction?: Date;
    publicUpdate?: boolean;
    updateSource?: string;
    updateCode?: string;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    extraUpdateDbValues?: XmlmcParam;
}

export interface setWatchOptionsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    options?: number;
}

export interface takeCallsOffHoldParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface unlockCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface unwatchCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
}

export interface updateAndAcceptCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    timeSpent?: number;
    description?: string;
    publicUpdate?: boolean;
    timeOfAction?: Date;
    updateSource?: string;
    updateCode?: string;
    markAsSLAResponse?: boolean;
    priority?: string;
    targetFixTime?: Date;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    extraUpdateDbValues?: XmlmcParam;
}

export interface updateAndAssignCallTo3rdPartyParams {
    [key: string]: XmlmcParam;

    callref?: number;
    timeSpent?: number;
    description?: string;
    publicUpdate?: boolean;
    timeOfAction?: Date;
    updateSource?: string;
    updateCode?: string;
    assignThirdPartySupplier?: string;
    assignThirdPartyContract?: string;
    forceAssignment?: boolean;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    extraUpdateDbValues?: XmlmcParam;
}

export interface updateAndAssignCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    timeSpent?: number;
    description?: string;
    publicUpdate?: boolean;
    timeOfAction?: Date;
    updateSource?: string;
    updateCode?: string;
    assignGroup?: string;
    assignAnalyst?: string;
    forceAssignment?: boolean;
    markAsSLAResponse?: boolean;
    priority?: string;
    targetFixTime?: Date;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    extraUpdateDbValues?: XmlmcParam;
}

export interface updateCallDiaryItemParams {
    [key: string]: XmlmcParam;

    callref?: number;
    updateIndex?: number;
    updateSource?: string;
    updateAction?: string;
    publicUpdate?: boolean;
    emailSent?: boolean;
    emailReceived?: boolean;
    updateText?: string;
    extraUpdateDbValues?: XmlmcParam;
}

export interface updateCallFileAttachmentParams {
    [key: string]: XmlmcParam;

    callRef?: number;
    fileId?: number;
    fileAttachment?: EmbeddedFileAttachment;
}

export interface updateCallValuesParams {
    [key: string]: XmlmcParam;

    callref?: number;
    actionVerb?: string;
    updateMessage?: string;
    additionalCallValues?: XmlmcParam;
}

export interface updateCallWorkItemParams {
    [key: string]: XmlmcParam;

    callref?: number;
    workItemId?: number;
    description?: string;
    time?: number;
    assignToGroup?: string;
    assignToAnalyst?: string;
    actionBy?: number;
    priority?: string;
    type?: string;
    status?: number;
    progress?: number;
    reminder?: number;
    remindAssignee?: boolean;
    remindCallOwner?: boolean;
    notifyGroup?: boolean;
}

export interface updateCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
    timeSpent?: number;
    description?: string;
    publicUpdate?: boolean;
    timeOfAction?: Date;
    updateSource?: string;
    updateCode?: string;
    markAsSLAResponse?: boolean;
    priority?: string;
    targetFixTime?: Date;
    fileAttachment?: EmbeddedFileAttachment;
    serverFileAttachment?: FileAttachment;
    extraUpdateDbValues?: XmlmcParam;
}

export interface watchCallsParams {
    [key: string]: XmlmcParam;

    callref?: number;
}
