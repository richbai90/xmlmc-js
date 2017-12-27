import {XMLElementOrXMLNode} from "xmlbuilder";


module xmlmc {

    export type XmlmcParam =
        string
        | number
        | Date
        | XmlmcParams
        | boolean
        | SessionVariable
        | EmbeddedFileAttachment
        | NewWorkListItem
        | FileAttachment
        | KeyPair
        | WorkItemList
        | WorkItemInfo
        | FileList
        | UserLibraryResourceItem
        | undefined

    export interface XmlmcParams {
        [key: string]: XmlmcParam
    }

    export interface XmlmcRequest {
        service: string;
        method: string;
        paramsNotSet: boolean;
        xmlmc: XMLElementOrXMLNode;

        _createXmlmc(params: XmlmcParam, el: XMLElementOrXMLNode, key: string): void

        toString(): string
    }

    export interface SessionVariable {
        name: string;
        value: string;
    }

    export let sessionVariableMap = ['name', 'value'];

    export interface UserLibraryResourceItem {
        name: string;
        url: string;
    }

    export let userLibraryResourceMap = ['name', 'url'];

    export interface EmbeddedFileAttachment {
        fileName: string;
        fileData: string;
        timeStamp?: Date;
        mimeType?: string;
        contentId?: string;
    }

    export let embeddedFileAttachmentMap = ['fileName', 'fileData', 'timeStamp', 'mimeType', 'contentId'];

    export interface NewWorkListItem {
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

    export let newWorkListItemMap = [
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

    export interface FileAttachment {
        fileName: string;
        fileSource: string;
        timeStamp?: Date;
        mimeType?: string;
        fileSize?: number;
        contentId?: string;
    }

    export let fileAttachmentMap = [
        'fileName',
        'fileSource',
        'timeStamp',
        'mimeType',
        'fileSize',
        'contentId',
    ];

    export interface KeyPair {
        keyName: string;
        keyValue: string;
    }

    export let keyPairMap = [
        'keyName',
        'keyValue'
    ];

    export interface WorkItemList {
        id: number,
        type: string,
        name: string,
        workItemInfo: WorkItemInfo
    }

    export interface WorkItemInfo {
        id: number,
        parentGroup: string,
        description: string,
        time: number,
        assignToGroup: string,
        assignToAnalyst?: string,
        actionBy: WorkItemActionBy,
        priority: string,
        type: string,
        reminder?: number,
        remindAssignee?: boolean,
        remindCallOwner?: boolean,
        notifyGroup?: boolean

    }

    export let workItemInfoMap = [
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

    export enum WorkItemActionBy {
        ASIGNEE = 0,
        ASIGNEE_GROUP = 1,
        ANY = 3
    }

    export interface FileList {
        fileName: string,
        fileSize: number,
        filePath: string,
    }


}

export = xmlmc
