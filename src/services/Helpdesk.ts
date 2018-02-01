import * as paramTypes from '../types/HelpdeskTypes'
import {AxiosError, AxiosResponse} from "axios";
import {XmlmcParams} from "../types/XmlmcTypes";
import {Connection, XmlmcResponse} from '../Connection'
import Xmlmc from '..'
import {Request} from '../Request'


    export class Helpdesk {
        private connection: Connection;
        private xmlmc: Xmlmc;
        private service: string;
        private paramMap: Map<string, Array<string>>;

        constructor(connection: Connection, xmlmc: Xmlmc) {
            this.connection = connection;
            this.xmlmc = xmlmc;
            this.service = 'helpdesk';
            this.paramMap = new Map([['acceptCalls', ['callref', 'markAsSLAResponse', 'timeOfAction',]], ['addCallWorkItem', ['callref', 'parentGroup', 'description', 'time', 'assignToGroup', 'assignToAnalyst', 'actionBy', 'priority', 'type', 'reminder', 'remindAssignee', 'remindCallOwner', 'notifyGroup',]], ['addCallWorkList', ['WorkListName', 'callref', 'SequentialWorkList', 'CreateMode', 'CreateFromTemplate', 'WorkItem',]], ['addCallsToIssue', ['issueRef', 'callref',]], ['addCustomerToIssue', ['issueRef', 'keyValue',]], ['addFilesToCallDiaryItem', ['callRef', 'diaryUpdateId', 'fileAttachment', 'serverFileAttachment',]], ['assignAndHoldCallsto3rdParty', ['callref', 'assignThirdPartySupplier', 'assignThirdPartyContract', 'holdUntil', 'updateMessage', 'forceAssignment',]], ['assignCalls', ['callref', 'groupId', 'analystId', 'tpmContract', 'forceAssignment',]], ['attachFilesToCalls', ['callRef', 'fileAttachment', 'serverFileAttachment',]], ['attachMessageToCall', ['mailbox', 'messageId', 'fileName', 'callRef', 'udIndex', 'attachType', 'includeAttachments', 'moveMessageToFolderId',]], ['callKeywordQuery', ['columnList', 'queryString', 'queryType', 'logStart', 'logEnd', 'resolveStart', 'resolveEnd', 'status', 'filter', 'maxResults',]], ['callNaturalQuery', ['columnList', 'queryString', 'logStart', 'logEnd', 'resolveStart', 'resolveEnd', 'status', 'filter', 'maxResults',]], ['cancelCalls', ['callRef', 'description', 'publicUpdate', 'extraUpdateDbValues',]], ['changeCallClass', ['callref', 'class',]], ['changeCallCondition', ['callref', 'condition',]], ['changeCallProblemProfile', ['callref', 'code',]], ['closeCalls', ['callref', 'timeSpent', 'description', 'fixCode', 'isChargeable', 'timeOfAction', 'publicUpdate', 'updateSource', 'updateCode', 'delayCacheFlush', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues',]], ['completeCallWorkItem', ['callref', 'workItemId',]], ['deleteAttachmentFromCall', ['callRef', 'attachId',]], ['deleteCallWorkItems', ['callref', 'workItemId',]], ['getAnalystAssignedCallCount', ['analystId', 'groupId',]], ['getAnalystAssignmentTree', ['groupId', 'recursive',]], ['getAnalystTeamTree', ['groupId', 'recursive',]], ['getCallDiaryItemList', ['callref',]], ['getCallFileAttachment', ['callRef', 'fileId',]], ['getCallFileAttachmentList', ['callRef', 'updateId',]], ['getCallSLAInfo', ['callref',]], ['getCallStatusInfo', ['callref',]], ['getCallSummaryInfo', ['callref',]], ['getCallTotalTimeSpent', ['callref',]], ['getCallWorkItem', ['callref', 'workItemId',]], ['getCallWorkItemCount', ['callref',]], ['getCallWorkItems', ['callref',]], ['getLastCallUpdateIndex', ['callref',]], ['getMyWorkItemList', ['configName', 'includeInactiveTasks', 'includeCompletedTasks',]], ['getProfileCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes',]], ['getResolutionCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes',]], ['getTemplateWorkItems', ['templateName', 'parentGroup', 'workItemId',]], ['getThirdPartySlaInfoForCall', ['callref', 'contractId',]], ['holdCalls', ['callref', 'timeSpent', 'description', 'holdUntil', 'publicUpdate', 'updateSource', 'updateCode', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues',]], ['issueClose', ['issueRef',]], ['issueCreate', ['publicFlag', 'issueType', 'summary', 'description', 'createTime', 'resolveBy', 'masterCallref', 'callref', 'additionalValues',]], ['issueResolve', ['issueRef',]], ['issueUpdate', ['issueRef', 'publicFlag', 'issueType', 'summary', 'description', 'resolveBy', 'masterCallref', 'callref', 'additionalValues',]], ['lockCalls', ['callref', 'reason', 'ignoreStatus',]], ['logAndAcceptNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues',]], ['logAndAssignNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'groupId', 'analystId', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'forceAssignment', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues',]], ['logAndTakeNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues',]], ['logDeferredCall', ['callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'groupId', 'analystId', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'forceAssignment', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues',]], ['logNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues',]], ['markWatchedCallsUnread', ['callref',]], ['quicklogCallAdd', ['name', 'formName', 'callClass', 'mailbox', 'quickLogKeyValues', 'workItemList', 'fileAttachment',]], ['quicklogCallDelete', ['name', 'mailbox',]], ['quicklogCallGet', ['name', 'mailbox',]], ['quicklogCallGetList', ['mailbox', 'formName', 'callClass',]], ['quicklogCallUpdate', ['name', 'formName', 'callClass', 'mailbox', 'quickLogKeyValues', 'workItemList', 'fileAttachment',]], ['reactivateCalls', ['callref', 'restoreWorkflow',]], ['removeCallsFromIssue', ['issueRef', 'callref',]], ['removeWatchOptions', ['callref', 'options',]], ['resolveCalls', ['callref', 'timeSpent', 'description', 'fixCode', 'timeOfAction', 'publicUpdate', 'updateSource', 'updateCode', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues',]], ['setWatchOptions', ['callref', 'options',]], ['takeCallsOffHold', ['callref',]], ['unlockCalls', ['callref',]], ['unwatchCalls', ['callref',]], ['updateAndAcceptCalls', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'markAsSLAResponse', 'priority', 'targetFixTime', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues',]], ['updateAndAssignCallTo3rdParty', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'assignThirdPartySupplier', 'assignThirdPartyContract', 'forceAssignment', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues',]], ['updateAndAssignCalls', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'assignGroup', 'assignAnalyst', 'forceAssignment', 'markAsSLAResponse', 'priority', 'targetFixTime', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues',]], ['updateCallDiaryItem', ['callref', 'updateIndex', 'updateSource', 'updateAction', 'publicUpdate', 'emailSent', 'emailReceived', 'updateText', 'extraUpdateDbValues',]], ['updateCallFileAttachment', ['callRef', 'fileId', 'fileAttachment',]], ['updateCallValues', ['callref', 'actionVerb', 'updateMessage', 'additionalCallValues',]], ['updateCallWorkItem', ['callref', 'workItemId', 'description', 'time', 'assignToGroup', 'assignToAnalyst', 'actionBy', 'priority', 'type', 'status', 'progress', 'reminder', 'remindAssignee', 'remindCallOwner', 'notifyGroup',]], ['updateCalls', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'markAsSLAResponse', 'priority', 'targetFixTime', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues',]], ['watchCalls', ['callref',]],]);
        }

        acceptCalls(callref: number, optionalParams?: paramTypes.acceptCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'acceptCalls', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('acceptCalls') || []);
            return this.connection.sendRequest(request)
        }

        addCallWorkItem(callref: number, parentGroup: string, description: string, time: number, assignToGroup: string, actionBy: number, priority: string, type: string, optionalParams?: paramTypes.addCallWorkItemParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'addCallWorkItem', <XmlmcParams>Object.assign({}, {
                callref,
                parentGroup,
                description,
                time,
                assignToGroup,
                actionBy,
                priority,
                type
            }, optionalParams || {}), this.paramMap.get('addCallWorkItem') || []);
            return this.connection.sendRequest(request)
        }

        addCallWorkList(WorkListName: string, callref: number, optionalParams?: paramTypes.addCallWorkListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'addCallWorkList', <XmlmcParams>Object.assign({}, {
                WorkListName,
                callref
            }, optionalParams || {}), this.paramMap.get('addCallWorkList') || []);
            return this.connection.sendRequest(request)
        }

        addCallsToIssue(issueRef: string, callref: number, optionalParams?: paramTypes.addCallsToIssueParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'addCallsToIssue', <XmlmcParams>Object.assign({}, {
                issueRef,
                callref
            }, optionalParams || {}), this.paramMap.get('addCallsToIssue') || []);
            return this.connection.sendRequest(request)
        }

        addCustomerToIssue(issueRef: string, keyValue: string, optionalParams?: paramTypes.addCustomerToIssueParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'addCustomerToIssue', <XmlmcParams>Object.assign({}, {
                issueRef,
                keyValue
            }, optionalParams || {}), this.paramMap.get('addCustomerToIssue') || []);
            return this.connection.sendRequest(request)
        }

        addFilesToCallDiaryItem(callRef: number, diaryUpdateId: number, optionalParams?: paramTypes.addFilesToCallDiaryItemParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'addFilesToCallDiaryItem', <XmlmcParams>Object.assign({}, {
                callRef,
                diaryUpdateId
            }, optionalParams || {}), this.paramMap.get('addFilesToCallDiaryItem') || []);
            return this.connection.sendRequest(request)
        }

        assignAndHoldCallsto3rdParty(callref: number, assignThirdPartySupplier: string, assignThirdPartyContract: string, holdUntil: string, updateMessage: string, optionalParams?: paramTypes.assignAndHoldCallsto3rdPartyParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'assignAndHoldCallsto3rdParty', <XmlmcParams>Object.assign({}, {
                callref,
                assignThirdPartySupplier,
                assignThirdPartyContract,
                holdUntil,
                updateMessage
            }, optionalParams || {}), this.paramMap.get('assignAndHoldCallsto3rdParty') || []);
            return this.connection.sendRequest(request)
        }

        assignCalls(callref: number, groupId: string, optionalParams?: paramTypes.assignCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'assignCalls', <XmlmcParams>Object.assign({}, {
                callref,
                groupId
            }, optionalParams || {}), this.paramMap.get('assignCalls') || []);
            return this.connection.sendRequest(request)
        }

        attachFilesToCalls(callRef: number, optionalParams?: paramTypes.attachFilesToCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'attachFilesToCalls', <XmlmcParams>Object.assign({}, {callRef}, optionalParams || {}), this.paramMap.get('attachFilesToCalls') || []);
            return this.connection.sendRequest(request)
        }

        attachMessageToCall(mailbox: string, messageId: string, fileName: string, callRef: number, udIndex: Object, attachType: string, includeAttachments: boolean, optionalParams?: paramTypes.attachMessageToCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'attachMessageToCall', <XmlmcParams>Object.assign({}, {
                mailbox,
                messageId,
                fileName,
                callRef,
                udIndex,
                attachType,
                includeAttachments
            }, optionalParams || {}), this.paramMap.get('attachMessageToCall') || []);
            return this.connection.sendRequest(request)
        }

        callKeywordQuery(columnList: string, queryString: string, queryType: string, optionalParams?: paramTypes.callKeywordQueryParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'callKeywordQuery', <XmlmcParams>Object.assign({}, {
                columnList,
                queryString,
                queryType
            }, optionalParams || {}), this.paramMap.get('callKeywordQuery') || []);
            return this.connection.sendRequest(request)
        }

        callNaturalQuery(columnList: string, queryString: string, optionalParams?: paramTypes.callNaturalQueryParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'callNaturalQuery', <XmlmcParams>Object.assign({}, {
                columnList,
                queryString
            }, optionalParams || {}), this.paramMap.get('callNaturalQuery') || []);
            return this.connection.sendRequest(request)
        }

        cancelCalls(callRef: number, description: string, optionalParams?: paramTypes.cancelCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'cancelCalls', <XmlmcParams>Object.assign({}, {
                callRef,
                description
            }, optionalParams || {}), this.paramMap.get('cancelCalls') || []);
            return this.connection.sendRequest(request)
        }

        changeCallClass(callref: number, callClass: string, optionalParams?: paramTypes.changeCallClassParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'changeCallClass', <XmlmcParams>Object.assign({}, {
                callref,
                'class': callClass
            }, optionalParams || {}), this.paramMap.get('changeCallClass') || []);
            return this.connection.sendRequest(request)
        }

        changeCallCondition(callref: number, condition: Object, optionalParams?: paramTypes.changeCallConditionParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'changeCallCondition', <XmlmcParams>Object.assign({}, {
                callref,
                condition
            }, optionalParams || {}), this.paramMap.get('changeCallCondition') || []);
            return this.connection.sendRequest(request)
        }

        changeCallProblemProfile(callref: number, code: string, optionalParams?: paramTypes.changeCallProblemProfileParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'changeCallProblemProfile', <XmlmcParams>Object.assign({}, {
                callref,
                code
            }, optionalParams || {}), this.paramMap.get('changeCallProblemProfile') || []);
            return this.connection.sendRequest(request)
        }

        closeCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.closeCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'closeCalls', <XmlmcParams>Object.assign({}, {
                callref,
                timeSpent,
                description
            }, optionalParams || {}), this.paramMap.get('closeCalls') || []);
            return this.connection.sendRequest(request)
        }

        completeCallWorkItem(callref: number, workItemId: number, optionalParams?: paramTypes.completeCallWorkItemParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'completeCallWorkItem', <XmlmcParams>Object.assign({}, {
                callref,
                workItemId
            }, optionalParams || {}), this.paramMap.get('completeCallWorkItem') || []);
            return this.connection.sendRequest(request)
        }

        deleteAttachmentFromCall(callRef: number, attachId: number, optionalParams?: paramTypes.deleteAttachmentFromCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'deleteAttachmentFromCall', <XmlmcParams>Object.assign({}, {
                callRef,
                attachId
            }, optionalParams || {}), this.paramMap.get('deleteAttachmentFromCall') || []);
            return this.connection.sendRequest(request)
        }

        deleteCallWorkItems(callref: number, workItemId: number, optionalParams?: paramTypes.deleteCallWorkItemsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'deleteCallWorkItems', <XmlmcParams>Object.assign({}, {
                callref,
                workItemId
            }, optionalParams || {}), this.paramMap.get('deleteCallWorkItems') || []);
            return this.connection.sendRequest(request)
        }

        getAnalystAssignedCallCount(analystId: string, groupId: string, optionalParams?: paramTypes.getAnalystAssignedCallCountParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getAnalystAssignedCallCount', <XmlmcParams>Object.assign({}, {
                analystId,
                groupId
            }, optionalParams || {}), this.paramMap.get('getAnalystAssignedCallCount') || []);
            return this.connection.sendRequest(request)
        }

        getAnalystAssignmentTree(optionalParams?: paramTypes.getAnalystAssignmentTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getAnalystAssignmentTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getAnalystAssignmentTree') || []);
            return this.connection.sendRequest(request)
        }

        getAnalystTeamTree(optionalParams?: paramTypes.getAnalystTeamTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getAnalystTeamTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getAnalystTeamTree') || []);
            return this.connection.sendRequest(request)
        }

        getCallDiaryItemList(callref: number, optionalParams?: paramTypes.getCallDiaryItemListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallDiaryItemList', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('getCallDiaryItemList') || []);
            return this.connection.sendRequest(request)
        }

        getCallFileAttachment(callRef: number, fileId: number, optionalParams?: paramTypes.getCallFileAttachmentParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallFileAttachment', <XmlmcParams>Object.assign({}, {
                callRef,
                fileId
            }, optionalParams || {}), this.paramMap.get('getCallFileAttachment') || []);
            return this.connection.sendRequest(request)
        }

        getCallFileAttachmentList(callRef: number, optionalParams?: paramTypes.getCallFileAttachmentListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallFileAttachmentList', <XmlmcParams>Object.assign({}, {callRef}, optionalParams || {}), this.paramMap.get('getCallFileAttachmentList') || []);
            return this.connection.sendRequest(request)
        }

        getCallSLAInfo(callref: number, optionalParams?: paramTypes.getCallSLAInfoParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallSLAInfo', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('getCallSLAInfo') || []);
            return this.connection.sendRequest(request)
        }

        getCallStatusInfo(callref: number, optionalParams?: paramTypes.getCallStatusInfoParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallStatusInfo', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('getCallStatusInfo') || []);
            return this.connection.sendRequest(request)
        }

        getCallSummaryInfo(callref: number, optionalParams?: paramTypes.getCallSummaryInfoParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallSummaryInfo', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('getCallSummaryInfo') || []);
            return this.connection.sendRequest(request)
        }

        getCallTotalTimeSpent(callref: number, optionalParams?: paramTypes.getCallTotalTimeSpentParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallTotalTimeSpent', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('getCallTotalTimeSpent') || []);
            return this.connection.sendRequest(request)
        }

        getCallWorkItem(callref: number, workItemId: number, optionalParams?: paramTypes.getCallWorkItemParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallWorkItem', <XmlmcParams>Object.assign({}, {
                callref,
                workItemId
            }, optionalParams || {}), this.paramMap.get('getCallWorkItem') || []);
            return this.connection.sendRequest(request)
        }

        getCallWorkItemCount(callref: number, optionalParams?: paramTypes.getCallWorkItemCountParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallWorkItemCount', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('getCallWorkItemCount') || []);
            return this.connection.sendRequest(request)
        }

        getCallWorkItems(callref: number, optionalParams?: paramTypes.getCallWorkItemsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getCallWorkItems', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('getCallWorkItems') || []);
            return this.connection.sendRequest(request)
        }

        getLastCallUpdateIndex(callref: number, optionalParams?: paramTypes.getLastCallUpdateIndexParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getLastCallUpdateIndex', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('getLastCallUpdateIndex') || []);
            return this.connection.sendRequest(request)
        }

        getMyWorkItemList(optionalParams?: paramTypes.getMyWorkItemListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getMyWorkItemList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getMyWorkItemList') || []);
            return this.connection.sendRequest(request)
        }

        getProfileCodeTree(optionalParams?: paramTypes.getProfileCodeTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getProfileCodeTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getProfileCodeTree') || []);
            return this.connection.sendRequest(request)
        }

        getResolutionCodeTree(optionalParams?: paramTypes.getResolutionCodeTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getResolutionCodeTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getResolutionCodeTree') || []);
            return this.connection.sendRequest(request)
        }

        getTemplateWorkItems(templateName: string, optionalParams?: paramTypes.getTemplateWorkItemsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getTemplateWorkItems', <XmlmcParams>Object.assign({}, {templateName}, optionalParams || {}), this.paramMap.get('getTemplateWorkItems') || []);
            return this.connection.sendRequest(request)
        }

        getThirdPartyAssignmentTree(optionalParams?: paramTypes.getThirdPartyAssignmentTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getThirdPartyAssignmentTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getThirdPartyAssignmentTree') || []);
            return this.connection.sendRequest(request)
        }

        getThirdPartySlaInfoForCall(callref: number, contractId: number, optionalParams?: paramTypes.getThirdPartySlaInfoForCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getThirdPartySlaInfoForCall', <XmlmcParams>Object.assign({}, {
                callref,
                contractId
            }, optionalParams || {}), this.paramMap.get('getThirdPartySlaInfoForCall') || []);
            return this.connection.sendRequest(request)
        }

        getThirdPartyTeamTree(optionalParams?: paramTypes.getThirdPartyTeamTreeParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getThirdPartyTeamTree', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getThirdPartyTeamTree') || []);
            return this.connection.sendRequest(request)
        }

        getWorkflowTemplateNameList(optionalParams?: paramTypes.getWorkflowTemplateNameListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'getWorkflowTemplateNameList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('getWorkflowTemplateNameList') || []);
            return this.connection.sendRequest(request)
        }

        holdCalls(callref: number, timeSpent: number, description: string, holdUntil: Date, optionalParams?: paramTypes.holdCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'holdCalls', <XmlmcParams>Object.assign({}, {
                callref,
                timeSpent,
                description,
                holdUntil
            }, optionalParams || {}), this.paramMap.get('holdCalls') || []);
            return this.connection.sendRequest(request)
        }

        issueClose(issueRef: string, optionalParams?: paramTypes.issueCloseParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'issueClose', <XmlmcParams>Object.assign({}, {issueRef}, optionalParams || {}), this.paramMap.get('issueClose') || []);
            return this.connection.sendRequest(request)
        }

        issueCreate(issueType: number, summary: string, optionalParams?: paramTypes.issueCreateParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'issueCreate', <XmlmcParams>Object.assign({}, {
                issueType,
                summary
            }, optionalParams || {}), this.paramMap.get('issueCreate') || []);
            return this.connection.sendRequest(request)
        }

        issueResolve(issueRef: string, optionalParams?: paramTypes.issueResolveParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'issueResolve', <XmlmcParams>Object.assign({}, {issueRef}, optionalParams || {}), this.paramMap.get('issueResolve') || []);
            return this.connection.sendRequest(request)
        }

        issueUpdate(issueRef: string, optionalParams?: paramTypes.issueUpdateParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'issueUpdate', <XmlmcParams>Object.assign({}, {issueRef}, optionalParams || {}), this.paramMap.get('issueUpdate') || []);
            return this.connection.sendRequest(request)
        }

        lockCalls(callref: number, reason: string, optionalParams?: paramTypes.lockCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'lockCalls', <XmlmcParams>Object.assign({}, {
                callref,
                reason
            }, optionalParams || {}), this.paramMap.get('lockCalls') || []);
            return this.connection.sendRequest(request)
        }

        logAndAcceptNewCall(callClass: string, optionalParams?: paramTypes.logAndAcceptNewCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'logAndAcceptNewCall', <XmlmcParams>Object.assign({}, {callClass}, optionalParams || {}), this.paramMap.get('logAndAcceptNewCall') || []);
            return this.connection.sendRequest(request)
        }

        logAndAssignNewCall(callClass: string, groupId: string, optionalParams?: paramTypes.logAndAssignNewCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'logAndAssignNewCall', <XmlmcParams>Object.assign({}, {
                callClass,
                groupId
            }, optionalParams || {}), this.paramMap.get('logAndAssignNewCall') || []);
            return this.connection.sendRequest(request)
        }

        logAndTakeNewCall(callClass: string, optionalParams?: paramTypes.logAndTakeNewCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'logAndTakeNewCall', <XmlmcParams>Object.assign({}, {callClass}, optionalParams || {}), this.paramMap.get('logAndTakeNewCall') || []);
            return this.connection.sendRequest(request)
        }

        logDeferredCall(callClass: string, logDate: Date, groupId: string, optionalParams?: paramTypes.logDeferredCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'logDeferredCall', <XmlmcParams>Object.assign({}, {
                callClass,
                logDate,
                groupId
            }, optionalParams || {}), this.paramMap.get('logDeferredCall') || []);
            return this.connection.sendRequest(request)
        }

        logNewCall(callClass: string, optionalParams?: paramTypes.logNewCallParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'logNewCall', <XmlmcParams>Object.assign({}, {callClass}, optionalParams || {}), this.paramMap.get('logNewCall') || []);
            return this.connection.sendRequest(request)
        }

        markWatchedCallsUnread(callref: number, optionalParams?: paramTypes.markWatchedCallsUnreadParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'markWatchedCallsUnread', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('markWatchedCallsUnread') || []);
            return this.connection.sendRequest(request)
        }

        quicklogCallAdd(name: string, formName: string, callClass: string, optionalParams?: paramTypes.quicklogCallAddParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'quicklogCallAdd', <XmlmcParams>Object.assign({}, {
                name,
                formName,
                callClass
            }, optionalParams || {}), this.paramMap.get('quicklogCallAdd') || []);
            return this.connection.sendRequest(request)
        }

        quicklogCallDelete(name: string, optionalParams?: paramTypes.quicklogCallDeleteParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'quicklogCallDelete', <XmlmcParams>Object.assign({}, {name}, optionalParams || {}), this.paramMap.get('quicklogCallDelete') || []);
            return this.connection.sendRequest(request)
        }

        quicklogCallGet(name: string, optionalParams?: paramTypes.quicklogCallGetParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'quicklogCallGet', <XmlmcParams>Object.assign({}, {name}, optionalParams || {}), this.paramMap.get('quicklogCallGet') || []);
            return this.connection.sendRequest(request)
        }

        quicklogCallGetList(optionalParams?: paramTypes.quicklogCallGetListParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'quicklogCallGetList', <XmlmcParams>(optionalParams || {}), this.paramMap.get('quicklogCallGetList') || []);
            return this.connection.sendRequest(request)
        }

        quicklogCallUpdate(name: string, formName: string, callClass: string, optionalParams?: paramTypes.quicklogCallUpdateParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'quicklogCallUpdate', <XmlmcParams>Object.assign({}, {
                name,
                formName,
                callClass
            }, optionalParams || {}), this.paramMap.get('quicklogCallUpdate') || []);
            return this.connection.sendRequest(request)
        }

        reactivateCalls(callref: number, optionalParams?: paramTypes.reactivateCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'reactivateCalls', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('reactivateCalls') || []);
            return this.connection.sendRequest(request)
        }

        removeCallsFromIssue(issueRef: string, callref: number, optionalParams?: paramTypes.removeCallsFromIssueParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'removeCallsFromIssue', <XmlmcParams>Object.assign({}, {
                issueRef,
                callref
            }, optionalParams || {}), this.paramMap.get('removeCallsFromIssue') || []);
            return this.connection.sendRequest(request)
        }

        removeWatchOptions(callref: number, options: number, optionalParams?: paramTypes.removeWatchOptionsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'removeWatchOptions', <XmlmcParams>Object.assign({}, {
                callref,
                options
            }, optionalParams || {}), this.paramMap.get('removeWatchOptions') || []);
            return this.connection.sendRequest(request)
        }

        resolveCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.resolveCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'resolveCalls', <XmlmcParams>Object.assign({}, {
                callref,
                timeSpent,
                description
            }, optionalParams || {}), this.paramMap.get('resolveCalls') || []);
            return this.connection.sendRequest(request)
        }

        setWatchOptions(callref: number, options: number, optionalParams?: paramTypes.setWatchOptionsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'setWatchOptions', <XmlmcParams>Object.assign({}, {
                callref,
                options
            }, optionalParams || {}), this.paramMap.get('setWatchOptions') || []);
            return this.connection.sendRequest(request)
        }

        takeCallsOffHold(callref: number, optionalParams?: paramTypes.takeCallsOffHoldParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'takeCallsOffHold', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('takeCallsOffHold') || []);
            return this.connection.sendRequest(request)
        }

        unlockCalls(callref: number, optionalParams?: paramTypes.unlockCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'unlockCalls', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('unlockCalls') || []);
            return this.connection.sendRequest(request)
        }

        unwatchCalls(callref: number, optionalParams?: paramTypes.unwatchCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'unwatchCalls', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('unwatchCalls') || []);
            return this.connection.sendRequest(request)
        }

        updateAndAcceptCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.updateAndAcceptCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'updateAndAcceptCalls', <XmlmcParams>Object.assign({}, {
                callref,
                timeSpent,
                description
            }, optionalParams || {}), this.paramMap.get('updateAndAcceptCalls') || []);
            return this.connection.sendRequest(request)
        }

        updateAndAssignCallTo3rdParty(callref: number, timeSpent: number, description: string, assignThirdPartySupplier: string, assignThirdPartyContract: string, optionalParams?: paramTypes.updateAndAssignCallTo3rdPartyParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'updateAndAssignCallTo3rdParty', <XmlmcParams>Object.assign({}, {
                callref,
                timeSpent,
                description,
                assignThirdPartySupplier,
                assignThirdPartyContract
            }, optionalParams || {}), this.paramMap.get('updateAndAssignCallTo3rdParty') || []);
            return this.connection.sendRequest(request)
        }

        updateAndAssignCalls(callref: number, timeSpent: number, description: string, assignGroup: string, optionalParams?: paramTypes.updateAndAssignCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'updateAndAssignCalls', <XmlmcParams>Object.assign({}, {
                callref,
                timeSpent,
                description,
                assignGroup
            }, optionalParams || {}), this.paramMap.get('updateAndAssignCalls') || []);
            return this.connection.sendRequest(request)
        }

        updateCallDiaryItem(callref: number, updateIndex: number, optionalParams?: paramTypes.updateCallDiaryItemParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'updateCallDiaryItem', <XmlmcParams>Object.assign({}, {
                callref,
                updateIndex
            }, optionalParams || {}), this.paramMap.get('updateCallDiaryItem') || []);
            return this.connection.sendRequest(request)
        }

        updateCallFileAttachment(callRef: number, fileId: number, fileAttachment: Object, optionalParams?: paramTypes.updateCallFileAttachmentParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'updateCallFileAttachment', <XmlmcParams>Object.assign({}, {
                callRef,
                fileId,
                fileAttachment
            }, optionalParams || {}), this.paramMap.get('updateCallFileAttachment') || []);
            return this.connection.sendRequest(request)
        }

        updateCallValues(callref: number, additionalCallValues: Object, optionalParams?: paramTypes.updateCallValuesParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'updateCallValues', <XmlmcParams>Object.assign({}, {
                callref,
                additionalCallValues
            }, optionalParams || {}), this.paramMap.get('updateCallValues') || []);
            return this.connection.sendRequest(request)
        }

        updateCallWorkItem(callref: number, workItemId: number, optionalParams?: paramTypes.updateCallWorkItemParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'updateCallWorkItem', <XmlmcParams>Object.assign({}, {
                callref,
                workItemId
            }, optionalParams || {}), this.paramMap.get('updateCallWorkItem') || []);
            return this.connection.sendRequest(request)
        }

        updateCalls(callref: number, timeSpent: number, description: string, optionalParams?: paramTypes.updateCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'updateCalls', <XmlmcParams>Object.assign({}, {
                callref,
                timeSpent,
                description
            }, optionalParams || {}), this.paramMap.get('updateCalls') || []);
            return this.connection.sendRequest(request)
        }

        watchCalls(callref: number, optionalParams?: paramTypes.watchCallsParams): Promise<XmlmcResponse> {
            let request = new Request(this.service, 'watchCalls', <XmlmcParams>Object.assign({}, {callref}, optionalParams || {}), this.paramMap.get('watchCalls') || []);
            return this.connection.sendRequest(request)
        }
}
