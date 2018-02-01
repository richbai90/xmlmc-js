"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const date = new Date("January 1, 2016 00:00:00");
const time = Math.round(date.getTime() / 1000);
let api = new __1.XmlMethodCall('richvmserver.local', 5015);
api.session.analystLogon('admin', '').then(() => {
    api.data.sqlQuery("swdata", `select callref from opencall where logdatex <= ${time} limit 5`).then(d => {
        console.log(d);
    }).then(() => {
        api.session.analystLogoff();
    }).catch(err => {
        api.session.analystLogoff();
    });
});