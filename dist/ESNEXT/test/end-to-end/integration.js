"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../src");
function btoa(str) {
    return Buffer.from(str).toString("base64");
}
const xmlmc = new src_1.XmlMethodCall("localhost", 5015);
const test = async () => {
    console.log("hello my old friend");
    try {
        await xmlmc.session.analystLogon("admin", btoa("admin"));
        console.log('logged on and good to go');
        const newCall = await xmlmc.helpdesk.logNewCall("incident", {
            slaName: "P2 - Bronze  12 Hr Resp. 24 Hr Fix Mon-Fri 9am- 5.30pm",
            customerId: "alanc",
            customerName: "Alan Castle",
            additionalCallValues: {
                opencall: {
                    itsm_sladef: 12,
                    itsm_impact_level: "low",
                    itsm_urgency_level: "low",
                    fk_company_id: "Ares Computer Services"
                }
            }
        });
        console.log('call logged');
        await xmlmc.session.analystLogoff();
        console.log(newCall);
    }
    catch (e) {
        await xmlmc.session.analystLogoff();
        console.log(e);
    }
};
test();
