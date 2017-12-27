# xmlmc-js

A javascript wrapper for the Supportworks XMLMC API. Currently still in beta stage.
To use run

```js
npm install xmlmc
const Xmlmc = require('xmlmc');
``` 



## Usage
The package is built for a node server. To use in a web browser, you will need to 
use a bundler like Webpack. Below is an example of using the package in a node environment.

```js
const xmlmc = new Xmlmc('https://devserver.local');
xmlmc.session.analystLogon('admin', 'password').then(() => {
    ...
}).catch(promiseCatcher)

function promiseCatcher(e) {
    console.log(e);
}
```

The default export is the `XmlMethodCall` class

View the full docs [here](https://richbai90.github.io/xmlmc-js/) 
