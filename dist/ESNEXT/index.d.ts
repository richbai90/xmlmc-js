import { Session } from "./services/Session";
import { Data } from "./services/Data";
import { Admin } from "./services/Admin";
import { Helpdesk } from "./services/Helpdesk";
import { Knowledgebase } from "./services/Knowledgebase";
import { Mylibrary } from "./services/Mylibrary";
import { Reporting } from "./services/Reporting";
import { Selfservice } from "./services/Selfservice";
import { Survey } from "./services/Survey";
import { System } from "./services/System";
import { Vpme } from './services/Vpme';
export * from "./call";
export declare type XmlmcOptions = {
    data?: {
        formatValues?: boolean;
        returnMeta?: boolean;
        rawData?: boolean;
        returnModifiedData?: boolean;
    };
};
export declare class XmlMethodCall {
    private connection;
    opts: XmlmcOptions;
    session: Session;
    data: Data;
    admin: Admin;
    helpdesk: Helpdesk;
    knowledgebase: Knowledgebase;
    myLibrary: Mylibrary;
    reporting: Reporting;
    selfservice: Selfservice;
    survey: Survey;
    system: System;
    vpme: Vpme;
    constructor(server?: string, port?: number, opts?: XmlmcOptions);
}
