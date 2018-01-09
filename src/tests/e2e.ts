import Xmlmc from '../XmlMethodCall'

let api = new Xmlmc('richvmserver.local');
api.session.analystLogon('admin', '').then(() => {
    api.helpdesk.logAndAcceptNewCall('incident',{
        additionalCallValues: false,
    }).then(d => console.log(d)).then(() => {
        api.session.analystLogoff();
    });
});



api = new Xmlmc('http://localhost/sw/xmlmc/');
api.session.analystLogon('admin', '').then(() => {
    api.helpdesk.logAndAcceptNewCall('incident',{
        additionalCallValues: false,
    }).then(d => console.log(d)).then(() => {
        api.session.analystLogoff();
    });
});
