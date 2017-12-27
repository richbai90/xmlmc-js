"use strict";

var xmlmc;
(function (xmlmc) {
    xmlmc.sessionVariableMap = ['name', 'value'];
    xmlmc.userLibraryResourceMap = ['name', 'url'];
    xmlmc.embeddedFileAttachmentMap = ['fileName', 'fileData', 'timeStamp', 'mimeType', 'contentId'];
    xmlmc.newWorkListItemMap = ['description', 'time', 'assignToGroup', 'assignToAnalyst', 'actionBy', 'priority', 'type', 'reminder', 'remindAssignee', 'remindCallOwner', 'notifyGroup'];
    xmlmc.fileAttachmentMap = ['fileName', 'fileSource', 'timeStamp', 'mimeType', 'fileSize', 'contentId'];
    xmlmc.keyPairMap = ['keyName', 'keyValue'];
    xmlmc.workItemInfoMap = ['id', 'parentGroup', 'description', 'time', 'assignToGroup', 'assignToAnalyst?', 'actionBy', 'priority', 'type', 'reminder?', 'remindAssignee?', 'remindCallOwner?', 'notifyGroup?'];
    let WorkItemActionBy;
    (function (WorkItemActionBy) {
        WorkItemActionBy[WorkItemActionBy["ASIGNEE"] = 0] = "ASIGNEE";
        WorkItemActionBy[WorkItemActionBy["ASIGNEE_GROUP"] = 1] = "ASIGNEE_GROUP";
        WorkItemActionBy[WorkItemActionBy["ANY"] = 3] = "ANY";
    })(WorkItemActionBy = xmlmc.WorkItemActionBy || (xmlmc.WorkItemActionBy = {}));
})(xmlmc || (xmlmc = {}));
module.exports = xmlmc;