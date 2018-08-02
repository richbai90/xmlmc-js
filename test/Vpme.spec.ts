import {XmlMethodCall} from "../src";
import {expect} from 'chai';
import 'mocha';

function btoa(str: string) {
    return Buffer.from(str).toString('base64');
}

describe('Vpme', () => {

    let xmlmc: XmlMethodCall;
    before(async () => {
        xmlmc = new XmlMethodCall('richvmserver.local', 5012);
        // btoa is only available on browser environments. You'll need to define your own function for base64 encdoing on the server.
        await xmlmc.session.analystLogon('admin', btoa('admin'));

    });

    after('end xmlmc session', async () => {
        await xmlmc.session.analystLogoff();
    });

  it('should provide and interface for creating VPME requests', () => {
    expect(xmlmc.vpme).to.be.an('object');
  });

  it('should be able to build any method', () => {
    const vpme = xmlmc.vpme;
    const methodCall = vpme.createMethodCall('testVPME');
    methodCall.addParam('foo', 'bar');
    expect(methodCall.toString()).to.eq('<methodCall service="VPME" method="testVPME"><params><foo>bar</foo></params></methodCall>');
  });

  it('should be able to invoke any VPME', async () => {
    const vpme = xmlmc.vpme;
    const methodCall = vpme.createMethodCall('testVPME');
    
    methodCall.addParam('foo', 'bar');
    vpme.invoke(methodCall).then(({ params }) => {
      console.log(params.res1)
    })
    expect((await vpme.invoke(methodCall)).params.res1).to.eq('bar');
  })


});
