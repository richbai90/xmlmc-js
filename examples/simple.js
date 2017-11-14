const Request = require('../lib/Request').Request;
const Connection = require('../lib/Connection').Connection;

const connection = new Connection('10.1.10.27', 80);
const logon = new Request('session', 'analystLogon');
const sqlQuery = new Request('data', 'sqlQuery', {database: 'swdata', query: 'select * from opencall limit 5'});
const logoff = new Request('session', 'analystLogoff');

logon.addParams({
    userId: 'admin',
    password: '',
});

connection.sendRequest(logon).then((r) => {
    console.log(r);
    connection.sendRequest(sqlQuery).then((r) => {
      console.log(r);
        connection.sendRequest(logoff).then((r) => {
            console.log(r);
        }).catch(promiseCatcher);
    }).catch(promiseCatcher)
}).catch(promiseCatcher);


function promiseCatcher(e) {
    console.log(e);
}