import * as paramTypes from '../types/HelpdeskTypes';
import { AxiosError, AxiosResponse } from "axios";
import { Connection } from '../Connection';
import Xmlmc from '../XmlMethodCall';
export declare class Helpdesk {
    private connection;
    private xmlmc;
    private service;
    private paramMap;
    constructor(connection: Connection, xmlmc: Xmlmc);
    acceptCalls(callref: number, optionalParams?: paramTypes.acceptCallsParams): Promise<AxiosResponse | AxiosError>;
    addCallWorkItem(callref: number, parentGroup: string, description: string, time: number, assignToGroup: string, actionBy: number, priority: string, type: string, optionalParams?: paramTypes.addCallWorkItemParams): Promise<AxiosResponse | AxiosError>;
    addCallWorkList(WorkListName: string, callref: number, optionalParams?: paramTypes.addCallWorkListParams): Promise<AxiosResponse | AxiosError>;
    addCallsToIssue(issueRef: string, callref: number, optionalParams?: paramTypes.addCallsToIssueParams): Promise<AxiosResponse | AxiosError>;
    addCustomerToIssue(issueRef: string, keyValue: string, optionalParams?: paramTypes.addCustomerToIssueParams): Promise<AxiosResponse | AxiosError>;
    addFilesToCallDiaryItem(callRef: number, diaryUpdateId: number, optionalParams?: paramTypes.addFilesToCallDiaryItemParams): Promise<AxiosResponse | AxiosError>;
    assignAndHoldCallsto3rdParty(callref: number, assignThirdPartySupplier: string, assignThirdPartyContract: string, holdUntil: string, updateMessage: string, optionalParams?: paramTypes.assignAndHoldCallsto3rdPartyParams): Promise<AxiosResponse | AxiosError>;
    assignCalls(callref: number, groupId: string, optionalParams?: paramTypes.assignCallsParams): Promise<AxiosResponse | AxiosError>;
    attachFilesToCalls(callRef: number, optionalParams?: paramTypes.attachFilesToCallsParams): Promise<AxiosResponse | AxiosError>;
    attachMessageToCall(mailbox: string, messageId: string, fileName: string, callRef: number, udIndex: Object, attachType: string, includeAttachments: boolean, optionalParams?: paramTypes.attachMessageToCallParams): Promise<AxiosResponse | AxiosError>;
    callKeywordQuery(columnList: string, queryString: string, queryType: string, optionalParams?: paramTypes.callKeywordQueryParams): Promise<AxiosResponse | AxiosError>;
    callNaturalQuery(columnList: string, queryString: string, optionalParams?: paramTypes.callNaturalQueryParams): Promise<AxiosResponse | AxiosError>;
    cancelCalls(callRef: number, description: string, optionalParams?: paramTypes.cancelCallsParams): Promise<AxiosResponse | AxiosError>;
    changeCallClass(callref: number, callClass: string, optionalParams?: paramTypes.changeCallClassParams): Promise<AxiosResponse | AxiosError>;
    changeCallCondition(callref: number, condition: Object, optionalParams?: paramTypes.changeCallConditionParams): Promise<AxiosResponse | AxiosError>;
    changeCallProblemProfile(callref: number, code: string, optionalParams?: paramTypes.changeCallProblemProfileParams): Promise<AxiosResponse | AxiosError>;
    closeCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.closeCallsParams): Promise<AxiosResponse | AxiosError>;
    completeCallWorkItem(callref: number, workItemId: number, optionalParams?: paramTypes.completeCallWorkItemParams): Promise<AxiosResponse | AxiosError>;
    deleteAttachmentFromCall(callRef: number, attachId: number, optionalParams?: paramTypes.deleteAttachmentFromCallParams): Promise<AxiosResponse | AxiosError>;
    deleteCallWorkItems(callref: number, workItemId: number, optionalParams?: paramTypes.deleteCallWorkItemsParams): Promise<AxiosResponse | AxiosError>;
    getAnalystAssignedCallCount(analystId: string, groupId: string, optionalParams?: paramTypes.getAnalystAssignedCallCountParams): Promise<AxiosResponse | AxiosError>;
    getAnalystAssignmentTree(optionalParams?: paramTypes.getAnalystAssignmentTreeParams): Promise<AxiosResponse | AxiosError>;
    getAnalystTeamTree(optionalParams?: paramTypes.getAnalystTeamTreeParams): Promise<AxiosResponse | AxiosError>;
    getCallDiaryItemList(callref: number, optionalParams?: paramTypes.getCallDiaryItemListParams): Promise<AxiosResponse | AxiosError>;
    getCallFileAttachment(callRef: number, fileId: number, optionalParams?: paramTypes.getCallFileAttachmentParams): Promise<AxiosResponse | AxiosError>;
    getCallFileAttachmentList(callRef: number, optionalParams?: paramTypes.getCallFileAttachmentListParams): Promise<AxiosResponse | AxiosError>;
    getCallSLAInfo(callref: number, optionalParams?: paramTypes.getCallSLAInfoParams): Promise<AxiosResponse | AxiosError>;
    getCallStatusInfo(callref: number, optionalParams?: paramTypes.getCallStatusInfoParams): Promise<AxiosResponse | AxiosError>;
    getCallSummaryInfo(callref: number, optionalParams?: paramTypes.getCallSummaryInfoParams): Promise<AxiosResponse | AxiosError>;
    getCallTotalTimeSpent(callref: number, optionalParams?: paramTypes.getCallTotalTimeSpentParams): Promise<AxiosResponse | AxiosError>;
    getCallWorkItem(callref: number, workItemId: number, optionalParams?: paramTypes.getCallWorkItemParams): Promise<AxiosResponse | AxiosError>;
    getCallWorkItemCount(callref: number, optionalParams?: paramTypes.getCallWorkItemCountParams): Promise<AxiosResponse | AxiosError>;
    getCallWorkItems(callref: number, optionalParams?: paramTypes.getCallWorkItemsParams): Promise<AxiosResponse | AxiosError>;
    getLastCallUpdateIndex(callref: number, optionalParams?: paramTypes.getLastCallUpdateIndexParams): Promise<AxiosResponse | AxiosError>;
    getMyWorkItemList(optionalParams?: paramTypes.getMyWorkItemListParams): Promise<AxiosResponse | AxiosError>;
    getProfileCodeTree(optionalParams?: paramTypes.getProfileCodeTreeParams): Promise<AxiosResponse | AxiosError>;
    getResolutionCodeTree(optionalParams?: paramTypes.getResolutionCodeTreeParams): Promise<AxiosResponse | AxiosError>;
    getTemplateWorkItems(templateName: string, optionalParams?: paramTypes.getTemplateWorkItemsParams): Promise<AxiosResponse | AxiosError>;
    getThirdPartyAssignmentTree(optionalParams?: paramTypes.getThirdPartyAssignmentTreeParams): Promise<AxiosResponse | AxiosError>;
    getThirdPartySlaInfoForCall(callref: number, contractId: number, optionalParams?: paramTypes.getThirdPartySlaInfoForCallParams): Promise<AxiosResponse | AxiosError>;
    getThirdPartyTeamTree(optionalParams?: paramTypes.getThirdPartyTeamTreeParams): Promise<AxiosResponse | AxiosError>;
    getWorkflowTemplateNameList(optionalParams?: paramTypes.getWorkflowTemplateNameListParams): Promise<AxiosResponse | AxiosError>;
    holdCalls(callref: number, timeSpent: number, description: string, holdUntil: Date, optionalParams?: paramTypes.holdCallsParams): Promise<AxiosResponse | AxiosError>;
    issueClose(issueRef: string, optionalParams?: paramTypes.issueCloseParams): Promise<AxiosResponse | AxiosError>;
    issueCreate(issueType: number, summary: string, optionalParams?: paramTypes.issueCreateParams): Promise<AxiosResponse | AxiosError>;
    issueResolve(issueRef: string, optionalParams?: paramTypes.issueResolveParams): Promise<AxiosResponse | AxiosError>;
    issueUpdate(issueRef: string, optionalParams?: paramTypes.issueUpdateParams): Promise<AxiosResponse | AxiosError>;
    lockCalls(callref: number, reason: string, optionalParams?: paramTypes.lockCallsParams): Promise<AxiosResponse | AxiosError>;
    logAndAcceptNewCall(callClass: string, optionalParams?: paramTypes.logAndAcceptNewCallParams): Promise<AxiosResponse | AxiosError>;
    logAndAssignNewCall(callClass: string, groupId: string, optionalParams?: paramTypes.logAndAssignNewCallParams): Promise<AxiosResponse | AxiosError>;
    logAndTakeNewCall(callClass: string, optionalParams?: paramTypes.logAndTakeNewCallParams): Promise<AxiosResponse | AxiosError>;
    logDeferredCall(callClass: string, logDate: Date, groupId: string, optionalParams?: paramTypes.logDeferredCallParams): Promise<AxiosResponse | AxiosError>;
    logNewCall(callClass: string, optionalParams?: paramTypes.logNewCallParams): Promise<AxiosResponse | AxiosError>;
    markWatchedCallsUnread(callref: number, optionalParams?: paramTypes.markWatchedCallsUnreadParams): Promise<AxiosResponse | AxiosError>;
    quicklogCallAdd(name: string, formName: string, callClass: string, optionalParams?: paramTypes.quicklogCallAddParams): Promise<AxiosResponse | AxiosError>;
    quicklogCallDelete(name: string, optionalParams?: paramTypes.quicklogCallDeleteParams): Promise<AxiosResponse | AxiosError>;
    quicklogCallGet(name: string, optionalParams?: paramTypes.quicklogCallGetParams): Promise<AxiosResponse | AxiosError>;
    quicklogCallGetList(optionalParams?: paramTypes.quicklogCallGetListParams): Promise<AxiosResponse | AxiosError>;
    quicklogCallUpdate(name: string, formName: string, callClass: string, optionalParams?: paramTypes.quicklogCallUpdateParams): Promise<AxiosResponse | AxiosError>;
    reactivateCalls(callref: number, optionalParams?: paramTypes.reactivateCallsParams): Promise<AxiosResponse | AxiosError>;
    removeCallsFromIssue(issueRef: string, callref: number, optionalParams?: paramTypes.removeCallsFromIssueParams): Promise<AxiosResponse | AxiosError>;
    removeWatchOptions(callref: number, options: number, optionalParams?: paramTypes.removeWatchOptionsParams): Promise<AxiosResponse | AxiosError>;
    resolveCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.resolveCallsParams): Promise<AxiosResponse | AxiosError>;
    setWatchOptions(callref: number, options: number, optionalParams?: paramTypes.setWatchOptionsParams): Promise<AxiosResponse | AxiosError>;
    takeCallsOffHold(callref: number, optionalParams?: paramTypes.takeCallsOffHoldParams): Promise<AxiosResponse | AxiosError>;
    unlockCalls(callref: number, optionalParams?: paramTypes.unlockCallsParams): Promise<AxiosResponse | AxiosError>;
    unwatchCalls(callref: number, optionalParams?: paramTypes.unwatchCallsParams): Promise<AxiosResponse | AxiosError>;
    updateAndAcceptCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.updateAndAcceptCallsParams): Promise<AxiosResponse | AxiosError>;
    updateAndAssignCallTo3rdParty(callref: number, timeSpent: number, description: string, assignThirdPartySupplier: string, assignThirdPartyContract: string, optionalParams?: paramTypes.updateAndAssignCallTo3rdPartyParams): Promise<AxiosResponse | AxiosError>;
    updateAndAssignCalls(callref: number, timeSpent: number, description: string, assignGroup: string, optionalParams?: paramTypes.updateAndAssignCallsParams): Promise<AxiosResponse | AxiosError>;
    updateCallDiaryItem(callref: number, updateIndex: number, optionalParams?: paramTypes.updateCallDiaryItemParams): Promise<AxiosResponse | AxiosError>;
    updateCallFileAttachment(callRef: number, fileId: number, fileAttachment: Object, optionalParams?: paramTypes.updateCallFileAttachmentParams): Promise<AxiosResponse | AxiosError>;
    updateCallValues(callref: number, additionalCallValues: Object, optionalParams?: paramTypes.updateCallValuesParams): Promise<AxiosResponse | AxiosError>;
    updateCallWorkItem(callref: number, workItemId: number, optionalParams?: paramTypes.updateCallWorkItemParams): Promise<AxiosResponse | AxiosError>;
    updateCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.updateCallsParams): Promise<AxiosResponse | AxiosError>;
    watchCalls(callref: number, optionalParams?: paramTypes.watchCallsParams): Promise<AxiosResponse | AxiosError>;
}
