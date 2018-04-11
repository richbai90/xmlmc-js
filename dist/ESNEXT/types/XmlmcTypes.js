"use strict";
var xmlmcTypes;
(function (xmlmcTypes) {
    xmlmcTypes.sessionVariableMap = ['name', 'value'];
    xmlmcTypes.userLibraryResourceMap = ['name', 'url'];
    xmlmcTypes.embeddedFileAttachmentMap = ['fileName', 'fileData', 'timeStamp', 'mimeType', 'contentId'];
    xmlmcTypes.newWorkListItemMap = [
        'description',
        'time',
        'assignToGroup',
        'assignToAnalyst',
        'actionBy',
        'priority',
        'type',
        'reminder',
        'remindAssignee',
        'remindCallOwner',
        'notifyGroup',
    ];
    xmlmcTypes.fileAttachmentMap = [
        'fileName',
        'fileSource',
        'timeStamp',
        'mimeType',
        'fileSize',
        'contentId',
    ];
    xmlmcTypes.keyPairMap = [
        'keyName',
        'keyValue'
    ];
    xmlmcTypes.workItemInfoMap = [
        'id',
        'parentGroup',
        'description',
        'time',
        'assignToGroup',
        'assignToAnalyst?',
        'actionBy',
        'priority',
        'type',
        'reminder?',
        'remindAssignee?',
        'remindCallOwner?',
        'notifyGroup?'
    ];
    let WorkItemActionBy;
    (function (WorkItemActionBy) {
        WorkItemActionBy[WorkItemActionBy["ASIGNEE"] = 0] = "ASIGNEE";
        WorkItemActionBy[WorkItemActionBy["ASIGNEE_GROUP"] = 1] = "ASIGNEE_GROUP";
        WorkItemActionBy[WorkItemActionBy["ANY"] = 3] = "ANY";
    })(WorkItemActionBy = xmlmcTypes.WorkItemActionBy || (xmlmcTypes.WorkItemActionBy = {}));
})(xmlmcTypes || (xmlmcTypes = {}));
module.exports = xmlmcTypes;
