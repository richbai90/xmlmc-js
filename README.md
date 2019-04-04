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
import { XmlMethodCall } from 'xmlmc'
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

Tested on all major browsers with great thanks to [BrowserStack][1]
![Browser Stack][browserstack]

[1]: https://www.browserstack.com/
[browserstack]: (https://p14.zdusercontent.com/attachment/1015988/GXkY93wJ7Ayzbcxp21LlyOlrA?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..qtS7bYpfycZVgDYiiLX96Q.SmCXqgPJnpo8lxE25nN4PMaXDB84QJHQJQNkGQvDKN6oqc24lWtdXI7qzOMduLtwFzax8aPw3wRgERKpTCynoSXnHd8ISiRlVMHnXKezVKn3rWeYKf8QmICUmhSRceo6ptpAPnRt27byboUix44tINJcFi0z-ZEOAJ7uo5ZmCgbHDP_v5jKMstdxhaTiW4_QgmvKbmbGCKU8Je-HziXJonYn8uRXdgyFwcp6g4sdZAY1fEnHVfvFYZJhjiOvnRLt8AMspVrM46vXGH4xOR_TR0hpgUUpLE6csNT72MrM4Ws.Nwce9kj0_duhyAvkyH-7TA)