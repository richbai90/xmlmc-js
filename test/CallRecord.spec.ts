import {CallRecord, Status} from '../src/Call';
import {XmlMethodCall} from "../src";
import {expect} from 'chai';
import 'mocha';
import * as sinon from "sinon";

function btoa(str: string) {
    return Buffer.from(str).toString('base64');
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('CallRecord', () => {

    let xmlmc: XmlMethodCall;
    let call: CallRecord;
    let clock: sinon.clock;
    before(async () => {
        xmlmc = new XmlMethodCall('richvmserver.local');
        await xmlmc.session.analystLogon('admin', btoa('admin'));
        call = new CallRecord(1195, xmlmc);
        clock = sinon.useFakeTimers();

    });

    after('end xmlmc session', async () => {
        await call.update('this is a test');
        await xmlmc.session.analystLogoff();
        clock.restore();
    });

    describe('get methods', () => {
        it('should be able to get the call status', async () => {
            expect(await call.status).to.equal(Status.EscalatedToGroup);
        });

        it('should be able to get the call owner', async () => {
            expect(await call.owner).to.equal('ITSM');
        });

        it('should be able to get the customer details', async () => {
            const customer = await call.customer;
            expect(customer.firstname.toLowerCase()).to.equal('anna');
            expect(customer.lastname.toLowerCase()).to.equal('bishop');
            expect(customer.fullname.toLowerCase()).to.equal('anna bishop');

            for (const p in customer) {
                if (customer.hasOwnProperty(p)) {
                    expect(customer[p]).to.not.equal('');
                }
            }

        });

        it('should be able to get the last update', async () => {
            expect(await call.latestUpdate).to.equal('this is a test');
        });

        it('should be able to get the log date', async () => {
            const logDate = await call.logDate;
            expect(logDate.getDate()).to.equal(21);
            // dates are zero indexed, so 1 is February
            expect(logDate.getMonth()).to.equal(1);
            expect(logDate.getFullYear()).to.equal(2014);
        });

        it('should be able to get the summary', async () => {
            expect(await call.summary).to.equal('I would like some help with my Mobile, Tablet or Data Card');
        });

        it('should be able to get the original description', async () => {
            expect(await call.description).to.equal('I would like some help with my Mobile, Tablet or Data Card' +
                '\r\n\r\n' +
                'Call logged and assigned to ITSM by ITSM')
        });
    });

    describe('call actions', () => {
        describe('update', () => {
            it('should update the call', async () => {
                await call.update("this is a test");
                const response = await xmlmc.data.sqlQuery("swdata", "select updatetxt from updatedb where callref = 1195 order by udindex desc limit 1");
                expect(response.data[0].updatetxt).to.equal('this is a test');
            });

            it('should be chainable', async () => {
                let queryResults = await call.update("this is a test")
                    .then(call => call.update("this is another test"))
                    .then(call => call.update('this is a third test'))
                    .then(async () => await xmlmc.data.sqlQuery("swdata", "select updatetxt from updatedb where callref = 1195 order by udindex desc limit 1"));

                expect(queryResults.data[0].updatetxt).to.eq('this is a third test');

            });

            it('should cache the updates for quick retrieval', async () => {
                const start = Date.now();
                const latestUpdate = await call.latestUpdate;
                const end = Date.now();

                expect(latestUpdate).to.eq("this is a third test");
                expect(end - start).to.be.lt(.0001);
            })
        });
        describe('assign', () => {
            it('should assign the call', async () => {
                const owner = await call.assignTo('support', 'admin')
                    .then(call => call.invalidateCache())
                    .then(call => call.owner);
                expect(owner).to.eq('admin');
            });

            it('should invalidate the lastUpdate cache', async () => {
                expect(await call.latestUpdate).to.eq("Call assigned to admin by ADMIN");
            });

            it('should be chainable', async () => {
                const owner = await call.assignTo('support', 'admin')
                    .then(call => call.assignTo('support', 'itsm'))
                    .then(call => call.owner);
                expect(owner).to.eq('itsm');
            });

            it('should cache the owner for quick retrieval', async () => {
                const start = Date.now();
                await call.owner;
                const stop = Date.now();
                expect(stop - start).to.be.lt(.0001);
            })
        });

        describe('status changes', () => {
            // todo
        })
    });


});