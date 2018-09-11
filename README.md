# xmlmc-js

A javascript wrapper for the Supportworks XMLMC API. To use run

```js
npm install xmlmc
import { XmlMethodCall } = from 'xmlmc';
``` 



## Usage
The package is isomorphic. To use with webpack or browserify, just require it in your script as you normally would.
To use it in a strictly browser environment, just use the minified code in dist/browser. The code will support browsers
>= firefox 52 and IE 10 / node >= 6.10

```js
import { XmlmMethodCall } from 'xmlmc'
const xmlmc = new XmlMethodCall('https://devserver.local');
xmlmc.session.analystLogon('admin', btoa('password')).then(() => {
    ...
}).catch(promiseCatcher)

function promiseCatcher(e) {
    console.log(e);
}
```
Or use async/await

```js
await xmlmc.session.analystLogon('admin',btoa('password'))
```

View the full docs [here](https://richbai90.github.io/xmlmc-js/) 
