"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("../Request");
/**
 * VpmeRequest
 * Extends Request setting the service explicitly to VPME and passing no map or default params.
 * It is up to the developer to specify the correct params in the correct order
 */
class VpmeRequest extends Request_1.Request {
    /**
     * Creates a new VPME Request
     * @param method The VPME script to invoke
     */
    constructor(method) {
        super('VPME', method, undefined, []);
        this.service = 'VPME';
    }
}
/**
 * Vpme
 * Provides an interface for creating and invoking VPME scripts. It is a factory for Request objects, restricting their type to VPME.
 */
class Vpme {
    /**
     * Creating a new VPME factory
     * @param connection A connection to the server
     * @param xmlmc An instance of the XmlMethodCall API
     */
    constructor(connection, xmlmc) {
        this.connection = connection;
        this.xmlmc = xmlmc;
    }
    /**
     * Factory method returning a new Request object that can be used to add params manually
     * @param method the VPME script to invoke
     */
    createMethodCall(method) {
        return new VpmeRequest(method);
    }
    /**
     * Invokes the Request via the provided Connection
     * @param request The Request object returned from createMethodCall
     */
    invoke(request) {
        if (request.service !== 'VPME') throw 'Request::service must be "VPME"';
        return this.connection.sendRequest(request);
    }
}
exports.Vpme = Vpme;