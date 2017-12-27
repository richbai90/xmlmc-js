"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const XmlMethodCall_1 = require("../XmlMethodCall");
const api = new XmlMethodCall_1.default('richvmserver.local');
api.session.analystLogon('admin', '');
api.helpdesk.logAndAcceptNewCall('incident', {
    additionalCallValues: false
}).then(d => console.log(d));
api.session.analystLogoff();