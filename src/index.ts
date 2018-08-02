import {Connection} from "./Connection";
import {Session} from "./services/Session";
import {Data} from "./services/Data";
import {Admin} from "./services/Admin";
import {Helpdesk} from "./services/Helpdesk";
import {Knowledgebase} from "./services/Knowledgebase";
import {Mylibrary} from "./services/Mylibrary";
import {Reporting} from "./services/Reporting";
import {Selfservice} from "./services/Selfservice";
import {Survey} from "./services/Survey";
import {System} from "./services/System";
import {Vpme} from './services/Vpme';
import URL = require('url-parse')

export * from "./call"

export type XmlmcOptions = {
    data?: {
        formatValues?: boolean,
        returnMeta?: boolean,
        rawData?: boolean,
        returnModifiedData?: boolean,
    },


}

export class XmlMethodCall {
    private connection: Connection;
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

    constructor(server: string = 'localhost', port?: number, opts?: XmlmcOptions) {
        if (server.match(/^(http:\/\/)/)) {
            server = URL(server).host;
            port = 80
        } else {
            port = server.match(/^(https:\/\/)/) ? 443 : port || 5015;
            server = port === 443 ? URL(server).host : server;
        }

        const defaultOpts: XmlmcOptions = {
            data: {
                formatValues: true
            }
        };

        this.connection = new Connection(server, port);
        this.session = new Session(this.connection, this);
        this.data = new Data(this.connection, this);
        this.admin = new Admin(this.connection, this);
        this.helpdesk = new Helpdesk(this.connection, this);
        this.knowledgebase = new Knowledgebase(this.connection, this);
        this.myLibrary = new Mylibrary(this.connection, this);
        this.reporting = new Reporting(this.connection, this);
        this.selfservice = new Selfservice(this.connection, this);
        this.survey = new Survey(this.connection, this);
        this.system = new System(this.connection, this);
        this.vpme = new Vpme(this.connection, this);
        this.opts = Object.assign({}, defaultOpts, opts);
    }


}
