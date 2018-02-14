import * as paramTypes from '../types/HelpdeskTypes';
import { Connection, XmlmcResponse } from '../Connection';
import { XmlMethodCall } from '..';
export declare class Helpdesk {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: XmlMethodCall);
    acceptCalls(callref: number, optionalParams?: paramTypes.acceptCallsParams): Promise<XmlmcResponse>;
    addCallWorkItem(callref: number, parentGroup: string, description: string, time: number, assignToGroup: string, actionBy: number, priority: string, type: string, optionalParams?: paramTypes.addCallWorkItemParams): Promise<XmlmcResponse>;
    addCallWorkList(WorkListName: string, callref: number, optionalParams?: paramTypes.addCallWorkListParams): Promise<XmlmcResponse>;
    addCallsToIssue(issueRef: string, callref: number, optionalParams?: paramTypes.addCallsToIssueParams): Promise<XmlmcResponse>;
    addCustomerToIssue(issueRef: string, keyValue: string, optionalParams?: paramTypes.addCustomerToIssueParams): Promise<XmlmcResponse>;
    addFilesToCallDiaryItem(callRef: number, diaryUpdateId: number, optionalParams?: paramTypes.addFilesToCallDiaryItemParams): Promise<XmlmcResponse>;
    assignAndHoldCallsto3rdParty(callref: number, assignThirdPartySupplier: string, assignThirdPartyContract: string, holdUntil: string, updateMessage: string, optionalParams?: paramTypes.assignAndHoldCallsto3rdPartyParams): Promise<XmlmcResponse>;
    assignCalls(callref: number, groupId: string, optionalParams?: paramTypes.assignCallsParams): Promise<XmlmcResponse>;
    attachFilesToCalls(callRef: number, optionalParams?: paramTypes.attachFilesToCallsParams): Promise<XmlmcResponse>;
    attachMessageToCall(mailbox: string, messageId: string, fileName: string, callRef: number, udIndex: Object, attachType: string, includeAttachments: boolean, optionalParams?: paramTypes.attachMessageToCallParams): Promise<XmlmcResponse>;
    callKeywordQuery(columnList: string, queryString: string, queryType: string, optionalParams?: paramTypes.callKeywordQueryParams): Promise<XmlmcResponse>;
    callNaturalQuery(columnList: string, queryString: string, optionalParams?: paramTypes.callNaturalQueryParams): Promise<XmlmcResponse>;
    cancelCalls(callRef: number, description: string, optionalParams?: paramTypes.cancelCallsParams): Promise<XmlmcResponse>;
    changeCallClass(callref: number, callClass: string, optionalParams?: paramTypes.changeCallClassParams): Promise<XmlmcResponse>;
    changeCallCondition(callref: number, condition: Object, optionalParams?: paramTypes.changeCallConditionParams): Promise<XmlmcResponse>;
    changeCallProblemProfile(callref: number, code: string, optionalParams?: paramTypes.changeCallProblemProfileParams): Promise<XmlmcResponse>;
    closeCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.closeCallsParams): Promise<XmlmcResponse>;
    completeCallWorkItem(callref: number, workItemId: number, optionalParams?: paramTypes.completeCallWorkItemParams): Promise<XmlmcResponse>;
    deleteAttachmentFromCall(callRef: number, attachId: number, optionalParams?: paramTypes.deleteAttachmentFromCallParams): Promise<XmlmcResponse>;
    deleteCallWorkItems(callref: number, workItemId: number, optionalParams?: paramTypes.deleteCallWorkItemsParams): Promise<XmlmcResponse>;
    getAnalystAssignedCallCount(analystId: string, groupId: string, optionalParams?: paramTypes.getAnalystAssignedCallCountParams): Promise<XmlmcResponse>;
    getAnalystAssignmentTree(optionalParams?: paramTypes.getAnalystAssignmentTreeParams): Promise<XmlmcResponse>;
    getAnalystTeamTree(optionalParams?: paramTypes.getAnalystTeamTreeParams): Promise<XmlmcResponse>;
    getCallDiaryItemList(callref: number, optionalParams?: paramTypes.getCallDiaryItemListParams): Promise<XmlmcResponse>;
    getCallFileAttachment(callRef: number, fileId: number, optionalParams?: paramTypes.getCallFileAttachmentParams): Promise<XmlmcResponse>;
    getCallFileAttachmentList(callRef: number, optionalParams?: paramTypes.getCallFileAttachmentListParams): Promise<XmlmcResponse>;
    getCallSLAInfo(callref: number, optionalParams?: paramTypes.getCallSLAInfoParams): Promise<XmlmcResponse>;
    getCallStatusInfo(callref: number, optionalParams?: paramTypes.getCallStatusInfoParams): Promise<XmlmcResponse>;
    getCallSummaryInfo(callref: number, optionalParams?: paramTypes.getCallSummaryInfoParams): Promise<XmlmcResponse>;
    getCallTotalTimeSpent(callref: number, optionalParams?: paramTypes.getCallTotalTimeSpentParams): Promise<XmlmcResponse>;
    getCallWorkItem(callref: number, workItemId: number, optionalParams?: paramTypes.getCallWorkItemParams): Promise<XmlmcResponse>;
    getCallWorkItemCount(callref: number, optionalParams?: paramTypes.getCallWorkItemCountParams): Promise<XmlmcResponse>;
    getCallWorkItems(callref: number, optionalParams?: paramTypes.getCallWorkItemsParams): Promise<XmlmcResponse>;
    getLastCallUpdateIndex(callref: number, optionalParams?: paramTypes.getLastCallUpdateIndexParams): Promise<XmlmcResponse>;
    getMyWorkItemList(optionalParams?: paramTypes.getMyWorkItemListParams): Promise<XmlmcResponse>;
    getProfileCodeTree(optionalParams?: paramTypes.getProfileCodeTreeParams): Promise<XmlmcResponse>;
    getResolutionCodeTree(optionalParams?: paramTypes.getResolutionCodeTreeParams): Promise<XmlmcResponse>;
    getTemplateWorkItems(templateName: string, optionalParams?: paramTypes.getTemplateWorkItemsParams): Promise<XmlmcResponse>;
    getThirdPartyAssignmentTree(optionalParams?: paramTypes.getThirdPartyAssignmentTreeParams): Promise<XmlmcResponse>;
    getThirdPartySlaInfoForCall(callref: number, contractId: number, optionalParams?: paramTypes.getThirdPartySlaInfoForCallParams): Promise<XmlmcResponse>;
    getThirdPartyTeamTree(optionalParams?: paramTypes.getThirdPartyTeamTreeParams): Promise<XmlmcResponse>;
    getWorkflowTemplateNameList(optionalParams?: paramTypes.getWorkflowTemplateNameListParams): Promise<XmlmcResponse>;
    holdCalls(callref: number, timeSpent: number, description: string, holdUntil: Date, optionalParams?: paramTypes.holdCallsParams): Promise<XmlmcResponse>;
    issueClose(issueRef: string, optionalParams?: paramTypes.issueCloseParams): Promise<XmlmcResponse>;
    issueCreate(issueType: number, summary: string, optionalParams?: paramTypes.issueCreateParams): Promise<XmlmcResponse>;
    issueResolve(issueRef: string, optionalParams?: paramTypes.issueResolveParams): Promise<XmlmcResponse>;
    issueUpdate(issueRef: string, optionalParams?: paramTypes.issueUpdateParams): Promise<XmlmcResponse>;
    lockCalls(callref: number, reason: string, optionalParams?: paramTypes.lockCallsParams): Promise<XmlmcResponse>;
    logAndAcceptNewCall(callClass: string, optionalParams?: paramTypes.logAndAcceptNewCallParams): Promise<XmlmcResponse>;
    logAndAssignNewCall(callClass: string, groupId: string, optionalParams?: paramTypes.logAndAssignNewCallParams): Promise<XmlmcResponse>;
    logAndTakeNewCall(callClass: string, optionalParams?: paramTypes.logAndTakeNewCallParams): Promise<XmlmcResponse>;
    logDeferredCall(callClass: string, logDate: Date, groupId: string, optionalParams?: paramTypes.logDeferredCallParams): Promise<XmlmcResponse>;
    logNewCall(callClass: string, optionalParams?: paramTypes.logNewCallParams): Promise<XmlmcResponse>;
    markWatchedCallsUnread(callref: number, optionalParams?: paramTypes.markWatchedCallsUnreadParams): Promise<XmlmcResponse>;
    quicklogCallAdd(name: string, formName: string, callClass: string, optionalParams?: paramTypes.quicklogCallAddParams): Promise<XmlmcResponse>;
    quicklogCallDelete(name: string, optionalParams?: paramTypes.quicklogCallDeleteParams): Promise<XmlmcResponse>;
    quicklogCallGet(name: string, optionalParams?: paramTypes.quicklogCallGetParams): Promise<XmlmcResponse>;
    quicklogCallGetList(optionalParams?: paramTypes.quicklogCallGetListParams): Promise<XmlmcResponse>;
    quicklogCallUpdate(name: string, formName: string, callClass: string, optionalParams?: paramTypes.quicklogCallUpdateParams): Promise<XmlmcResponse>;
    reactivateCalls(callref: number, optionalParams?: paramTypes.reactivateCallsParams): Promise<XmlmcResponse>;
    removeCallsFromIssue(issueRef: string, callref: number, optionalParams?: paramTypes.removeCallsFromIssueParams): Promise<XmlmcResponse>;
    removeWatchOptions(callref: number, options: number, optionalParams?: paramTypes.removeWatchOptionsParams): Promise<XmlmcResponse>;
    resolveCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.resolveCallsParams): Promise<XmlmcResponse>;
    setWatchOptions(callref: number, options: number, optionalParams?: paramTypes.setWatchOptionsParams): Promise<XmlmcResponse>;
    takeCallsOffHold(callref: number, optionalParams?: paramTypes.takeCallsOffHoldParams): Promise<XmlmcResponse>;
    unlockCalls(callref: number, optionalParams?: paramTypes.unlockCallsParams): Promise<XmlmcResponse>;
    unwatchCalls(callref: number, optionalParams?: paramTypes.unwatchCallsParams): Promise<XmlmcResponse>;
    updateAndAcceptCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.updateAndAcceptCallsParams): Promise<XmlmcResponse>;
    updateAndAssignCallTo3rdParty(callref: number, timeSpent: number, description: string, assignThirdPartySupplier: string, assignThirdPartyContract: string, optionalParams?: paramTypes.updateAndAssignCallTo3rdPartyParams): Promise<XmlmcResponse>;
    updateAndAssignCalls(callref: number, timeSpent: number, description: string, assignGroup: string, optionalParams?: paramTypes.updateAndAssignCallsParams): Promise<XmlmcResponse>;
    updateCallDiaryItem(callref: number, updateIndex: number, optionalParams?: paramTypes.updateCallDiaryItemParams): Promise<XmlmcResponse>;
    updateCallFileAttachment(callRef: number, fileId: number, fileAttachment: Object, optionalParams?: paramTypes.updateCallFileAttachmentParams): Promise<XmlmcResponse>;
    updateCallValues(callref: number, additionalCallValues: Object, optionalParams?: paramTypes.updateCallValuesParams): Promise<XmlmcResponse>;
    updateCallWorkItem(callref: number, workItemId: number, optionalParams?: paramTypes.updateCallWorkItemParams): Promise<XmlmcResponse>;
    updateCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.updateCallsParams): Promise<XmlmcResponse>;
    watchCalls(callref: number, optionalParams?: paramTypes.watchCallsParams): Promise<XmlmcResponse>;
}
