# xmlmc-js

A javascript wrapper for the Supportworks XMLMC API. To use run

```js
npm install xmlmc
const Xmlmc = require('xmlmc');
``` 



## Usage
The package is isomorphic. To use with webpack or browserify, just require it in your script as you normally would.
To use it in a strictly browser environment, just use the minified code in dist/browser. The code will support browsers
>= firefox 52 and IE 10 / node >= 6.10

```js
import Xmlmc from 'xmlmc'
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
