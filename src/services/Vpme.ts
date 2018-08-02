import {Connection, XmlmcResponse} from '../Connection'
import {XmlMethodCall} from '..'
import {Request} from '../Request'

/**
 * VpmeRequest
 * Extends Request setting the service explicitly to VPME and passing no map or default params.
 * It is up to the developer to specify the correct params in the correct order
 */
class VpmeRequest extends Request {
  service : string;

  /**
   * Creates a new VPME Request
   * @param method The VPME script to invoke
   */
  constructor(method : string) {
    super('VPME', method, undefined, []);
    this.service = 'VPME';
  }
}

/**
 * Vpme
 * Provides an interface for creating and invoking VPME scripts. It is a factory for Request objects, restricting their type to VPME.
 */
export class Vpme {
  private connection: Connection;
  private xmlmc: XmlMethodCall;

  /**
   * Creating a new VPME factory
   * @param connection A connection to the server
   * @param xmlmc An instance of the XmlMethodCall API
   */
  constructor(connection: Connection, xmlmc: XmlMethodCall) {
    this.connection = connection;
    this.xmlmc = xmlmc;
  }

  /**
   * Factory method returning a new Request object that can be used to add params manually
   * @param method the VPME script to invoke
   */
  createMethodCall(method : string) : VpmeRequest {
    return new VpmeRequest(method);
  }

  /**
   * Invokes the Request via the provided Connection
   * @param request The Request object returned from createMethodCall
   */
  invoke(request : VpmeRequest): Promise<XmlmcResponse> {
    if(request.service !== 'VPME') throw 'Request::service must be "VPME"';
    return this.connection.sendRequest(request);
  }
}