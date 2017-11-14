# xmlmc-js

A javascript wrapper for the Supportworks XMLMC API. Currently still in alpha stage.
To use, clone this repository and run

```
npm i && npm run build
``` 

Require files from the `lib` directory


## Usage
The package is built for a node server. To use in a web browser, you will need to 
use a bundler like Webpack. Below is an example of using the package in a node environment.

```
const Connection = require('./lib/Connection').Connection;
const Request = require('./lib/Request').Request;

let connection = new Connection('10.1.10.17', 443) // Use a secure connection
let logon = new Request('session', 'analystLogon');

// Add params as part of the new request
let sqlQuery = new Request('data', 'sqlQuery', {database: 'swdata', query: 'select * from opencall limit 5'});
let logoff = new Request('session', 'analystLogoff');

// Add params later
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
```

## TODO
* Simplify the API
* Prepackage a browser option
* Deploy to npm