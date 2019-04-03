import fetch from "node-fetch";
import { Request } from "./Request";
import { Cookie, CookieJar } from "tough-cookie";

/**
 * @typedef {Object} Response
 * @param {boolean} status
 * @param {Object} params
 */

/**
 * Class represents a server connection.
 * Responsible for maintaining a connection to the server.
 * Ensures that a cookie is saved each time a request is sent and received.
 */

export interface XmlmcResponse {
  [index: string]: any;

  status: boolean;
  data: Array<{ [index: string]: any }>;
  params: { [index: string]: any };
}

export class Connection {
  protected server: string;
  protected port: number;
  protected https: boolean;
  protected cookieJar: CookieJar;
  private url: string;

  /**
   * Create a connection. Defers to the private _connect method.
   * @param {string} server - IP or FQDN to send the requests to
   * @param {number} port - Port to use when sending the requests. For https use 443. Defaults to 5015.
   */
  constructor(server: string = "localhost", port: number = 5015) {
    this.server = server;
    this.port = port;
    this.https = false;
    this.cookieJar = new CookieJar();
    this.url = this._connect(server, port);
  }

  private getCookies() {
    const jar = this.cookieJar;
    const url = this.url;
    const promise: Promise<string> = new Promise((resolve, reject) => {
      jar.getCookieString(url, (err, cookies) => {
        if (err) {
          reject(err.toString());
          return;
        }
        resolve(cookies);
      });
    });

    return promise;
  }

  private setCookie(cookie?: string | null) {
    const jar = this.cookieJar;
    const url = this.url;
    const promise: Promise<string> = new Promise((resolve, reject) => {
      if (!cookie) {
        // no cookie to set here so dont set one
        resolve();
      } else {
        const toughCookie = Cookie.parse(cookie);
        if (!toughCookie) {
          reject(`invalid cookie format provided : ${cookie}`);
          return;
        }
        jar.setCookie(toughCookie, url, err => {
          if (err) {
            reject(err.toString());
          } else {
            resolve();
          }
        });
      }
      return promise;
    });

    return promise;
  }

  /**
   * Private method responsible for posting the XML Request to the endpoint
   * @param {string} body XML request
   */
  private async post(body: string): Promise<ParsedResponse> {
    const headers = {
      "Content-Type": "text/xmlmc",
      Charset: "UTF-8",
      Accept: "text/json",
      "Accept-Charset": "UTF-8",
      "Cache-Control": "no-cache"
    };

    let cookie;
    try {
      cookie = await this.getCookies();
    } catch (e) {
      // no cookie to get
    }

    const response = await fetch(this.url, {
      method: "POST",
      headers: cookie ? {cookie, ...headers} : headers,
      body
    });
    if (!response.ok) {
      throw {
        status: false,
        params: {
          error: "network error",
          status: response.status,
          text: response.statusText
        },
        data: []
      };
    }

    try {
        await this.setCookie(response.headers.get('Set-Cookie'))
    } catch(e) {
        // couldn't set the cookie
    }
    

    return (
      transformResponse(await response.json())
    );
  }

  /**
   * private connect method. Responsible for inferring https.
   * Creates an instance of axios to use to send requests to and from the server.
   * @param server
   * @param port
   * @returns {*}
   * @private
   */
  private _connect(server: string, port: number): string {
    switch (port) {
      case 443:
        this.https = true;
        return `https://${server}/sw/xmlmc/`;
      case 80:
        return `http://${server}/sw/xmlmc/`;
      default:
        return `http://${server}:${port}/sw`;
    }
  }

  /**
   * @param xmlmc
   * @returns {Promise.<Response>}
   * @throws Module importing error. Occurs if for some reason we were unable to require the underlying modules. Indicates a problem with the library, not the developer.
   */
  sendRequest(xmlmc: Request): Promise<XmlmcResponse> {
    return new Promise<XmlmcResponse>((resolve, reject) => {
      this.post(xmlmc.toString())
        .then(response => {
          response.status ? resolve(<XmlmcResponse>response) : reject(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

function transformResponse(response: {
  "@status": boolean;
  data?: any;
  [p: string]: any;
}) {
  let { "@status": status, data, ...rest } = response;
  let parsedResponse: ParsedResponse = Object.assign(
    { status: status, params: {}, data: [] },
    rest
  );

  data = isIterable(data) && data;
  if (data) {
    if (data.hasOwnProperty("metaData")) {
      parsedResponse.params.metadata = data.metaData;
      delete data.metaData;
    }

    if (data.hasOwnProperty("generatedId")) {
      parsedResponse.params.generatedId = data.generatedId;
      delete data.generatedId;
    }
    parsedResponse.data = handleDataParam(data);
  }

  return parsedResponse;
}

function handleDataParam(
  data: ParsedResponse["data"][0] | ParsedResponse["data"]
): ParsedResponse["data"] {
  if (Array.isArray(data)) {
    return data;
  }
  if (data.hasOwnProperty("rowData")) {
    return (
      (Array.isArray(data.rowData.row) && data.rowData.row) || [
        data.rowData.row
      ]
    );
  }

  return [data];
}

function isIterable(obj: any): boolean {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }

  return Object(obj) === obj || typeof obj[Symbol.iterator] === "function";
}

// todo we can do better typing than this
export interface ParsedResponse {
  status: boolean;
  params: { [p: string]: any };
  data: Array<{ [p: string]: any }>;
}
