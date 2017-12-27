import Xmlmc from '../XmlMethodCall'

const api = new Xmlmc('richvmserver.local');
api.session.analystLogon('admin', '');
api.helpdesk.logAndAcceptNewCall('incident',{
    additionalCallValues: false,
}).then(d => console.log(d));
api.session.analystLogoff();
