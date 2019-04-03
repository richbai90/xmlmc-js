import {XmlMethodCall} from "../../src";
import {expect} from 'chai';
import { XmlmcResponse } from "../../src/Connection";

let xmlmc : XmlMethodCall;
let session : XmlmcResponse

function btoa(str: string) {
    return Buffer.from(str).toString('base64');
}

before(async () => {
    xmlmc = new XmlMethodCall('http://localhost/');
    session = await xmlmc.session.analystLogon('admin', btoa('admin'));

});

describe ('testing Xmlmc functionality', () => {
    it('be able to establish a session', async () => {
        expect(session.status).to.eq(true);
    })
})

after(async () => {
    xmlmc.session.analystLogoff();
})