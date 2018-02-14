"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
class Helpdesk {
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'helpdesk';
        this.paramMap = new _map2.default([['acceptCalls', ['callref', 'markAsSLAResponse', 'timeOfAction']], ['addCallWorkItem', ['callref', 'parentGroup', 'description', 'time', 'assignToGroup', 'assignToAnalyst', 'actionBy', 'priority', 'type', 'reminder', 'remindAssignee', 'remindCallOwner', 'notifyGroup']], ['addCallWorkList', ['WorkListName', 'callref', 'SequentialWorkList', 'CreateMode', 'CreateFromTemplate', 'WorkItem']], ['addCallsToIssue', ['issueRef', 'callref']], ['addCustomerToIssue', ['issueRef', 'keyValue']], ['addFilesToCallDiaryItem', ['callRef', 'diaryUpdateId', 'fileAttachment', 'serverFileAttachment']], ['assignAndHoldCallsto3rdParty', ['callref', 'assignThirdPartySupplier', 'assignThirdPartyContract', 'holdUntil', 'updateMessage', 'forceAssignment']], ['assignCalls', ['callref', 'groupId', 'analystId', 'tpmContract', 'forceAssignment']], ['attachFilesToCalls', ['callRef', 'fileAttachment', 'serverFileAttachment']], ['attachMessageToCall', ['mailbox', 'messageId', 'fileName', 'callRef', 'udIndex', 'attachType', 'includeAttachments', 'moveMessageToFolderId']], ['callKeywordQuery', ['columnList', 'queryString', 'queryType', 'logStart', 'logEnd', 'resolveStart', 'resolveEnd', 'status', 'filter', 'maxResults']], ['callNaturalQuery', ['columnList', 'queryString', 'logStart', 'logEnd', 'resolveStart', 'resolveEnd', 'status', 'filter', 'maxResults']], ['cancelCalls', ['callRef', 'description', 'publicUpdate', 'extraUpdateDbValues']], ['changeCallClass', ['callref', 'class']], ['changeCallCondition', ['callref', 'condition']], ['changeCallProblemProfile', ['callref', 'code']], ['closeCalls', ['callref', 'timeSpent', 'description', 'fixCode', 'isChargeable', 'timeOfAction', 'publicUpdate', 'updateSource', 'updateCode', 'delayCacheFlush', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['completeCallWorkItem', ['callref', 'workItemId']], ['deleteAttachmentFromCall', ['callRef', 'attachId']], ['deleteCallWorkItems', ['callref', 'workItemId']], ['getAnalystAssignedCallCount', ['analystId', 'groupId']], ['getAnalystAssignmentTree', ['groupId', 'recursive']], ['getAnalystTeamTree', ['groupId', 'recursive']], ['getCallDiaryItemList', ['callref']], ['getCallFileAttachment', ['callRef', 'fileId']], ['getCallFileAttachmentList', ['callRef', 'updateId']], ['getCallSLAInfo', ['callref']], ['getCallStatusInfo', ['callref']], ['getCallSummaryInfo', ['callref']], ['getCallTotalTimeSpent', ['callref']], ['getCallWorkItem', ['callref', 'workItemId']], ['getCallWorkItemCount', ['callref']], ['getCallWorkItems', ['callref']], ['getLastCallUpdateIndex', ['callref']], ['getMyWorkItemList', ['configName', 'includeInactiveTasks', 'includeCompletedTasks']], ['getProfileCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes']], ['getResolutionCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes']], ['getTemplateWorkItems', ['templateName', 'parentGroup', 'workItemId']], ['getThirdPartySlaInfoForCall', ['callref', 'contractId']], ['holdCalls', ['callref', 'timeSpent', 'description', 'holdUntil', 'publicUpdate', 'updateSource', 'updateCode', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['issueClose', ['issueRef']], ['issueCreate', ['publicFlag', 'issueType', 'summary', 'description', 'createTime', 'resolveBy', 'masterCallref', 'callref', 'additionalValues']], ['issueResolve', ['issueRef']], ['issueUpdate', ['issueRef', 'publicFlag', 'issueType', 'summary', 'description', 'resolveBy', 'masterCallref', 'callref', 'additionalValues']], ['lockCalls', ['callref', 'reason', 'ignoreStatus']], ['logAndAcceptNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['logAndAssignNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'groupId', 'analystId', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'forceAssignment', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['logAndTakeNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['logDeferredCall', ['callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'groupId', 'analystId', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'forceAssignment', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['logNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['markWatchedCallsUnread', ['callref']], ['quicklogCallAdd', ['name', 'formName', 'callClass', 'mailbox', 'quickLogKeyValues', 'workItemList', 'fileAttachment']], ['quicklogCallDelete', ['name', 'mailbox']], ['quicklogCallGet', ['name', 'mailbox']], ['quicklogCallGetList', ['mailbox', 'formName', 'callClass']], ['quicklogCallUpdate', ['name', 'formName', 'callClass', 'mailbox', 'quickLogKeyValues', 'workItemList', 'fileAttachment']], ['reactivateCalls', ['callref', 'restoreWorkflow']], ['removeCallsFromIssue', ['issueRef', 'callref']], ['removeWatchOptions', ['callref', 'options']], ['resolveCalls', ['callref', 'timeSpent', 'description', 'fixCode', 'timeOfAction', 'publicUpdate', 'updateSource', 'updateCode', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['setWatchOptions', ['callref', 'options']], ['takeCallsOffHold', ['callref']], ['unlockCalls', ['callref']], ['unwatchCalls', ['callref']], ['updateAndAcceptCalls', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'markAsSLAResponse', 'priority', 'targetFixTime', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['updateAndAssignCallTo3rdParty', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'assignThirdPartySupplier', 'assignThirdPartyContract', 'forceAssignment', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['updateAndAssignCalls', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'assignGroup', 'assignAnalyst', 'forceAssignment', 'markAsSLAResponse', 'priority', 'targetFixTime', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['updateCallDiaryItem', ['callref', 'updateIndex', 'updateSource', 'updateAction', 'publicUpdate', 'emailSent', 'emailReceived', 'updateText', 'extraUpdateDbValues']], ['updateCallFileAttachment', ['callRef', 'fileId', 'fileAttachment']], ['updateCallValues', ['callref', 'actionVerb', 'updateMessage', 'additionalCallValues']], ['updateCallWorkItem', ['callref', 'workItemId', 'description', 'time', 'assignToGroup', 'assignToAnalyst', 'actionBy', 'priority', 'type', 'status', 'progress', 'reminder', 'remindAssignee', 'remindCallOwner', 'notifyGroup']], ['updateCalls', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'markAsSLAResponse', 'priority', 'targetFixTime', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['watchCalls', ['callref']]]);
    }
    acceptCalls(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'acceptCalls', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('acceptCalls') || []);
        return this.connection.sendRequest(request);
    }
    addCallWorkItem(callref, parentGroup, description, time, assignToGroup, actionBy, priority, type, optionalParams) {
        let request = new Request_1.Request(this.service, 'addCallWorkItem', (0, _assign2.default)({}, {
            callref,
            parentGroup,
            description,
            time,
            assignToGroup,
            actionBy,
            priority,
            type
        }, optionalParams || {}), this.paramMap.get('addCallWorkItem') || []);
        return this.connection.sendRequest(request);
    }
    addCallWorkList(WorkListName, callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'addCallWorkList', (0, _assign2.default)({}, {
            WorkListName,
            callref
        }, optionalParams || {}), this.paramMap.get('addCallWorkList') || []);
        return this.connection.sendRequest(request);
    }
    addCallsToIssue(issueRef, callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'addCallsToIssue', (0, _assign2.default)({}, {
            issueRef,
            callref
        }, optionalParams || {}), this.paramMap.get('addCallsToIssue') || []);
        return this.connection.sendRequest(request);
    }
    addCustomerToIssue(issueRef, keyValue, optionalParams) {
        let request = new Request_1.Request(this.service, 'addCustomerToIssue', (0, _assign2.default)({}, {
            issueRef,
            keyValue
        }, optionalParams || {}), this.paramMap.get('addCustomerToIssue') || []);
        return this.connection.sendRequest(request);
    }
    addFilesToCallDiaryItem(callRef, diaryUpdateId, optionalParams) {
        let request = new Request_1.Request(this.service, 'addFilesToCallDiaryItem', (0, _assign2.default)({}, {
            callRef,
            diaryUpdateId
        }, optionalParams || {}), this.paramMap.get('addFilesToCallDiaryItem') || []);
        return this.connection.sendRequest(request);
    }
    assignAndHoldCallsto3rdParty(callref, assignThirdPartySupplier, assignThirdPartyContract, holdUntil, updateMessage, optionalParams) {
        let request = new Request_1.Request(this.service, 'assignAndHoldCallsto3rdParty', (0, _assign2.default)({}, {
            callref,
            assignThirdPartySupplier,
            assignThirdPartyContract,
            holdUntil,
            updateMessage
        }, optionalParams || {}), this.paramMap.get('assignAndHoldCallsto3rdParty') || []);
        return this.connection.sendRequest(request);
    }
    assignCalls(callref, groupId, optionalParams) {
        let request = new Request_1.Request(this.service, 'assignCalls', (0, _assign2.default)({}, {
            callref,
            groupId
        }, optionalParams || {}), this.paramMap.get('assignCalls') || []);
        return this.connection.sendRequest(request);
    }
    attachFilesToCalls(callRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'attachFilesToCalls', (0, _assign2.default)({}, { callRef }, optionalParams || {}), this.paramMap.get('attachFilesToCalls') || []);
        return this.connection.sendRequest(request);
    }
    attachMessageToCall(mailbox, messageId, fileName, callRef, udIndex, attachType, includeAttachments, optionalParams) {
        let request = new Request_1.Request(this.service, 'attachMessageToCall', (0, _assign2.default)({}, {
            mailbox,
            messageId,
            fileName,
            callRef,
            udIndex,
            attachType,
            includeAttachments
        }, optionalParams || {}), this.paramMap.get('attachMessageToCall') || []);
        return this.connection.sendRequest(request);
    }
    callKeywordQuery(columnList, queryString, queryType, optionalParams) {
        let request = new Request_1.Request(this.service, 'callKeywordQuery', (0, _assign2.default)({}, {
            columnList,
            queryString,
            queryType
        }, optionalParams || {}), this.paramMap.get('callKeywordQuery') || []);
        return this.connection.sendRequest(request);
    }
    callNaturalQuery(columnList, queryString, optionalParams) {
        let request = new Request_1.Request(this.service, 'callNaturalQuery', (0, _assign2.default)({}, {
            columnList,
            queryString
        }, optionalParams || {}), this.paramMap.get('callNaturalQuery') || []);
        return this.connection.sendRequest(request);
    }
    cancelCalls(callRef, description, optionalParams) {
        let request = new Request_1.Request(this.service, 'cancelCalls', (0, _assign2.default)({}, {
            callRef,
            description
        }, optionalParams || {}), this.paramMap.get('cancelCalls') || []);
        return this.connection.sendRequest(request);
    }
    changeCallClass(callref, callClass, optionalParams) {
        let request = new Request_1.Request(this.service, 'changeCallClass', (0, _assign2.default)({}, {
            callref,
            'class': callClass
        }, optionalParams || {}), this.paramMap.get('changeCallClass') || []);
        return this.connection.sendRequest(request);
    }
    changeCallCondition(callref, condition, optionalParams) {
        let request = new Request_1.Request(this.service, 'changeCallCondition', (0, _assign2.default)({}, {
            callref,
            condition
        }, optionalParams || {}), this.paramMap.get('changeCallCondition') || []);
        return this.connection.sendRequest(request);
    }
    changeCallProblemProfile(callref, code, optionalParams) {
        let request = new Request_1.Request(this.service, 'changeCallProblemProfile', (0, _assign2.default)({}, {
            callref,
            code
        }, optionalParams || {}), this.paramMap.get('changeCallProblemProfile') || []);
        return this.connection.sendRequest(request);
    }
    closeCalls(callref, timeSpent, description, optionalParams) {
        let request = new Request_1.Request(this.service, 'closeCalls', (0, _assign2.default)({}, {
            callref,
            timeSpent,
            description
        }, optionalParams || {}), this.paramMap.get('closeCalls') || []);
        return this.connection.sendRequest(request);
    }
    completeCallWorkItem(callref, workItemId, optionalParams) {
        let request = new Request_1.Request(this.service, 'completeCallWorkItem', (0, _assign2.default)({}, {
            callref,
            workItemId
        }, optionalParams || {}), this.paramMap.get('completeCallWorkItem') || []);
        return this.connection.sendRequest(request);
    }
    deleteAttachmentFromCall(callRef, attachId, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteAttachmentFromCall', (0, _assign2.default)({}, {
            callRef,
            attachId
        }, optionalParams || {}), this.paramMap.get('deleteAttachmentFromCall') || []);
        return this.connection.sendRequest(request);
    }
    deleteCallWorkItems(callref, workItemId, optionalParams) {
        let request = new Request_1.Request(this.service, 'deleteCallWorkItems', (0, _assign2.default)({}, {
            callref,
            workItemId
        }, optionalParams || {}), this.paramMap.get('deleteCallWorkItems') || []);
        return this.connection.sendRequest(request);
    }
    getAnalystAssignedCallCount(analystId, groupId, optionalParams) {
        let request = new Request_1.Request(this.service, 'getAnalystAssignedCallCount', (0, _assign2.default)({}, {
            analystId,
            groupId
        }, optionalParams || {}), this.paramMap.get('getAnalystAssignedCallCount') || []);
        return this.connection.sendRequest(request);
    }
    getAnalystAssignmentTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'getAnalystAssignmentTree', optionalParams || {}, this.paramMap.get('getAnalystAssignmentTree') || []);
        return this.connection.sendRequest(request);
    }
    getAnalystTeamTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'getAnalystTeamTree', optionalParams || {}, this.paramMap.get('getAnalystTeamTree') || []);
        return this.connection.sendRequest(request);
    }
    getCallDiaryItemList(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallDiaryItemList', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('getCallDiaryItemList') || []);
        return this.connection.sendRequest(request);
    }
    getCallFileAttachment(callRef, fileId, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallFileAttachment', (0, _assign2.default)({}, {
            callRef,
            fileId
        }, optionalParams || {}), this.paramMap.get('getCallFileAttachment') || []);
        return this.connection.sendRequest(request);
    }
    getCallFileAttachmentList(callRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallFileAttachmentList', (0, _assign2.default)({}, { callRef }, optionalParams || {}), this.paramMap.get('getCallFileAttachmentList') || []);
        return this.connection.sendRequest(request);
    }
    getCallSLAInfo(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallSLAInfo', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('getCallSLAInfo') || []);
        return this.connection.sendRequest(request);
    }
    getCallStatusInfo(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallStatusInfo', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('getCallStatusInfo') || []);
        return this.connection.sendRequest(request);
    }
    getCallSummaryInfo(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallSummaryInfo', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('getCallSummaryInfo') || []);
        return this.connection.sendRequest(request);
    }
    getCallTotalTimeSpent(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallTotalTimeSpent', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('getCallTotalTimeSpent') || []);
        return this.connection.sendRequest(request);
    }
    getCallWorkItem(callref, workItemId, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallWorkItem', (0, _assign2.default)({}, {
            callref,
            workItemId
        }, optionalParams || {}), this.paramMap.get('getCallWorkItem') || []);
        return this.connection.sendRequest(request);
    }
    getCallWorkItemCount(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallWorkItemCount', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('getCallWorkItemCount') || []);
        return this.connection.sendRequest(request);
    }
    getCallWorkItems(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'getCallWorkItems', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('getCallWorkItems') || []);
        return this.connection.sendRequest(request);
    }
    getLastCallUpdateIndex(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'getLastCallUpdateIndex', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('getLastCallUpdateIndex') || []);
        return this.connection.sendRequest(request);
    }
    getMyWorkItemList(optionalParams) {
        let request = new Request_1.Request(this.service, 'getMyWorkItemList', optionalParams || {}, this.paramMap.get('getMyWorkItemList') || []);
        return this.connection.sendRequest(request);
    }
    getProfileCodeTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'getProfileCodeTree', optionalParams || {}, this.paramMap.get('getProfileCodeTree') || []);
        return this.connection.sendRequest(request);
    }
    getResolutionCodeTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'getResolutionCodeTree', optionalParams || {}, this.paramMap.get('getResolutionCodeTree') || []);
        return this.connection.sendRequest(request);
    }
    getTemplateWorkItems(templateName, optionalParams) {
        let request = new Request_1.Request(this.service, 'getTemplateWorkItems', (0, _assign2.default)({}, { templateName }, optionalParams || {}), this.paramMap.get('getTemplateWorkItems') || []);
        return this.connection.sendRequest(request);
    }
    getThirdPartyAssignmentTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'getThirdPartyAssignmentTree', optionalParams || {}, this.paramMap.get('getThirdPartyAssignmentTree') || []);
        return this.connection.sendRequest(request);
    }
    getThirdPartySlaInfoForCall(callref, contractId, optionalParams) {
        let request = new Request_1.Request(this.service, 'getThirdPartySlaInfoForCall', (0, _assign2.default)({}, {
            callref,
            contractId
        }, optionalParams || {}), this.paramMap.get('getThirdPartySlaInfoForCall') || []);
        return this.connection.sendRequest(request);
    }
    getThirdPartyTeamTree(optionalParams) {
        let request = new Request_1.Request(this.service, 'getThirdPartyTeamTree', optionalParams || {}, this.paramMap.get('getThirdPartyTeamTree') || []);
        return this.connection.sendRequest(request);
    }
    getWorkflowTemplateNameList(optionalParams) {
        let request = new Request_1.Request(this.service, 'getWorkflowTemplateNameList', optionalParams || {}, this.paramMap.get('getWorkflowTemplateNameList') || []);
        return this.connection.sendRequest(request);
    }
    holdCalls(callref, timeSpent, description, holdUntil, optionalParams) {
        let request = new Request_1.Request(this.service, 'holdCalls', (0, _assign2.default)({}, {
            callref,
            timeSpent,
            description,
            holdUntil
        }, optionalParams || {}), this.paramMap.get('holdCalls') || []);
        return this.connection.sendRequest(request);
    }
    issueClose(issueRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'issueClose', (0, _assign2.default)({}, { issueRef }, optionalParams || {}), this.paramMap.get('issueClose') || []);
        return this.connection.sendRequest(request);
    }
    issueCreate(issueType, summary, optionalParams) {
        let request = new Request_1.Request(this.service, 'issueCreate', (0, _assign2.default)({}, {
            issueType,
            summary
        }, optionalParams || {}), this.paramMap.get('issueCreate') || []);
        return this.connection.sendRequest(request);
    }
    issueResolve(issueRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'issueResolve', (0, _assign2.default)({}, { issueRef }, optionalParams || {}), this.paramMap.get('issueResolve') || []);
        return this.connection.sendRequest(request);
    }
    issueUpdate(issueRef, optionalParams) {
        let request = new Request_1.Request(this.service, 'issueUpdate', (0, _assign2.default)({}, { issueRef }, optionalParams || {}), this.paramMap.get('issueUpdate') || []);
        return this.connection.sendRequest(request);
    }
    lockCalls(callref, reason, optionalParams) {
        let request = new Request_1.Request(this.service, 'lockCalls', (0, _assign2.default)({}, {
            callref,
            reason
        }, optionalParams || {}), this.paramMap.get('lockCalls') || []);
        return this.connection.sendRequest(request);
    }
    logAndAcceptNewCall(callClass, optionalParams) {
        let request = new Request_1.Request(this.service, 'logAndAcceptNewCall', (0, _assign2.default)({}, { callClass }, optionalParams || {}), this.paramMap.get('logAndAcceptNewCall') || []);
        return this.connection.sendRequest(request);
    }
    logAndAssignNewCall(callClass, groupId, optionalParams) {
        let request = new Request_1.Request(this.service, 'logAndAssignNewCall', (0, _assign2.default)({}, {
            callClass,
            groupId
        }, optionalParams || {}), this.paramMap.get('logAndAssignNewCall') || []);
        return this.connection.sendRequest(request);
    }
    logAndTakeNewCall(callClass, optionalParams) {
        let request = new Request_1.Request(this.service, 'logAndTakeNewCall', (0, _assign2.default)({}, { callClass }, optionalParams || {}), this.paramMap.get('logAndTakeNewCall') || []);
        return this.connection.sendRequest(request);
    }
    logDeferredCall(callClass, logDate, groupId, optionalParams) {
        let request = new Request_1.Request(this.service, 'logDeferredCall', (0, _assign2.default)({}, {
            callClass,
            logDate,
            groupId
        }, optionalParams || {}), this.paramMap.get('logDeferredCall') || []);
        return this.connection.sendRequest(request);
    }
    logNewCall(callClass, optionalParams) {
        let request = new Request_1.Request(this.service, 'logNewCall', (0, _assign2.default)({}, { callClass }, optionalParams || {}), this.paramMap.get('logNewCall') || []);
        return this.connection.sendRequest(request);
    }
    markWatchedCallsUnread(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'markWatchedCallsUnread', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('markWatchedCallsUnread') || []);
        return this.connection.sendRequest(request);
    }
    quicklogCallAdd(name, formName, callClass, optionalParams) {
        let request = new Request_1.Request(this.service, 'quicklogCallAdd', (0, _assign2.default)({}, {
            name,
            formName,
            callClass
        }, optionalParams || {}), this.paramMap.get('quicklogCallAdd') || []);
        return this.connection.sendRequest(request);
    }
    quicklogCallDelete(name, optionalParams) {
        let request = new Request_1.Request(this.service, 'quicklogCallDelete', (0, _assign2.default)({}, { name }, optionalParams || {}), this.paramMap.get('quicklogCallDelete') || []);
        return this.connection.sendRequest(request);
    }
    quicklogCallGet(name, optionalParams) {
        let request = new Request_1.Request(this.service, 'quicklogCallGet', (0, _assign2.default)({}, { name }, optionalParams || {}), this.paramMap.get('quicklogCallGet') || []);
        return this.connection.sendRequest(request);
    }
    quicklogCallGetList(optionalParams) {
        let request = new Request_1.Request(this.service, 'quicklogCallGetList', optionalParams || {}, this.paramMap.get('quicklogCallGetList') || []);
        return this.connection.sendRequest(request);
    }
    quicklogCallUpdate(name, formName, callClass, optionalParams) {
        let request = new Request_1.Request(this.service, 'quicklogCallUpdate', (0, _assign2.default)({}, {
            name,
            formName,
            callClass
        }, optionalParams || {}), this.paramMap.get('quicklogCallUpdate') || []);
        return this.connection.sendRequest(request);
    }
    reactivateCalls(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'reactivateCalls', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('reactivateCalls') || []);
        return this.connection.sendRequest(request);
    }
    removeCallsFromIssue(issueRef, callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'removeCallsFromIssue', (0, _assign2.default)({}, {
            issueRef,
            callref
        }, optionalParams || {}), this.paramMap.get('removeCallsFromIssue') || []);
        return this.connection.sendRequest(request);
    }
    removeWatchOptions(callref, options, optionalParams) {
        let request = new Request_1.Request(this.service, 'removeWatchOptions', (0, _assign2.default)({}, {
            callref,
            options
        }, optionalParams || {}), this.paramMap.get('removeWatchOptions') || []);
        return this.connection.sendRequest(request);
    }
    resolveCalls(callref, timeSpent, description, optionalParams) {
        let request = new Request_1.Request(this.service, 'resolveCalls', (0, _assign2.default)({}, {
            callref,
            timeSpent,
            description
        }, optionalParams || {}), this.paramMap.get('resolveCalls') || []);
        return this.connection.sendRequest(request);
    }
    setWatchOptions(callref, options, optionalParams) {
        let request = new Request_1.Request(this.service, 'setWatchOptions', (0, _assign2.default)({}, {
            callref,
            options
        }, optionalParams || {}), this.paramMap.get('setWatchOptions') || []);
        return this.connection.sendRequest(request);
    }
    takeCallsOffHold(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'takeCallsOffHold', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('takeCallsOffHold') || []);
        return this.connection.sendRequest(request);
    }
    unlockCalls(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'unlockCalls', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('unlockCalls') || []);
        return this.connection.sendRequest(request);
    }
    unwatchCalls(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'unwatchCalls', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('unwatchCalls') || []);
        return this.connection.sendRequest(request);
    }
    updateAndAcceptCalls(callref, timeSpent, description, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateAndAcceptCalls', (0, _assign2.default)({}, {
            callref,
            timeSpent,
            description
        }, optionalParams || {}), this.paramMap.get('updateAndAcceptCalls') || []);
        return this.connection.sendRequest(request);
    }
    updateAndAssignCallTo3rdParty(callref, timeSpent, description, assignThirdPartySupplier, assignThirdPartyContract, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateAndAssignCallTo3rdParty', (0, _assign2.default)({}, {
            callref,
            timeSpent,
            description,
            assignThirdPartySupplier,
            assignThirdPartyContract
        }, optionalParams || {}), this.paramMap.get('updateAndAssignCallTo3rdParty') || []);
        return this.connection.sendRequest(request);
    }
    updateAndAssignCalls(callref, timeSpent, description, assignGroup, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateAndAssignCalls', (0, _assign2.default)({}, {
            callref,
            timeSpent,
            description,
            assignGroup
        }, optionalParams || {}), this.paramMap.get('updateAndAssignCalls') || []);
        return this.connection.sendRequest(request);
    }
    updateCallDiaryItem(callref, updateIndex, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateCallDiaryItem', (0, _assign2.default)({}, {
            callref,
            updateIndex
        }, optionalParams || {}), this.paramMap.get('updateCallDiaryItem') || []);
        return this.connection.sendRequest(request);
    }
    updateCallFileAttachment(callRef, fileId, fileAttachment, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateCallFileAttachment', (0, _assign2.default)({}, {
            callRef,
            fileId,
            fileAttachment
        }, optionalParams || {}), this.paramMap.get('updateCallFileAttachment') || []);
        return this.connection.sendRequest(request);
    }
    updateCallValues(callref, additionalCallValues, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateCallValues', (0, _assign2.default)({}, {
            callref,
            additionalCallValues
        }, optionalParams || {}), this.paramMap.get('updateCallValues') || []);
        return this.connection.sendRequest(request);
    }
    updateCallWorkItem(callref, workItemId, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateCallWorkItem', (0, _assign2.default)({}, {
            callref,
            workItemId
        }, optionalParams || {}), this.paramMap.get('updateCallWorkItem') || []);
        return this.connection.sendRequest(request);
    }
    updateCalls(callref, timeSpent, description, optionalParams) {
        let request = new Request_1.Request(this.service, 'updateCalls', (0, _assign2.default)({}, {
            callref,
            timeSpent,
            description
        }, optionalParams || {}), this.paramMap.get('updateCalls') || []);
        return this.connection.sendRequest(request);
    }
    watchCalls(callref, optionalParams) {
        let request = new Request_1.Request(this.service, 'watchCalls', (0, _assign2.default)({}, { callref }, optionalParams || {}), this.paramMap.get('watchCalls') || []);
        return this.connection.sendRequest(request);
    }
}
exports.Helpdesk = Helpdesk;