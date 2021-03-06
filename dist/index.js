"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const Connection_1 = require("./Connection");
const Session_1 = require("./services/Session");
const Data_1 = require("./services/Data");
const Admin_1 = require("./services/Admin");
const Helpdesk_1 = require("./services/Helpdesk");
const Knowledgebase_1 = require("./services/Knowledgebase");
const Mylibrary_1 = require("./services/Mylibrary");
const Reporting_1 = require("./services/Reporting");
const Selfservice_1 = require("./services/Selfservice");
const Survey_1 = require("./services/Survey");
const System_1 = require("./services/System");
const URL = require("url-parse");
__export(require("./call"));
class XmlMethodCall {
    constructor(server = 'localhost', port, opts) {
        if (server.match(/^(http:\/\/)/)) {
            server = URL(server).host;
            port = 80;
        } else {
            port = server.match(/^(https:\/\/)/) ? 443 : port || 5015;
            server = port === 443 ? URL(server).host : server;
        }
        const defaultOpts = {
            data: {
                formatValues: true
            }
        };
        this.connection = new Connection_1.Connection(server, port);
        this.session = new Session_1.Session(this.connection, this);
        this.data = new Data_1.Data(this.connection, this);
        this.admin = new Admin_1.Admin(this.connection, this);
        this.helpdesk = new Helpdesk_1.Helpdesk(this.connection, this);
        this.knowledgebase = new Knowledgebase_1.Knowledgebase(this.connection, this);
        this.myLibrary = new Mylibrary_1.Mylibrary(this.connection, this);
        this.reporting = new Reporting_1.Reporting(this.connection, this);
        this.selfservice = new Selfservice_1.Selfservice(this.connection, this);
        this.survey = new Survey_1.Survey(this.connection, this);
        this.system = new System_1.System(this.connection, this);
        this.opts = (0, _assign2.default)({}, defaultOpts, opts);
    }
}
exports.XmlMethodCall = XmlMethodCall;