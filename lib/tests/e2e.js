"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const XmlMethodCall_1 = require("../XmlMethodCall");
let api = new XmlMethodCall_1.default('richvmserver.local');
api.session.analystLogon('admin', '').then(() => {
    api.helpdesk.logAndAcceptNewCall('incident', {
        additionalCallValues: false
    }).then(d => console.log(d)).then(() => {
        api.session.analystLogoff();
    });
});
api = new XmlMethodCall_1.default('http://localhost/sw/xmlmc/');
api.session.analystLogon('admin', '').then(() => {
    api.helpdesk.logAndAcceptNewCall('incident', {
        additionalCallValues: false
    }).then(d => console.log(d)).then(() => {
        api.session.analystLogoff();
    });
});