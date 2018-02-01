import { XMLElementOrXMLNode } from "xmlbuilder";
declare module xmlmcTypes {
    type XmlmcParam = string | number | Date | XmlmcParams | boolean | SessionVariable | EmbeddedFileAttachment | NewWorkListItem | FileAttachment | KeyPair | WorkItemList | WorkItemInfo | FileList | UserLibraryResourceItem | undefined;
    interface XmlmcParams {
        [key: string]: XmlmcParam;
    }
    interface XmlmcRequest {
        service: string;
        method: string;
        paramsNotSet: boolean;
        xmlmc: XMLElementOrXMLNode;
        _createXmlmc(params: XmlmcParam, el: XMLElementOrXMLNode, key: string): void;
        toString(): string;
    }
    interface SessionVariable {
        name: string;
        value: string;
    }
    let sessionVariableMap: string[];
    interface UserLibraryResourceItem {
        name: string;
        url: string;
    }
    let userLibraryResourceMap: string[];
    interface EmbeddedFileAttachment {
        fileName: string;
        fileData: string;
        timeStamp?: Date;
        mimeType?: string;
        contentId?: string;
    }
    let embeddedFileAttachmentMap: string[];
    interface NewWorkListItem {
        description: string;
        time: number;
        assignToGroup: string;
        assignToAnalyst?: string;
        actionBy: string;
        priority: string;
        type: string;
        reminder?: number;
        remindAssignee?: boolean;
        remindCallOwner?: boolean;
        notifyGroup?: boolean;
    }
    let newWorkListItemMap: string[];
    interface FileAttachment {
        fileName: string;
        fileSource: string;
        timeStamp?: Date;
        mimeType?: string;
        fileSize?: number;
        contentId?: string;
    }
    let fileAttachmentMap: string[];
    interface KeyPair {
        keyName: string;
        keyValue: string;
    }
    let keyPairMap: string[];
    interface WorkItemList {
        id: number;
        type: string;
        name: string;
        workItemInfo: WorkItemInfo;
    }
    interface WorkItemInfo {
        id: number;
        parentGroup: string;
        description: string;
        time: number;
        assignToGroup: string;
        assignToAnalyst?: string;
        actionBy: WorkItemActionBy;
        priority: string;
        type: string;
        reminder?: number;
        remindAssignee?: boolean;
        remindCallOwner?: boolean;
        notifyGroup?: boolean;
    }
    let workItemInfoMap: string[];
    enum WorkItemActionBy {
        ASIGNEE = 0,
        ASIGNEE_GROUP = 1,
        ANY = 3,
    }
    interface FileList {
        fileName: string;
        fileSize: number;
        filePath: string;
    }
}
export = xmlmcTypes;
