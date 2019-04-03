import {XmlMethodCall} from "../../src/browser";
import {expect} from 'chai';
import { XmlmcResponse } from "../../src/browser/Connection";

let xmlmc : XmlMethodCall;
let session : XmlmcResponse

before(async () => {
    xmlmc = new XmlMethodCall('http://localhost/');
    session = await xmlmc.session.analystLogon('admin', btoa('admin'));

});

describe ('Session', () => {
    it('should establish a session', async () => {
        expect(session.status).to.eq(true);
    });
    it('should logoff', async () => {
        expect(await xmlmc.session.analystLogoff()).to.haveOwnProperty('status');
        // expect(await xmlmc.helpdesk.acceptCalls(5011)).to.throw();
    })
})

after(async () => {
    xmlmc.session.analystLogoff();
})