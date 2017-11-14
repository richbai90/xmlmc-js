import builder from 'xmlbuilder';

export class Request {
    /**
     * Creates a new request
     * @param {string} service
     * @param {string} method
     * @param {Object} [params]
     */
    constructor(service, method, params) {
        this.service = service;
        this.method = method;
        this.xmlmc = builder.create('methodCall').att('service', service).att('method', method);
        this.paramsNotSet = true;

        if(params) {
            this.addParams(params);
        }
    }

    /**
     * Internal method for building the xmlmc children, params and data.
     * @param {Object} params - an object of params {param: value}
     * @param {Object} [el] - the xml node to process on
     * @param {string} [key=params] - The parent to place the params within
     * @private
     */
    _createXmlmc(params, el = this.xmlmc, key = 'params') {
        if(typeof el === 'string') {
            key = el;
        }
        if(el === this.xmlmc && this.paramsNotSet) {
            el = el.ele(key);
            this.paramsNotSet = false;
        }
        const paramKeys = Object.keys(params);
        paramKeys.forEach(p => {
            if (params[p] instanceof Object) {
                el = el.ele(p);
                this.setParams(params[p], el);
            } else {
                el.ele(p, params[p]);
            }
        })
    }

    /**
     * Add a single parameter / complex parameter
     * @param {string} param - name of the param to add
     * @param {string} [value=""] - value of the param
     */
    addParam(param, value = "") {
        const params = {};
        params[param] = value;
        this._createXmlmc(params);
    }

    /**
     * Add all the params at once
     * @param {Object} params
     */
    addParams(params) {
        this._createXmlmc(params);
    }

    toString() {
        return this.xmlmc.toString();
    }

}