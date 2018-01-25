/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(21);
var isBuffer = __webpack_require__(40);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLElement, XMLNode, XMLProcessingInstruction, XMLRaw, XMLText, isEmpty, isFunction, isObject, ref,
    hasProp = {}.hasOwnProperty;

  ref = __webpack_require__(3), isObject = ref.isObject, isFunction = ref.isFunction, isEmpty = ref.isEmpty;

  XMLElement = null;

  XMLCData = null;

  XMLComment = null;

  XMLDeclaration = null;

  XMLDocType = null;

  XMLRaw = null;

  XMLText = null;

  XMLProcessingInstruction = null;

  module.exports = XMLNode = (function() {
    function XMLNode(parent) {
      this.parent = parent;
      if (this.parent) {
        this.options = this.parent.options;
        this.stringify = this.parent.stringify;
      }
      this.children = [];
      if (!XMLElement) {
        XMLElement = __webpack_require__(4);
        XMLCData = __webpack_require__(5);
        XMLComment = __webpack_require__(6);
        XMLDeclaration = __webpack_require__(7);
        XMLDocType = __webpack_require__(8);
        XMLRaw = __webpack_require__(13);
        XMLText = __webpack_require__(14);
        XMLProcessingInstruction = __webpack_require__(15);
      }
    }

    XMLNode.prototype.element = function(name, attributes, text) {
      var childNode, item, j, k, key, lastChild, len, len1, ref1, val;
      lastChild = null;
      if (attributes == null) {
        attributes = {};
      }
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
      }
      if (name != null) {
        name = name.valueOf();
      }
      if (Array.isArray(name)) {
        for (j = 0, len = name.length; j < len; j++) {
          item = name[j];
          lastChild = this.element(item);
        }
      } else if (isFunction(name)) {
        lastChild = this.element(name.apply());
      } else if (isObject(name)) {
        for (key in name) {
          if (!hasProp.call(name, key)) continue;
          val = name[key];
          if (isFunction(val)) {
            val = val.apply();
          }
          if ((isObject(val)) && (isEmpty(val))) {
            val = null;
          }
          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
          } else if (!this.options.separateArrayItems && Array.isArray(val)) {
            for (k = 0, len1 = val.length; k < len1; k++) {
              item = val[k];
              childNode = {};
              childNode[key] = item;
              lastChild = this.element(childNode);
            }
          } else if (isObject(val)) {
            lastChild = this.element(key);
            lastChild.element(val);
          } else {
            lastChild = this.element(key, val);
          }
        }
      } else {
        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
          lastChild = this.text(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
          lastChild = this.cdata(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
          lastChild = this.comment(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
          lastChild = this.raw(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
          lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
        } else {
          lastChild = this.node(name, attributes, text);
        }
      }
      if (lastChild == null) {
        throw new Error("Could not create any elements with: " + name);
      }
      return lastChild;
    };

    XMLNode.prototype.insertBefore = function(name, attributes, text) {
      var child, i, removed;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.element(name, attributes, text);
      Array.prototype.push.apply(this.parent.children, removed);
      return child;
    };

    XMLNode.prototype.insertAfter = function(name, attributes, text) {
      var child, i, removed;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.element(name, attributes, text);
      Array.prototype.push.apply(this.parent.children, removed);
      return child;
    };

    XMLNode.prototype.remove = function() {
      var i, ref1;
      if (this.isRoot) {
        throw new Error("Cannot remove the root element");
      }
      i = this.parent.children.indexOf(this);
      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = [])), ref1;
      return this.parent;
    };

    XMLNode.prototype.node = function(name, attributes, text) {
      var child, ref1;
      if (name != null) {
        name = name.valueOf();
      }
      attributes || (attributes = {});
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
      }
      child = new XMLElement(this, name, attributes);
      if (text != null) {
        child.text(text);
      }
      this.children.push(child);
      return child;
    };

    XMLNode.prototype.text = function(value) {
      var child;
      child = new XMLText(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.cdata = function(value) {
      var child;
      child = new XMLCData(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.comment = function(value) {
      var child;
      child = new XMLComment(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.commentBefore = function(value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.comment(value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.commentAfter = function(value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.comment(value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.raw = function(value) {
      var child;
      child = new XMLRaw(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.instruction = function(target, value) {
      var insTarget, insValue, instruction, j, len;
      if (target != null) {
        target = target.valueOf();
      }
      if (value != null) {
        value = value.valueOf();
      }
      if (Array.isArray(target)) {
        for (j = 0, len = target.length; j < len; j++) {
          insTarget = target[j];
          this.instruction(insTarget);
        }
      } else if (isObject(target)) {
        for (insTarget in target) {
          if (!hasProp.call(target, insTarget)) continue;
          insValue = target[insTarget];
          this.instruction(insTarget, insValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        instruction = new XMLProcessingInstruction(this, target, value);
        this.children.push(instruction);
      }
      return this;
    };

    XMLNode.prototype.instructionBefore = function(target, value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.instruction(target, value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.instructionAfter = function(target, value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.instruction(target, value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.declaration = function(version, encoding, standalone) {
      var doc, xmldec;
      doc = this.document();
      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
      if (doc.children[0] instanceof XMLDeclaration) {
        doc.children[0] = xmldec;
      } else {
        doc.children.unshift(xmldec);
      }
      return doc.root() || doc;
    };

    XMLNode.prototype.doctype = function(pubID, sysID) {
      var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
      doc = this.document();
      doctype = new XMLDocType(doc, pubID, sysID);
      ref1 = doc.children;
      for (i = j = 0, len = ref1.length; j < len; i = ++j) {
        child = ref1[i];
        if (child instanceof XMLDocType) {
          doc.children[i] = doctype;
          return doctype;
        }
      }
      ref2 = doc.children;
      for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
        child = ref2[i];
        if (child.isRoot) {
          doc.children.splice(i, 0, doctype);
          return doctype;
        }
      }
      doc.children.push(doctype);
      return doctype;
    };

    XMLNode.prototype.up = function() {
      if (this.isRoot) {
        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
      }
      return this.parent;
    };

    XMLNode.prototype.root = function() {
      var node;
      node = this;
      while (node) {
        if (node.isDocument) {
          return node.rootObject;
        } else if (node.isRoot) {
          return node;
        } else {
          node = node.parent;
        }
      }
    };

    XMLNode.prototype.document = function() {
      var node;
      node = this;
      while (node) {
        if (node.isDocument) {
          return node;
        } else {
          node = node.parent;
        }
      }
    };

    XMLNode.prototype.end = function(options) {
      return this.document().end(options);
    };

    XMLNode.prototype.prev = function() {
      var i;
      i = this.parent.children.indexOf(this);
      if (i < 1) {
        throw new Error("Already at the first node");
      }
      return this.parent.children[i - 1];
    };

    XMLNode.prototype.next = function() {
      var i;
      i = this.parent.children.indexOf(this);
      if (i === -1 || i === this.parent.children.length - 1) {
        throw new Error("Already at the last node");
      }
      return this.parent.children[i + 1];
    };

    XMLNode.prototype.importDocument = function(doc) {
      var clonedRoot;
      clonedRoot = doc.root().clone();
      clonedRoot.parent = this;
      clonedRoot.isRoot = false;
      this.children.push(clonedRoot);
      return this;
    };

    XMLNode.prototype.ele = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.nod = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLNode.prototype.doc = function() {
      return this.document();
    };

    XMLNode.prototype.dec = function(version, encoding, standalone) {
      return this.declaration(version, encoding, standalone);
    };

    XMLNode.prototype.dtd = function(pubID, sysID) {
      return this.doctype(pubID, sysID);
    };

    XMLNode.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.n = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.t = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLNode.prototype.i = function(target, value) {
      return this.instruction(target, value);
    };

    XMLNode.prototype.u = function() {
      return this.up();
    };

    XMLNode.prototype.importXMLBuilder = function(doc) {
      return this.importDocument(doc);
    };

    return XMLNode;

  })();

}).call(this);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var xmlbuilder_1 = __webpack_require__(72);

var Request = function () {
    function Request(service, method) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var paramMap = arguments[3];

        _classCallCheck(this, Request);

        this.service = service;
        this.method = method;
        this.xmlmc = xmlbuilder_1.create('methodCall').att('service', service).att('method', method);
        this.paramsNotSet = true;
        if (params) {
            this.addParams(params, paramMap);
        }
    }

    _createClass(Request, [{
        key: "_createXmlmc",
        value: function _createXmlmc(params) {
            var _this = this;

            var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.xmlmc;
            var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'params';

            if (typeof el === 'string') {
                key = el;
            }
            if (el === this.xmlmc && this.paramsNotSet) {
                el = el.ele(key);
                this.paramsNotSet = false;
            }
            var paramKeys = Object.keys(params);
            paramKeys.forEach(function (p) {
                var param = params[p];
                if (param === undefined) {
                    return;
                }
                if (Object.getPrototypeOf(param) === Object.prototype) {
                    el = el.ele(p);
                    _this._createXmlmc(params[p], el);
                } else {
                    el.ele(p, param.toString());
                }
            });
        }
        /**
         * Add a simple / complex param
         * @param {Params} param
         * @param {string} value
         */

    }, {
        key: "addParam",
        value: function addParam(param, value) {
            var params = {};
            params[param] = value;
            this._createXmlmc(params);
        }
        /**
         * Add all the params at once
         * @param {Params} params
         * @param paramMap
         */

    }, {
        key: "addParams",
        value: function addParams(params, paramMap) {
            var orderedParams = {};
            // ensure that all the params are in the proper order
            paramMap.forEach(function (v) {
                if (params.hasOwnProperty(v)) {
                    orderedParams[v] = params[v];
                }
            });
            this._createXmlmc(orderedParams);
        }
    }, {
        key: "toString",
        value: function toString() {
            return this.xmlmc.toString();
        }
    }]);

    return Request;
}();

exports.Request = Request;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.6
(function() {
  var assign, isArray, isEmpty, isFunction, isObject, isPlainObject,
    slice = [].slice,
    hasProp = {}.hasOwnProperty;

  assign = function() {
    var i, key, len, source, sources, target;
    target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (isFunction(Object.assign)) {
      Object.assign.apply(null, arguments);
    } else {
      for (i = 0, len = sources.length; i < len; i++) {
        source = sources[i];
        if (source != null) {
          for (key in source) {
            if (!hasProp.call(source, key)) continue;
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };

  isFunction = function(val) {
    return !!val && Object.prototype.toString.call(val) === '[object Function]';
  };

  isObject = function(val) {
    var ref;
    return !!val && ((ref = typeof val) === 'function' || ref === 'object');
  };

  isArray = function(val) {
    if (isFunction(Array.isArray)) {
      return Array.isArray(val);
    } else {
      return Object.prototype.toString.call(val) === '[object Array]';
    }
  };

  isEmpty = function(val) {
    var key;
    if (isArray(val)) {
      return !val.length;
    } else {
      for (key in val) {
        if (!hasProp.call(val, key)) continue;
        return false;
      }
      return true;
    }
  };

  isPlainObject = function(val) {
    var ctor, proto;
    return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && (typeof ctor === 'function') && (ctor instanceof ctor) && (Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object));
  };

  module.exports.assign = assign;

  module.exports.isFunction = isFunction;

  module.exports.isObject = isObject;

  module.exports.isArray = isArray;

  module.exports.isEmpty = isEmpty;

  module.exports.isPlainObject = isPlainObject;

}).call(this);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLAttribute, XMLElement, XMLNode, isFunction, isObject, ref,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ref = __webpack_require__(3), isObject = ref.isObject, isFunction = ref.isFunction;

  XMLNode = __webpack_require__(1);

  XMLAttribute = __webpack_require__(32);

  module.exports = XMLElement = (function(superClass) {
    extend(XMLElement, superClass);

    function XMLElement(parent, name, attributes) {
      XMLElement.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing element name");
      }
      this.name = this.stringify.eleName(name);
      this.attributes = {};
      if (attributes != null) {
        this.attribute(attributes);
      }
      if (parent.isDocument) {
        this.isRoot = true;
        this.documentObject = parent;
        parent.rootObject = this;
      }
    }

    XMLElement.prototype.clone = function() {
      var att, attName, clonedSelf, ref1;
      clonedSelf = Object.create(this);
      if (clonedSelf.isRoot) {
        clonedSelf.documentObject = null;
      }
      clonedSelf.attributes = {};
      ref1 = this.attributes;
      for (attName in ref1) {
        if (!hasProp.call(ref1, attName)) continue;
        att = ref1[attName];
        clonedSelf.attributes[attName] = att.clone();
      }
      clonedSelf.children = [];
      this.children.forEach(function(child) {
        var clonedChild;
        clonedChild = child.clone();
        clonedChild.parent = clonedSelf;
        return clonedSelf.children.push(clonedChild);
      });
      return clonedSelf;
    };

    XMLElement.prototype.attribute = function(name, value) {
      var attName, attValue;
      if (name != null) {
        name = name.valueOf();
      }
      if (isObject(name)) {
        for (attName in name) {
          if (!hasProp.call(name, attName)) continue;
          attValue = name[attName];
          this.attribute(attName, attValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        if (!this.options.skipNullAttributes || (value != null)) {
          this.attributes[name] = new XMLAttribute(this, name, value);
        }
      }
      return this;
    };

    XMLElement.prototype.removeAttribute = function(name) {
      var attName, i, len;
      if (name == null) {
        throw new Error("Missing attribute name");
      }
      name = name.valueOf();
      if (Array.isArray(name)) {
        for (i = 0, len = name.length; i < len; i++) {
          attName = name[i];
          delete this.attributes[attName];
        }
      } else {
        delete this.attributes[name];
      }
      return this;
    };

    XMLElement.prototype.toString = function(options) {
      return this.options.writer.set(options).element(this);
    };

    XMLElement.prototype.att = function(name, value) {
      return this.attribute(name, value);
    };

    XMLElement.prototype.a = function(name, value) {
      return this.attribute(name, value);
    };

    return XMLElement;

  })(XMLNode);

}).call(this);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLCData, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(1);

  module.exports = XMLCData = (function(superClass) {
    extend(XMLCData, superClass);

    function XMLCData(parent, text) {
      XMLCData.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing CDATA text");
      }
      this.text = this.stringify.cdata(text);
    }

    XMLCData.prototype.clone = function() {
      return Object.create(this);
    };

    XMLCData.prototype.toString = function(options) {
      return this.options.writer.set(options).cdata(this);
    };

    return XMLCData;

  })(XMLNode);

}).call(this);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLComment, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(1);

  module.exports = XMLComment = (function(superClass) {
    extend(XMLComment, superClass);

    function XMLComment(parent, text) {
      XMLComment.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing comment text");
      }
      this.text = this.stringify.comment(text);
    }

    XMLComment.prototype.clone = function() {
      return Object.create(this);
    };

    XMLComment.prototype.toString = function(options) {
      return this.options.writer.set(options).comment(this);
    };

    return XMLComment;

  })(XMLNode);

}).call(this);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLDeclaration, XMLNode, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(3).isObject;

  XMLNode = __webpack_require__(1);

  module.exports = XMLDeclaration = (function(superClass) {
    extend(XMLDeclaration, superClass);

    function XMLDeclaration(parent, version, encoding, standalone) {
      var ref;
      XMLDeclaration.__super__.constructor.call(this, parent);
      if (isObject(version)) {
        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
      }
      if (!version) {
        version = '1.0';
      }
      this.version = this.stringify.xmlVersion(version);
      if (encoding != null) {
        this.encoding = this.stringify.xmlEncoding(encoding);
      }
      if (standalone != null) {
        this.standalone = this.stringify.xmlStandalone(standalone);
      }
    }

    XMLDeclaration.prototype.toString = function(options) {
      return this.options.writer.set(options).declaration(this);
    };

    return XMLDeclaration;

  })(XMLNode);

}).call(this);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNode, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(3).isObject;

  XMLNode = __webpack_require__(1);

  XMLDTDAttList = __webpack_require__(9);

  XMLDTDEntity = __webpack_require__(10);

  XMLDTDElement = __webpack_require__(11);

  XMLDTDNotation = __webpack_require__(12);

  module.exports = XMLDocType = (function(superClass) {
    extend(XMLDocType, superClass);

    function XMLDocType(parent, pubID, sysID) {
      var ref, ref1;
      XMLDocType.__super__.constructor.call(this, parent);
      this.documentObject = parent;
      if (isObject(pubID)) {
        ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
      }
      if (sysID == null) {
        ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
      }
      if (pubID != null) {
        this.pubID = this.stringify.dtdPubID(pubID);
      }
      if (sysID != null) {
        this.sysID = this.stringify.dtdSysID(sysID);
      }
    }

    XMLDocType.prototype.element = function(name, value) {
      var child;
      child = new XMLDTDElement(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      var child;
      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.entity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, false, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.pEntity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, true, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.notation = function(name, value) {
      var child;
      child = new XMLDTDNotation(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.toString = function(options) {
      return this.options.writer.set(options).docType(this);
    };

    XMLDocType.prototype.ele = function(name, value) {
      return this.element(name, value);
    };

    XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
    };

    XMLDocType.prototype.ent = function(name, value) {
      return this.entity(name, value);
    };

    XMLDocType.prototype.pent = function(name, value) {
      return this.pEntity(name, value);
    };

    XMLDocType.prototype.not = function(name, value) {
      return this.notation(name, value);
    };

    XMLDocType.prototype.up = function() {
      return this.root() || this.documentObject;
    };

    return XMLDocType;

  })(XMLNode);

}).call(this);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLDTDAttList, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(1);

  module.exports = XMLDTDAttList = (function(superClass) {
    extend(XMLDTDAttList, superClass);

    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      XMLDTDAttList.__super__.constructor.call(this, parent);
      if (elementName == null) {
        throw new Error("Missing DTD element name");
      }
      if (attributeName == null) {
        throw new Error("Missing DTD attribute name");
      }
      if (!attributeType) {
        throw new Error("Missing DTD attribute type");
      }
      if (!defaultValueType) {
        throw new Error("Missing DTD attribute default");
      }
      if (defaultValueType.indexOf('#') !== 0) {
        defaultValueType = '#' + defaultValueType;
      }
      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
      }
      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
        throw new Error("Default value only applies to #FIXED or #DEFAULT");
      }
      this.elementName = this.stringify.eleName(elementName);
      this.attributeName = this.stringify.attName(attributeName);
      this.attributeType = this.stringify.dtdAttType(attributeType);
      this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
      this.defaultValueType = defaultValueType;
    }

    XMLDTDAttList.prototype.toString = function(options) {
      return this.options.writer.set(options).dtdAttList(this);
    };

    return XMLDTDAttList;

  })(XMLNode);

}).call(this);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLDTDEntity, XMLNode, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(3).isObject;

  XMLNode = __webpack_require__(1);

  module.exports = XMLDTDEntity = (function(superClass) {
    extend(XMLDTDEntity, superClass);

    function XMLDTDEntity(parent, pe, name, value) {
      XMLDTDEntity.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing entity name");
      }
      if (value == null) {
        throw new Error("Missing entity value");
      }
      this.pe = !!pe;
      this.name = this.stringify.eleName(name);
      if (!isObject(value)) {
        this.value = this.stringify.dtdEntityValue(value);
      } else {
        if (!value.pubID && !value.sysID) {
          throw new Error("Public and/or system identifiers are required for an external entity");
        }
        if (value.pubID && !value.sysID) {
          throw new Error("System identifier is required for a public external entity");
        }
        if (value.pubID != null) {
          this.pubID = this.stringify.dtdPubID(value.pubID);
        }
        if (value.sysID != null) {
          this.sysID = this.stringify.dtdSysID(value.sysID);
        }
        if (value.nData != null) {
          this.nData = this.stringify.dtdNData(value.nData);
        }
        if (this.pe && this.nData) {
          throw new Error("Notation declaration is not allowed in a parameter entity");
        }
      }
    }

    XMLDTDEntity.prototype.toString = function(options) {
      return this.options.writer.set(options).dtdEntity(this);
    };

    return XMLDTDEntity;

  })(XMLNode);

}).call(this);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLDTDElement, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(1);

  module.exports = XMLDTDElement = (function(superClass) {
    extend(XMLDTDElement, superClass);

    function XMLDTDElement(parent, name, value) {
      XMLDTDElement.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing DTD element name");
      }
      if (!value) {
        value = '(#PCDATA)';
      }
      if (Array.isArray(value)) {
        value = '(' + value.join(',') + ')';
      }
      this.name = this.stringify.eleName(name);
      this.value = this.stringify.dtdElementValue(value);
    }

    XMLDTDElement.prototype.toString = function(options) {
      return this.options.writer.set(options).dtdElement(this);
    };

    return XMLDTDElement;

  })(XMLNode);

}).call(this);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLDTDNotation, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(1);

  module.exports = XMLDTDNotation = (function(superClass) {
    extend(XMLDTDNotation, superClass);

    function XMLDTDNotation(parent, name, value) {
      XMLDTDNotation.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing notation name");
      }
      if (!value.pubID && !value.sysID) {
        throw new Error("Public or system identifiers are required for an external entity");
      }
      this.name = this.stringify.eleName(name);
      if (value.pubID != null) {
        this.pubID = this.stringify.dtdPubID(value.pubID);
      }
      if (value.sysID != null) {
        this.sysID = this.stringify.dtdSysID(value.sysID);
      }
    }

    XMLDTDNotation.prototype.toString = function(options) {
      return this.options.writer.set(options).dtdNotation(this);
    };

    return XMLDTDNotation;

  })(XMLNode);

}).call(this);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLNode, XMLRaw,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(1);

  module.exports = XMLRaw = (function(superClass) {
    extend(XMLRaw, superClass);

    function XMLRaw(parent, text) {
      XMLRaw.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing raw text");
      }
      this.value = this.stringify.raw(text);
    }

    XMLRaw.prototype.clone = function() {
      return Object.create(this);
    };

    XMLRaw.prototype.toString = function(options) {
      return this.options.writer.set(options).raw(this);
    };

    return XMLRaw;

  })(XMLNode);

}).call(this);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLNode, XMLText,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(1);

  module.exports = XMLText = (function(superClass) {
    extend(XMLText, superClass);

    function XMLText(parent, text) {
      XMLText.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing element text");
      }
      this.value = this.stringify.eleText(text);
    }

    XMLText.prototype.clone = function() {
      return Object.create(this);
    };

    XMLText.prototype.toString = function(options) {
      return this.options.writer.set(options).text(this);
    };

    return XMLText;

  })(XMLNode);

}).call(this);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLNode, XMLProcessingInstruction,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(1);

  module.exports = XMLProcessingInstruction = (function(superClass) {
    extend(XMLProcessingInstruction, superClass);

    function XMLProcessingInstruction(parent, target, value) {
      XMLProcessingInstruction.__super__.constructor.call(this, parent);
      if (target == null) {
        throw new Error("Missing instruction target");
      }
      this.target = this.stringify.insTarget(target);
      if (value) {
        this.value = this.stringify.insValue(value);
      }
    }

    XMLProcessingInstruction.prototype.clone = function() {
      return Object.create(this);
    };

    XMLProcessingInstruction.prototype.toString = function(options) {
      return this.options.writer.set(options).processingInstruction(this);
    };

    return XMLProcessingInstruction;

  })(XMLNode);

}).call(this);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(42);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(43);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(48);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(18);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(22);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLText, XMLWriterBase,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLDeclaration = __webpack_require__(7);

  XMLDocType = __webpack_require__(8);

  XMLCData = __webpack_require__(5);

  XMLComment = __webpack_require__(6);

  XMLElement = __webpack_require__(4);

  XMLRaw = __webpack_require__(13);

  XMLText = __webpack_require__(14);

  XMLProcessingInstruction = __webpack_require__(15);

  XMLDTDAttList = __webpack_require__(9);

  XMLDTDElement = __webpack_require__(11);

  XMLDTDEntity = __webpack_require__(10);

  XMLDTDNotation = __webpack_require__(12);

  XMLWriterBase = __webpack_require__(34);

  module.exports = XMLStringWriter = (function(superClass) {
    extend(XMLStringWriter, superClass);

    function XMLStringWriter(options) {
      XMLStringWriter.__super__.constructor.call(this, options);
    }

    XMLStringWriter.prototype.document = function(doc) {
      var child, i, len, r, ref;
      this.textispresent = false;
      r = '';
      ref = doc.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        r += (function() {
          switch (false) {
            case !(child instanceof XMLDeclaration):
              return this.declaration(child);
            case !(child instanceof XMLDocType):
              return this.docType(child);
            case !(child instanceof XMLComment):
              return this.comment(child);
            case !(child instanceof XMLProcessingInstruction):
              return this.processingInstruction(child);
            default:
              return this.element(child, 0);
          }
        }).call(this);
      }
      if (this.pretty && r.slice(-this.newline.length) === this.newline) {
        r = r.slice(0, -this.newline.length);
      }
      return r;
    };

    XMLStringWriter.prototype.attribute = function(att) {
      return ' ' + att.name + '="' + att.value + '"';
    };

    XMLStringWriter.prototype.cdata = function(node, level) {
      return this.space(level) + '<![CDATA[' + node.text + ']]>' + this.newline;
    };

    XMLStringWriter.prototype.comment = function(node, level) {
      return this.space(level) + '<!-- ' + node.text + ' -->' + this.newline;
    };

    XMLStringWriter.prototype.declaration = function(node, level) {
      var r;
      r = this.space(level);
      r += '<?xml version="' + node.version + '"';
      if (node.encoding != null) {
        r += ' encoding="' + node.encoding + '"';
      }
      if (node.standalone != null) {
        r += ' standalone="' + node.standalone + '"';
      }
      r += this.spacebeforeslash + '?>';
      r += this.newline;
      return r;
    };

    XMLStringWriter.prototype.docType = function(node, level) {
      var child, i, len, r, ref;
      level || (level = 0);
      r = this.space(level);
      r += '<!DOCTYPE ' + node.root().name;
      if (node.pubID && node.sysID) {
        r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
      } else if (node.sysID) {
        r += ' SYSTEM "' + node.sysID + '"';
      }
      if (node.children.length > 0) {
        r += ' [';
        r += this.newline;
        ref = node.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          r += (function() {
            switch (false) {
              case !(child instanceof XMLDTDAttList):
                return this.dtdAttList(child, level + 1);
              case !(child instanceof XMLDTDElement):
                return this.dtdElement(child, level + 1);
              case !(child instanceof XMLDTDEntity):
                return this.dtdEntity(child, level + 1);
              case !(child instanceof XMLDTDNotation):
                return this.dtdNotation(child, level + 1);
              case !(child instanceof XMLCData):
                return this.cdata(child, level + 1);
              case !(child instanceof XMLComment):
                return this.comment(child, level + 1);
              case !(child instanceof XMLProcessingInstruction):
                return this.processingInstruction(child, level + 1);
              default:
                throw new Error("Unknown DTD node type: " + child.constructor.name);
            }
          }).call(this);
        }
        r += ']';
      }
      r += this.spacebeforeslash + '>';
      r += this.newline;
      return r;
    };

    XMLStringWriter.prototype.element = function(node, level) {
      var att, child, i, j, len, len1, name, r, ref, ref1, ref2, space, textispresentwasset;
      level || (level = 0);
      textispresentwasset = false;
      if (this.textispresent) {
        this.newline = '';
        this.pretty = false;
      } else {
        this.newline = this.newlinedefault;
        this.pretty = this.prettydefault;
      }
      space = this.space(level);
      r = '';
      r += space + '<' + node.name;
      ref = node.attributes;
      for (name in ref) {
        if (!hasProp.call(ref, name)) continue;
        att = ref[name];
        r += this.attribute(att);
      }
      if (node.children.length === 0 || node.children.every(function(e) {
        return e.value === '';
      })) {
        if (this.allowEmpty) {
          r += '></' + node.name + '>' + this.newline;
        } else {
          r += this.spacebeforeslash + '/>' + this.newline;
        }
      } else if (this.pretty && node.children.length === 1 && (node.children[0].value != null)) {
        r += '>';
        r += node.children[0].value;
        r += '</' + node.name + '>' + this.newline;
      } else {
        if (this.dontprettytextnodes) {
          ref1 = node.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            if (child.value != null) {
              this.textispresent++;
              textispresentwasset = true;
              break;
            }
          }
        }
        if (this.textispresent) {
          this.newline = '';
          this.pretty = false;
          space = this.space(level);
        }
        r += '>' + this.newline;
        ref2 = node.children;
        for (j = 0, len1 = ref2.length; j < len1; j++) {
          child = ref2[j];
          r += (function() {
            switch (false) {
              case !(child instanceof XMLCData):
                return this.cdata(child, level + 1);
              case !(child instanceof XMLComment):
                return this.comment(child, level + 1);
              case !(child instanceof XMLElement):
                return this.element(child, level + 1);
              case !(child instanceof XMLRaw):
                return this.raw(child, level + 1);
              case !(child instanceof XMLText):
                return this.text(child, level + 1);
              case !(child instanceof XMLProcessingInstruction):
                return this.processingInstruction(child, level + 1);
              default:
                throw new Error("Unknown XML node type: " + child.constructor.name);
            }
          }).call(this);
        }
        if (textispresentwasset) {
          this.textispresent--;
        }
        if (!this.textispresent) {
          this.newline = this.newlinedefault;
          this.pretty = this.prettydefault;
        }
        r += space + '</' + node.name + '>' + this.newline;
      }
      return r;
    };

    XMLStringWriter.prototype.processingInstruction = function(node, level) {
      var r;
      r = this.space(level) + '<?' + node.target;
      if (node.value) {
        r += ' ' + node.value;
      }
      r += this.spacebeforeslash + '?>' + this.newline;
      return r;
    };

    XMLStringWriter.prototype.raw = function(node, level) {
      return this.space(level) + node.value + this.newline;
    };

    XMLStringWriter.prototype.text = function(node, level) {
      return this.space(level) + node.value + this.newline;
    };

    XMLStringWriter.prototype.dtdAttList = function(node, level) {
      var r;
      r = this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType;
      if (node.defaultValueType !== '#DEFAULT') {
        r += ' ' + node.defaultValueType;
      }
      if (node.defaultValue) {
        r += ' "' + node.defaultValue + '"';
      }
      r += this.spacebeforeslash + '>' + this.newline;
      return r;
    };

    XMLStringWriter.prototype.dtdElement = function(node, level) {
      return this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value + this.spacebeforeslash + '>' + this.newline;
    };

    XMLStringWriter.prototype.dtdEntity = function(node, level) {
      var r;
      r = this.space(level) + '<!ENTITY';
      if (node.pe) {
        r += ' %';
      }
      r += ' ' + node.name;
      if (node.value) {
        r += ' "' + node.value + '"';
      } else {
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        if (node.nData) {
          r += ' NDATA ' + node.nData;
        }
      }
      r += this.spacebeforeslash + '>' + this.newline;
      return r;
    };

    XMLStringWriter.prototype.dtdNotation = function(node, level) {
      var r;
      r = this.space(level) + '<!NOTATION ' + node.name;
      if (node.pubID && node.sysID) {
        r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
      } else if (node.pubID) {
        r += ' PUBLIC "' + node.pubID + '"';
      } else if (node.sysID) {
        r += ' SYSTEM "' + node.sysID + '"';
      }
      r += this.spacebeforeslash + '>' + this.newline;
      return r;
    };

    XMLStringWriter.prototype.openNode = function(node, level) {
      var att, name, r, ref;
      level || (level = 0);
      if (node instanceof XMLElement) {
        r = this.space(level) + '<' + node.name;
        ref = node.attributes;
        for (name in ref) {
          if (!hasProp.call(ref, name)) continue;
          att = ref[name];
          r += this.attribute(att);
        }
        r += (node.children ? '>' : '/>') + this.newline;
        return r;
      } else {
        r = this.space(level) + '<!DOCTYPE ' + node.rootNodeName;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        r += (node.children ? ' [' : '>') + this.newline;
        return r;
      }
    };

    XMLStringWriter.prototype.closeNode = function(node, level) {
      level || (level = 0);
      switch (false) {
        case !(node instanceof XMLElement):
          return this.space(level) + '</' + node.name + '>' + this.newline;
        case !(node instanceof XMLDocType):
          return this.space(level) + ']>' + this.newline;
      }
    };

    return XMLStringWriter;

  })(XMLWriterBase);

}).call(this);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var url = __webpack_require__(19);
var assert = __webpack_require__(49);
var http = __webpack_require__(24);
var https = __webpack_require__(25);
var Writable = __webpack_require__(50).Writable;
var debug = __webpack_require__(51)('follow-redirects');

var nativeProtocols = {'http:': http, 'https:': https};
var schemes = {};
var exports = module.exports = {
	maxRedirects: 21
};
// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var safeMethods = {GET: true, HEAD: true, OPTIONS: true, TRACE: true};

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
['abort', 'aborted', 'error', 'socket'].forEach(function (event) {
	eventHandlers[event] = function (arg) {
		this._redirectable.emit(event, arg);
	};
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
	// Initialize the request
	Writable.call(this);
	this._options = options;
	this._redirectCount = 0;
	this._bufferedWrites = [];

	// Attach a callback if passed
	if (responseCallback) {
		this.on('response', responseCallback);
	}

	// React to responses of native requests
	var self = this;
	this._onNativeResponse = function (response) {
		self._processResponse(response);
	};

	// Complete the URL object when necessary
	if (!options.pathname && options.path) {
		var searchPos = options.path.indexOf('?');
		if (searchPos < 0) {
			options.pathname = options.path;
		} else {
			options.pathname = options.path.substring(0, searchPos);
			options.search = options.path.substring(searchPos);
		}
	}

	// Perform the first request
	this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
	// If specified, use the agent corresponding to the protocol
	// (HTTP and HTTPS use different types of agents)
	var protocol = this._options.protocol;
	if (this._options.agents) {
		this._options.agent = this._options.agents[schemes[protocol]];
	}

	// Create the native request
	var nativeProtocol = nativeProtocols[protocol];
	var request = this._currentRequest =
				nativeProtocol.request(this._options, this._onNativeResponse);
	this._currentUrl = url.format(this._options);

	// Set up event handlers
	request._redirectable = this;
	for (var event in eventHandlers) {
		/* istanbul ignore else */
		if (event) {
			request.on(event, eventHandlers[event]);
		}
	}

	// End a redirected request
	// (The first request must be ended explicitly with RedirectableRequest#end)
	if (this._isRedirect) {
		// If the request doesn't have en entity, end directly.
		var bufferedWrites = this._bufferedWrites;
		if (bufferedWrites.length === 0) {
			request.end();
		// Otherwise, write the request entity and end afterwards.
		} else {
			var i = 0;
			(function writeNext() {
				if (i < bufferedWrites.length) {
					var bufferedWrite = bufferedWrites[i++];
					request.write(bufferedWrite.data, bufferedWrite.encoding, writeNext);
				} else {
					request.end();
				}
			})();
		}
	}
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
	// RFC7231§6.4: The 3xx (Redirection) class of status code indicates
	// that further action needs to be taken by the user agent in order to
	// fulfill the request. If a Location header field is provided,
	// the user agent MAY automatically redirect its request to the URI
	// referenced by the Location field value,
	// even if the specific status code is not understood.
	var location = response.headers.location;
	if (location && this._options.followRedirects !== false &&
			response.statusCode >= 300 && response.statusCode < 400) {
		// RFC7231§6.4: A client SHOULD detect and intervene
		// in cyclical redirections (i.e., "infinite" redirection loops).
		if (++this._redirectCount > this._options.maxRedirects) {
			return this.emit('error', new Error('Max redirects exceeded.'));
		}

		// RFC7231§6.4: Automatic redirection needs to done with
		// care for methods not known to be safe […],
		// since the user might not wish to redirect an unsafe request.
		// RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
		// that the target resource resides temporarily under a different URI
		// and the user agent MUST NOT change the request method
		// if it performs an automatic redirection to that URI.
		var header;
		var headers = this._options.headers;
		if (response.statusCode !== 307 && !(this._options.method in safeMethods)) {
			this._options.method = 'GET';
			// Drop a possible entity and headers related to it
			this._bufferedWrites = [];
			for (header in headers) {
				if (/^content-/i.test(header)) {
					delete headers[header];
				}
			}
		}

		// Drop the Host header, as the redirect might lead to a different host
		if (!this._isRedirect) {
			for (header in headers) {
				if (/^host$/i.test(header)) {
					delete headers[header];
				}
			}
		}

		// Perform the redirected request
		var redirectUrl = url.resolve(this._currentUrl, location);
		debug('redirecting to', redirectUrl);
		Object.assign(this._options, url.parse(redirectUrl));
		this._isRedirect = true;
		this._performRequest();
	} else {
		// The response is not a redirect; return it as-is
		response.responseUrl = this._currentUrl;
		this.emit('response', response);

		// Clean up
		delete this._options;
		delete this._bufferedWrites;
	}
};

// Aborts the current native request
RedirectableRequest.prototype.abort = function () {
	this._currentRequest.abort();
};

// Flushes the headers of the current native request
RedirectableRequest.prototype.flushHeaders = function () {
	this._currentRequest.flushHeaders();
};

// Sets the noDelay option of the current native request
RedirectableRequest.prototype.setNoDelay = function (noDelay) {
	this._currentRequest.setNoDelay(noDelay);
};

// Sets the socketKeepAlive option of the current native request
RedirectableRequest.prototype.setSocketKeepAlive = function (enable, initialDelay) {
	this._currentRequest.setSocketKeepAlive(enable, initialDelay);
};

// Sets the timeout option of the current native request
RedirectableRequest.prototype.setTimeout = function (timeout, callback) {
	this._currentRequest.setTimeout(timeout, callback);
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
	this._currentRequest.write(data, encoding, callback);
	this._bufferedWrites.push({data: data, encoding: encoding});
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
	this._currentRequest.end(data, encoding, callback);
	if (data) {
		this._bufferedWrites.push({data: data, encoding: encoding});
	}
};

// Export a redirecting wrapper for each native protocol
Object.keys(nativeProtocols).forEach(function (protocol) {
	var scheme = schemes[protocol] = protocol.substr(0, protocol.length - 1);
	var nativeProtocol = nativeProtocols[protocol];
	var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

	// Executes an HTTP request, following redirects
	wrappedProtocol.request = function (options, callback) {
		if (typeof options === 'string') {
			options = url.parse(options);
			options.maxRedirects = exports.maxRedirects;
		} else {
			options = Object.assign({
				maxRedirects: exports.maxRedirects,
				protocol: protocol
			}, options);
		}
		assert.equal(options.protocol, protocol, 'protocol mismatch');
		debug('options', options);

		return new RedirectableRequest(options, callback);
	};

	// Executes a GET request, following redirects
	wrappedProtocol.get = function (options, callback) {
		var request = wrappedProtocol.request(options, callback);
		request.end();
		return request;
	};
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(53);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = CookieJar;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const processFn = (fn, opts) => function () {
	const P = opts.promiseModule;
	const args = new Array(arguments.length);

	for (let i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
	}

	return new P((resolve, reject) => {
		if (opts.errorFirst) {
			args.push(function (err, result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 1; i < arguments.length; i++) {
						results[i - 1] = arguments[i];
					}

					if (err) {
						results.unshift(err);
						reject(results);
					} else {
						resolve(results);
					}
				} else if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		} else {
			args.push(function (result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 0; i < arguments.length; i++) {
						results[i] = arguments[i];
					}

					resolve(results);
				} else {
					resolve(result);
				}
			});
		}

		fn.apply(this, args);
	});
};

module.exports = (obj, opts) => {
	opts = Object.assign({
		exclude: [/.+(Sync|Stream)$/],
		errorFirst: true,
		promiseModule: Promise
	}, opts);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
		return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
	};

	let ret;
	if (typeof obj === 'function') {
		ret = function () {
			if (opts.excludeMain) {
				return obj.apply(this, arguments);
			}

			return processFn(obj, opts).apply(this, arguments);
		};
	} else {
		ret = Object.create(Object.getPrototypeOf(obj));
	}

	for (const key in obj) { // eslint-disable-line guard-for-in
		const x = obj[key];
		ret[key] = typeof x === 'function' && filter(key) ? processFn(x, opts) : x;
	}

	return ret;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLAttribute;

  module.exports = XMLAttribute = (function() {
    function XMLAttribute(parent, name, value) {
      this.options = parent.options;
      this.stringify = parent.stringify;
      if (name == null) {
        throw new Error("Missing attribute name of element " + parent.name);
      }
      if (value == null) {
        throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
      }
      this.name = this.stringify.attName(name);
      this.value = this.stringify.attValue(value);
    }

    XMLAttribute.prototype.clone = function() {
      return Object.create(this);
    };

    XMLAttribute.prototype.toString = function(options) {
      return this.options.writer.set(options).attribute(this);
    };

    return XMLAttribute;

  })();

}).call(this);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLStringifier,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    hasProp = {}.hasOwnProperty;

  module.exports = XMLStringifier = (function() {
    function XMLStringifier(options) {
      this.assertLegalChar = bind(this.assertLegalChar, this);
      var key, ref, value;
      options || (options = {});
      this.noDoubleEncoding = options.noDoubleEncoding;
      ref = options.stringify || {};
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this[key] = value;
      }
    }

    XMLStringifier.prototype.eleName = function(val) {
      val = '' + val || '';
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.eleText = function(val) {
      val = '' + val || '';
      return this.assertLegalChar(this.elEscape(val));
    };

    XMLStringifier.prototype.cdata = function(val) {
      val = '' + val || '';
      val = val.replace(']]>', ']]]]><![CDATA[>');
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.comment = function(val) {
      val = '' + val || '';
      if (val.match(/--/)) {
        throw new Error("Comment text cannot contain double-hypen: " + val);
      }
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.raw = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.attName = function(val) {
      return val = '' + val || '';
    };

    XMLStringifier.prototype.attValue = function(val) {
      val = '' + val || '';
      return this.attEscape(val);
    };

    XMLStringifier.prototype.insTarget = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.insValue = function(val) {
      val = '' + val || '';
      if (val.match(/\?>/)) {
        throw new Error("Invalid processing instruction value: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlVersion = function(val) {
      val = '' + val || '';
      if (!val.match(/1\.[0-9]+/)) {
        throw new Error("Invalid version number: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlEncoding = function(val) {
      val = '' + val || '';
      if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)) {
        throw new Error("Invalid encoding: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlStandalone = function(val) {
      if (val) {
        return "yes";
      } else {
        return "no";
      }
    };

    XMLStringifier.prototype.dtdPubID = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdSysID = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdElementValue = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdAttType = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdAttDefault = function(val) {
      if (val != null) {
        return '' + val || '';
      } else {
        return val;
      }
    };

    XMLStringifier.prototype.dtdEntityValue = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdNData = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.convertAttKey = '@';

    XMLStringifier.prototype.convertPIKey = '?';

    XMLStringifier.prototype.convertTextKey = '#text';

    XMLStringifier.prototype.convertCDataKey = '#cdata';

    XMLStringifier.prototype.convertCommentKey = '#comment';

    XMLStringifier.prototype.convertRawKey = '#raw';

    XMLStringifier.prototype.assertLegalChar = function(str) {
      var res;
      res = str.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);
      if (res) {
        throw new Error("Invalid character in string: " + str + " at index " + res.index);
      }
      return str;
    };

    XMLStringifier.prototype.elEscape = function(str) {
      var ampregex;
      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
    };

    XMLStringifier.prototype.attEscape = function(str) {
      var ampregex;
      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
    };

    return XMLStringifier;

  })();

}).call(this);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLWriterBase,
    hasProp = {}.hasOwnProperty;

  module.exports = XMLWriterBase = (function() {
    function XMLWriterBase(options) {
      var key, ref, ref1, ref2, ref3, ref4, ref5, ref6, value;
      options || (options = {});
      this.pretty = options.pretty || false;
      this.allowEmpty = (ref = options.allowEmpty) != null ? ref : false;
      if (this.pretty) {
        this.indent = (ref1 = options.indent) != null ? ref1 : '  ';
        this.newline = (ref2 = options.newline) != null ? ref2 : '\n';
        this.offset = (ref3 = options.offset) != null ? ref3 : 0;
        this.dontprettytextnodes = (ref4 = options.dontprettytextnodes) != null ? ref4 : 0;
      } else {
        this.indent = '';
        this.newline = '';
        this.offset = 0;
        this.dontprettytextnodes = 0;
      }
      this.spacebeforeslash = (ref5 = options.spacebeforeslash) != null ? ref5 : '';
      if (this.spacebeforeslash === true) {
        this.spacebeforeslash = ' ';
      }
      this.newlinedefault = this.newline;
      this.prettydefault = this.pretty;
      ref6 = options.writer || {};
      for (key in ref6) {
        if (!hasProp.call(ref6, key)) continue;
        value = ref6[key];
        this[key] = value;
      }
    }

    XMLWriterBase.prototype.set = function(options) {
      var key, ref, value;
      options || (options = {});
      if ("pretty" in options) {
        this.pretty = options.pretty;
      }
      if ("allowEmpty" in options) {
        this.allowEmpty = options.allowEmpty;
      }
      if (this.pretty) {
        this.indent = "indent" in options ? options.indent : '  ';
        this.newline = "newline" in options ? options.newline : '\n';
        this.offset = "offset" in options ? options.offset : 0;
        this.dontprettytextnodes = "dontprettytextnodes" in options ? options.dontprettytextnodes : 0;
      } else {
        this.indent = '';
        this.newline = '';
        this.offset = 0;
        this.dontprettytextnodes = 0;
      }
      this.spacebeforeslash = "spacebeforeslash" in options ? options.spacebeforeslash : '';
      if (this.spacebeforeslash === true) {
        this.spacebeforeslash = ' ';
      }
      this.newlinedefault = this.newline;
      this.prettydefault = this.pretty;
      ref = options.writer || {};
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this[key] = value;
      }
      return this;
    };

    XMLWriterBase.prototype.space = function(level) {
      var indent;
      if (this.pretty) {
        indent = (level || 0) + this.offset + 1;
        if (indent > 0) {
          return new Array(indent).join(this.indent);
        } else {
          return '';
        }
      } else {
        return '';
      }
    };

    return XMLWriterBase;

  })();

}).call(this);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var XmlMethodCall_1 = __webpack_require__(36);
exports.default = XmlMethodCall_1.default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Connection_1 = __webpack_require__(37);
var Session_1 = __webpack_require__(71);
var Data_1 = __webpack_require__(76);
var Admin_1 = __webpack_require__(77);
var Helpdesk_1 = __webpack_require__(78);
var Knowledgebase_1 = __webpack_require__(79);
var Mylibrary_1 = __webpack_require__(80);
var Reporting_1 = __webpack_require__(81);
var Selfservice_1 = __webpack_require__(82);
var Survey_1 = __webpack_require__(83);
var System_1 = __webpack_require__(84);
var URL = __webpack_require__(85);

var XmlMethodCall = function XmlMethodCall() {
    var server = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localhost';
    var port = arguments[1];
    var opts = arguments[2];

    _classCallCheck(this, XmlMethodCall);

    if (server.match(/^(http:\/\/)/)) {
        server = URL(server).host;
        port = 80;
    } else {
        port = server.match(/^(https:\/\/)/) ? 443 : port || 5015;
        server = port === 443 ? URL(server).host : server;
    }
    var defaultOpts = {
        data: {
            formatValues: true
        }
    };
    this.connection = new Connection_1.Connection(server, port);
    this.session = new Session_1.Session(this.connection, this);
    this.data = new Data_1.Data(this.connection, this);
    this.admin = new Admin_1.Admin(this.connection, this);
    this.helpdesk = new Helpdesk_1.Helpdesk(this.connection, this);
    this.knowledgebase = new Knowledgebase_1.Knowledgebase(this.connection, this);
    this.myLibrary = new Mylibrary_1.Mylibrary(this.connection, this);
    this.reporting = new Reporting_1.Reporting(this.connection, this);
    this.selfservice = new Selfservice_1.Selfservice(this.connection, this);
    this.survey = new Survey_1.Survey(this.connection, this);
    this.system = new System_1.System(this.connection, this);
    this.opts = Object.assign({}, defaultOpts, opts);
};

exports.default = XmlMethodCall;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(38);
var tough_cookie_1 = __webpack_require__(30);
var axiosCookieJarSupport = __webpack_require__(68);

var Connection = function () {
    /**
     * Create a connection. Defers to the private _connect method.
     * @param {string} server - IP or FQDN to send the requests to
     * @param {number} port - Port to use when sending the requests. For https use 443. Defaults to 5015.
     */
    function Connection() {
        var server = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localhost';
        var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5015;

        _classCallCheck(this, Connection);

        this.server = server;
        this.port = port;
        this.https = false;
        this._setupCookieJar(new tough_cookie_1.CookieJar(), axiosCookieJarSupport);
    }
    /**
     * private connect method. Responsible for inferring https.
     * Creates an instance of axios to use to send requests to and from the server.
     * @param server
     * @param port
     * @returns {*}
     * @private
     */


    _createClass(Connection, [{
        key: "_connect",
        value: function _connect(server, port) {
            var url = void 0;
            switch (port) {
                case 443:
                    this.https = true;
                    url = "https://" + server + "/sw/";
                    break;
                case 80:
                    url = "http://" + server + "/sw/";
                    break;
                default:
                    url = "http://" + server + ":" + port;
            }
            this.endpoint = axios_1.default.create({
                baseURL: url,
                withCredentials: true,
                headers: {
                    "Content-Type": "text/xmlmc",
                    "Charset": "UTF-8",
                    "Accept": "text/json",
                    "Accept-Charset": "UTF-8",
                    "Cache-Control": "no-cache"
                },
                transformResponse: transformResponse
            });
        }
        /**
         * @param xmlmc
         * @returns {Promise.<Response>}
         * @throws Module importing error. Occurs if for some reason we were unable to require the underlying modules. Indicates a problem with the library, not the developer.
         */

    }, {
        key: "sendRequest",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(xmlmc) {
                var _this = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", new Promise(function (resolve, reject) {
                                    var post = _this.port === 80 || _this.https ? '/xmlmc/' : '/sw';
                                    _this.endpoint.post(post, xmlmc.toString(), { withCredentials: true }).then(function (response) {
                                        response.data.status ? resolve(response.data) : reject(response.data);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                }));

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function sendRequest(_x3) {
                return _ref.apply(this, arguments);
            }

            return sendRequest;
        }()
    }, {
        key: "_setupCookieJar",
        value: function _setupCookieJar(jar, axiosCookieJar) {
            axiosCookieJar(axios_1.default);
            // create the cookie jar we will use
            this.cookieJar = jar;
            // create an instnace of axios
            this._connect(this.server, this.port);
            // tell the instance to use the cookie jar
            this.endpoint.defaults.jar = this.cookieJar;
            // Automatically send the cookie with each request
            this.endpoint.defaults.withCredentials = true;
            var endpoint = this.endpoint;
            var defaultConfig = endpoint.defaults;
            // Pass the entire URL including the base URL with each post
            // todo: May not be neccessary, but could be good to do the same for get method as well.
            endpoint['post'] = function (url, data, config) {
                var requestConfig = Object.assign(config || {}, {
                    method: 'POST',
                    url: url.match(/^(\/)\w+/) ? defaultConfig.baseURL ? defaultConfig.baseURL + url : url : url === "" ? defaultConfig.baseURL || url : url,
                    data: data
                });
                return endpoint.request(requestConfig);
            };
        }
    }]);

    return Connection;
}();

exports.Connection = Connection;
function transformResponse(response) {
    var parsedResponse = JSON.parse(response);

    var _parsedResponse = parsedResponse,
        status = _parsedResponse['@status'],
        data = _parsedResponse.data,
        rest = _objectWithoutProperties(_parsedResponse, ['@status', "data"]);

    parsedResponse = Object.assign({ status: status, params: {}, data: [] }, rest);
    data = isIterable(data) && data;
    if (data) {
        parsedResponse.data = handleDataParam(data);
        if (data.hasOwnProperty('metaData')) {
            parsedResponse.params.metadata = data.metaData;
        }
        if (data.hasOwnProperty('generatedId')) {
            parsedResponse.params.generatedId = data.generatedId;
        }
    }
    return parsedResponse;
}
function handleDataParam(data) {
    if (Array.isArray(data)) {
        return data;
    }
    if (data.hasOwnProperty('rowData')) {
        return Array.isArray(data.rowData.row) && data.rowData.row || [data.rowData.row];
    }
}
function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return Object(obj) === obj || typeof obj[Symbol.iterator] === 'function';
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(21);
var Axios = __webpack_require__(41);
var defaults = __webpack_require__(16);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(29);
axios.CancelToken = __webpack_require__(66);
axios.isCancel = __webpack_require__(28);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(67);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(16);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(61);
var dispatchRequest = __webpack_require__(62);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(17);
var buildURL = __webpack_require__(23);
var parseHeaders = __webpack_require__(44);
var isURLSameOrigin = __webpack_require__(45);
var createError = __webpack_require__(18);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(46);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (!window.XMLHttpRequest &&
        process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(47);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(17);
var buildURL = __webpack_require__(23);
var http = __webpack_require__(24);
var https = __webpack_require__(25);
var httpFollow = __webpack_require__(26).http;
var httpsFollow = __webpack_require__(26).https;
var url = __webpack_require__(19);
var zlib = __webpack_require__(59);
var pkg = __webpack_require__(60);
var createError = __webpack_require__(18);
var enhanceError = __webpack_require__(22);

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolve, reject) {
    var data = config.data;
    var headers = config.headers;
    var timer;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = new Buffer(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = new Buffer(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var parsed = url.parse(config.url);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttps = protocol === 'https:';
    var agent = isHttps ? config.httpsAgent : config.httpAgent;

    var options = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method,
      headers: headers,
      agent: agent,
      auth: auth
    };

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        proxy = {
          host: parsedProxyUrl.hostname,
          port: parsedProxyUrl.port
        };

        if (parsedProxyUrl.auth) {
          var proxyUrlAuth = parsedProxyUrl.auth.split(':');
          proxy.auth = {
            username: proxyUrlAuth[0],
            password: proxyUrlAuth[1]
          };
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = new Buffer(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    if (config.maxRedirects === 0) {
      transport = isHttps ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttps ? httpsFollow : httpFollow;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // Response has been received so kill timer that handles request timeout
      clearTimeout(timer);
      timer = null;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
      /*eslint default-case:0*/
      case 'gzip':
      case 'compress':
      case 'deflate':
        // add the unzipper to the body stream processing pipeline
        stream = stream.pipe(zlib.createUnzip());

        // remove the content-encoding in order to not confuse downstream operations
        delete res.headers['content-encoding'];
        break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString('utf8');
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout && !timer) {
      timer = setTimeout(function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      }, config.timeout);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__(52);
} else {
  module.exports = __webpack_require__(54);
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(27);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(55);
var util = __webpack_require__(56);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(27);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()
}

var stream = 1 === fd ? process.stdout :
             2 === fd ? process.stderr :
             createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString()
      + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream (fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__(57);
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(58);
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {"name":"axios","version":"0.17.0","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test && bundlesize","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://github.com/axios/axios","devDependencies":{"bundlesize":"^0.5.7","coveralls":"^2.11.9","es6-promise":"^4.0.5","grunt":"^1.0.1","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.0.0","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^19.0.0","grunt-karma":"^2.0.0","grunt-ts":"^6.0.0-beta.3","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.0.0","karma-firefox-launcher":"^1.0.0","karma-jasmine":"^1.0.2","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-phantomjs-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","phantomjs-prebuilt":"^2.1.7","sinon":"^1.17.4","webpack":"^1.13.1","webpack-dev-server":"^1.14.1","url-search-params":"^0.6.1","typescript":"^2.0.3"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.2.3","is-buffer":"^1.1.5"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(63);
var isCancel = __webpack_require__(28);
var defaults = __webpack_require__(16);
var isAbsoluteURL = __webpack_require__(64);
var combineURLs = __webpack_require__(65);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(29);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const tough = __webpack_require__(30);
const utils = __webpack_require__(0);
const requestInterceptorWrapper = __webpack_require__(69);
const responseInterceptorWrapper = __webpack_require__(70);

function axiosCookieJarSupport (instance) {
  if (instance.create) {
    const createInstance = instance.create.bind(instance);
    instance.create = function create (defaultConfig) {
      const newInstance = createInstance(defaultConfig);
      return axiosCookieJarSupport(newInstance);
    };
  }

  const origRequest = instance.request.bind(instance);
  instance.request = function request (config) {
    config._COOKIEJAR_SUPPORT_LOCAL =
      config._COOKIEJAR_SUPPORT_LOCAL || {};
    const local = config._COOKIEJAR_SUPPORT_LOCAL;

    if (instance.defaults.jar === true) {
      instance.defaults.jar = new tough.CookieJar();
    }
    if (!local.jar) {
      if (config.jar === true) {
        local.jar = (instance.defaults.jar || new tough.CookieJar());
      } else if (config.jar === false) {
        local.jar = false;
      } else {
        local.jar = (config.jar || instance.defaults.jar);
      }
    }

    return origRequest(config);
  };

  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData (method) {
    instance[method] = function (url, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url
      }));
    };
  });

  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData (method) {
    instance[method] = function (url, data, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });

  requestInterceptorWrapper(instance);
  responseInterceptorWrapper(instance);

  return instance;
}

module.exports = axiosCookieJarSupport;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const pify = __webpack_require__(31);

function requestInterceptorResolve (config) {
  return Promise.resolve(config)
  .then(function backupOriginalConfigs (config) {
    const local = config._COOKIEJAR_SUPPORT_LOCAL;
    local.backupOptions = local.backupOptions || {};
    return config;
  })
  .then(function redirectSetup (config) {
    const local = config._COOKIEJAR_SUPPORT_LOCAL;

    local.redirectCount =
      isFinite(config.maxRedirects) ? config.maxRedirects : 5;

    local.backupOptions.maxRedirects =
      local.backupOptions.maxRedirects || config.maxRedirects;

    local.backupOptions.validateStatus =
      local.backupOptions.validateStatus || config.validateStatus;

    config.maxRedirects = 0;
    config.validateStatus = undefined;

    return config;
  })
  .then(function cookieSetup (config) {
    const local = config._COOKIEJAR_SUPPORT_LOCAL;

    if (local.jar && config.withCredentials) {
      const getCookieString =
        pify(local.jar.getCookieString.bind(local.jar));

      return getCookieString(config.url)
        .then(function (cookieString) {
          if (!cookieString) {
            return;
          }
          config.headers['Cookie'] =
            (config.headers['Cookie'])
            ? cookieString + '; ' + config.headers['Cookie']
            : cookieString;
        }).then(function () { return config; });
    }

    return config;
  });
};

function requestInterceptorReject (error) {
  return Promise.reject(error);
};

function requestInterceptorWrapper (instance) {
  instance.interceptors.request.use(
    requestInterceptorResolve,
    requestInterceptorReject
  );
  return instance;
}

module.exports = requestInterceptorWrapper;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const url = __webpack_require__(19);
const settle = __webpack_require__(17);
const pify = __webpack_require__(31);

function responseInterceptorResolve (response, instance) {
  return Promise.resolve(response)
  .then(function setCookies (response) {
    const config = response.config;
    const local = config._COOKIEJAR_SUPPORT_LOCAL;

    if (!local.jar || !response.headers['set-cookie']) {
      return response;
    }

    const setCookie = pify(local.jar.setCookie.bind(local.jar));
    const setCookiePromiseList = [];

    if (Array.isArray(response.headers['set-cookie'])) {
      const cookies = response.headers['set-cookie'];
      cookies.forEach(function (cookie) {
        setCookiePromiseList.push(setCookie(cookie, config.url));
      });
    } else {
      const cookie = response.headers['set-cookie'];
      setCookiePromiseList.push(setCookie(cookie, config.url));
    }

    return Promise.all(setCookiePromiseList)
      .then(function () { return response; });
  })
  .then(function redirectSetup (response) {
    const config = response.config;
    const local = config._COOKIEJAR_SUPPORT_LOCAL;

    local.backupOptions.baseURL =
      local.backupOptions.baseURL || config.baseURL;
    local.backupOptions.url =
      local.backupOptions.url || config.url;
    local.backupOptions.method =
      local.backupOptions.method || config.method;

    config.baseURL = undefined;
    config.url = config.url = url.resolve(response.config.url, response.headers['location'] || '');

    local.redirectCount--;

    return response;
  })
  .then(function redirect (response) {
    const config = response.config;
    const local = config._COOKIEJAR_SUPPORT_LOCAL;

    if (local.redirectCount < 0 || !response.headers['location']) {
      return response;
    }
    if (response.status !== 307) {
      config.method = 'get';
    }

    config.maxRedirects = local.redirectCount;
    return instance.request(config);
  })
  .then(function restoreCookieJar (response) {
    const config = response.config;
    const local = config._COOKIEJAR_SUPPORT_LOCAL;
    if (!local || !local.jar) return response;

    if (instance.defaults.jar && (!config.jar || config.jar === true)) {
      instance.defaults.jar = local.jar;
    }
    config.jar = local.jar;

    return response;
  })
  .then(function restoreConfigs (response) {
    const config = response.config;
    const local = config._COOKIEJAR_SUPPORT_LOCAL;
    if (!local) return response;

    for (let key in local.backupOptions) {
      config[key] = local.backupOptions[key];
    }

    return response;
  })
  .then(function deleteLocals (response) {
    delete response.config._COOKIEJAR_SUPPORT_LOCAL;
    return response;
  })
  .then(function validate (response) {
    return new Promise(function (resolve, reject) {
      settle(resolve, reject, response);
    });
  });
}

function responseInterceptorReject (error) {
  return Promise.reject(error);
}

function responseInterceptorWrapper (instance) {
  instance.interceptors.response.use(
    function (response) {
      return responseInterceptorResolve(response, instance);
    },
    responseInterceptorReject
  );
  return instance;
}

module.exports = responseInterceptorWrapper;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var Session = function () {
    function Session(connection, xmlmc) {
        _classCallCheck(this, Session);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'session';
        this.paramMap = new Map([['analystLogoff', ['sessionId']], ['analystLogon', ['userId', 'password']], ['analystLogonTrust', ['userId', 'secretKey']], ['bindSession', ['sessionId']], ['changePassword', ['oldPassword', 'newPassword']], ['convertDateTimeInText', ['inputText']], ['getSessionInfo', ['sessionId']], ['getSessionInfo2', ['sessionId']], ['hasRight', ['userRight']], ['isSessionValid', ['sessionId']], ['lockCustomerAccount', ['selfServiceInstance', 'customerId', 'permanent', 'duration']], ['selfServiceLogon', ['selfServiceInstance', 'customerId', 'password']], ['setDatabaseRight', ['tableName', 'rightFlag', 'rightAllowed']], ['setOutputValidation', ['validateResultMessage']], ['setUserRight', ['rightClass', 'rightFlag', 'rightAllowed']], ['setVariable', ['sessionVariable']], ['switchAnalystContext', ['groupId', 'analystId']], ['unlockCustomerAccount', ['selfServiceInstance', 'customerId']]]);
    }

    _createClass(Session, [{
        key: "analystLogoff",
        value: function analystLogoff(optionalParams) {
            var request = new Request_1.Request(this.service, 'analystLogoff', optionalParams || {}, this.paramMap.get('analystLogoff') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "analystLogon",
        value: function analystLogon(userId, password, optionalParams) {
            var request = new Request_1.Request(this.service, 'analystLogon', Object.assign({}, {
                userId: userId,
                password: password
            }, optionalParams || {}), this.paramMap.get('analystLogon') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "analystLogonTrust",
        value: function analystLogonTrust(userId, secretKey, optionalParams) {
            var request = new Request_1.Request(this.service, 'analystLogonTrust', Object.assign({}, {
                userId: userId,
                secretKey: secretKey
            }, optionalParams || {}), this.paramMap.get('analystLogonTrust') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "bindSession",
        value: function bindSession(sessionId, optionalParams) {
            var request = new Request_1.Request(this.service, 'bindSession', Object.assign({}, { sessionId: sessionId }, optionalParams || {}), this.paramMap.get('bindSession') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "changePassword",
        value: function changePassword(oldPassword, newPassword, optionalParams) {
            var request = new Request_1.Request(this.service, 'changePassword', Object.assign({}, {
                oldPassword: oldPassword,
                newPassword: newPassword
            }, optionalParams || {}), this.paramMap.get('changePassword') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "closeLocalSession",
        value: function closeLocalSession(optionalParams) {
            var request = new Request_1.Request(this.service, 'closeLocalSession', optionalParams || {}, this.paramMap.get('closeLocalSession') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "convertDateTimeInText",
        value: function convertDateTimeInText(inputText, optionalParams) {
            var request = new Request_1.Request(this.service, 'convertDateTimeInText', Object.assign({}, { inputText: inputText }, optionalParams || {}), this.paramMap.get('convertDateTimeInText') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "createLocalSession",
        value: function createLocalSession(optionalParams) {
            var request = new Request_1.Request(this.service, 'createLocalSession', optionalParams || {}, this.paramMap.get('createLocalSession') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getSessionDDInfo",
        value: function getSessionDDInfo(optionalParams) {
            var request = new Request_1.Request(this.service, 'getSessionDDInfo', optionalParams || {}, this.paramMap.get('getSessionDDInfo') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getSessionInfo",
        value: function getSessionInfo(optionalParams) {
            var request = new Request_1.Request(this.service, 'getSessionInfo', optionalParams || {}, this.paramMap.get('getSessionInfo') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getSessionInfo2",
        value: function getSessionInfo2(optionalParams) {
            var request = new Request_1.Request(this.service, 'getSessionInfo2', optionalParams || {}, this.paramMap.get('getSessionInfo2') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "hasRight",
        value: function hasRight(userRight, optionalParams) {
            var request = new Request_1.Request(this.service, 'hasRight', Object.assign({}, { userRight: userRight }, optionalParams || {}), this.paramMap.get('hasRight') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "isSessionValid",
        value: function isSessionValid(optionalParams) {
            var request = new Request_1.Request(this.service, 'isSessionValid', optionalParams || {}, this.paramMap.get('isSessionValid') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "lockCustomerAccount",
        value: function lockCustomerAccount(selfServiceInstance, customerId, permanent, optionalParams) {
            var request = new Request_1.Request(this.service, 'lockCustomerAccount', Object.assign({}, {
                selfServiceInstance: selfServiceInstance,
                customerId: customerId,
                permanent: permanent
            }, optionalParams || {}), this.paramMap.get('lockCustomerAccount') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "selfServiceLogoff",
        value: function selfServiceLogoff(optionalParams) {
            var request = new Request_1.Request(this.service, 'selfServiceLogoff', optionalParams || {}, this.paramMap.get('selfServiceLogoff') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "selfServiceLogon",
        value: function selfServiceLogon(selfServiceInstance, customerId, password, optionalParams) {
            var request = new Request_1.Request(this.service, 'selfServiceLogon', Object.assign({}, {
                selfServiceInstance: selfServiceInstance,
                customerId: customerId,
                password: password
            }, optionalParams || {}), this.paramMap.get('selfServiceLogon') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "setDatabaseRight",
        value: function setDatabaseRight(tableName, rightFlag, rightAllowed, optionalParams) {
            var request = new Request_1.Request(this.service, 'setDatabaseRight', Object.assign({}, {
                tableName: tableName,
                rightFlag: rightFlag,
                rightAllowed: rightAllowed
            }, optionalParams || {}), this.paramMap.get('setDatabaseRight') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "setOutputValidation",
        value: function setOutputValidation(validateResultMessage, optionalParams) {
            var request = new Request_1.Request(this.service, 'setOutputValidation', Object.assign({}, { validateResultMessage: validateResultMessage }, optionalParams || {}), this.paramMap.get('setOutputValidation') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "setUserRight",
        value: function setUserRight(rightClass, rightFlag, rightAllowed, optionalParams) {
            var request = new Request_1.Request(this.service, 'setUserRight', Object.assign({}, {
                rightClass: rightClass,
                rightFlag: rightFlag,
                rightAllowed: rightAllowed
            }, optionalParams || {}), this.paramMap.get('setUserRight') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "setVariable",
        value: function setVariable(sessionVariable, optionalParams) {
            var request = new Request_1.Request(this.service, 'setVariable', Object.assign({}, { sessionVariable: sessionVariable }, optionalParams || {}), this.paramMap.get('setVariable') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "switchAnalystContext",
        value: function switchAnalystContext(groupId, optionalParams) {
            var request = new Request_1.Request(this.service, 'switchAnalystContext', Object.assign({}, { groupId: groupId }, optionalParams || {}), this.paramMap.get('switchAnalystContext') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "unlockCustomerAccount",
        value: function unlockCustomerAccount(selfServiceInstance, customerId, optionalParams) {
            var request = new Request_1.Request(this.service, 'unlockCustomerAccount', Object.assign({}, {
                selfServiceInstance: selfServiceInstance,
                customerId: customerId
            }, optionalParams || {}), this.paramMap.get('unlockCustomerAccount') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return Session;
}();

exports.Session = Session;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;

  ref = __webpack_require__(3), assign = ref.assign, isFunction = ref.isFunction;

  XMLDocument = __webpack_require__(73);

  XMLDocumentCB = __webpack_require__(74);

  XMLStringWriter = __webpack_require__(20);

  XMLStreamWriter = __webpack_require__(75);

  module.exports.create = function(name, xmldec, doctype, options) {
    var doc, root;
    if (name == null) {
      throw new Error("Root element needs a name");
    }
    options = assign({}, xmldec, doctype, options);
    doc = new XMLDocument(options);
    root = doc.element(name);
    if (!options.headless) {
      doc.declaration(options);
      if ((options.pubID != null) || (options.sysID != null)) {
        doc.doctype(options);
      }
    }
    return root;
  };

  module.exports.begin = function(options, onData, onEnd) {
    var ref1;
    if (isFunction(options)) {
      ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
      options = {};
    }
    if (onData) {
      return new XMLDocumentCB(options, onData, onEnd);
    } else {
      return new XMLDocument(options);
    }
  };

  module.exports.stringWriter = function(options) {
    return new XMLStringWriter(options);
  };

  module.exports.streamWriter = function(stream, options) {
    return new XMLStreamWriter(stream, options);
  };

}).call(this);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isPlainObject = __webpack_require__(3).isPlainObject;

  XMLNode = __webpack_require__(1);

  XMLStringifier = __webpack_require__(33);

  XMLStringWriter = __webpack_require__(20);

  module.exports = XMLDocument = (function(superClass) {
    extend(XMLDocument, superClass);

    function XMLDocument(options) {
      XMLDocument.__super__.constructor.call(this, null);
      options || (options = {});
      if (!options.writer) {
        options.writer = new XMLStringWriter();
      }
      this.options = options;
      this.stringify = new XMLStringifier(options);
      this.isDocument = true;
    }

    XMLDocument.prototype.end = function(writer) {
      var writerOptions;
      if (!writer) {
        writer = this.options.writer;
      } else if (isPlainObject(writer)) {
        writerOptions = writer;
        writer = this.options.writer.set(writerOptions);
      }
      return writer.document(this);
    };

    XMLDocument.prototype.toString = function(options) {
      return this.options.writer.set(options).document(this);
    };

    return XMLDocument;

  })(XMLNode);

}).call(this);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, isFunction, isObject, isPlainObject, ref,
    hasProp = {}.hasOwnProperty;

  ref = __webpack_require__(3), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject;

  XMLElement = __webpack_require__(4);

  XMLCData = __webpack_require__(5);

  XMLComment = __webpack_require__(6);

  XMLRaw = __webpack_require__(13);

  XMLText = __webpack_require__(14);

  XMLProcessingInstruction = __webpack_require__(15);

  XMLDeclaration = __webpack_require__(7);

  XMLDocType = __webpack_require__(8);

  XMLDTDAttList = __webpack_require__(9);

  XMLDTDEntity = __webpack_require__(10);

  XMLDTDElement = __webpack_require__(11);

  XMLDTDNotation = __webpack_require__(12);

  XMLAttribute = __webpack_require__(32);

  XMLStringifier = __webpack_require__(33);

  XMLStringWriter = __webpack_require__(20);

  module.exports = XMLDocumentCB = (function() {
    function XMLDocumentCB(options, onData, onEnd) {
      var writerOptions;
      options || (options = {});
      if (!options.writer) {
        options.writer = new XMLStringWriter(options);
      } else if (isPlainObject(options.writer)) {
        writerOptions = options.writer;
        options.writer = new XMLStringWriter(writerOptions);
      }
      this.options = options;
      this.writer = options.writer;
      this.stringify = new XMLStringifier(options);
      this.onDataCallback = onData || function() {};
      this.onEndCallback = onEnd || function() {};
      this.currentNode = null;
      this.currentLevel = -1;
      this.openTags = {};
      this.documentStarted = false;
      this.documentCompleted = false;
      this.root = null;
    }

    XMLDocumentCB.prototype.node = function(name, attributes, text) {
      var ref1;
      if (name == null) {
        throw new Error("Missing node name");
      }
      if (this.root && this.currentLevel === -1) {
        throw new Error("Document can only have one root node");
      }
      this.openCurrent();
      name = name.valueOf();
      if (attributes == null) {
        attributes = {};
      }
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
      }
      this.currentNode = new XMLElement(this, name, attributes);
      this.currentNode.children = false;
      this.currentLevel++;
      this.openTags[this.currentLevel] = this.currentNode;
      if (text != null) {
        this.text(text);
      }
      return this;
    };

    XMLDocumentCB.prototype.element = function(name, attributes, text) {
      if (this.currentNode && this.currentNode instanceof XMLDocType) {
        return this.dtdElement.apply(this, arguments);
      } else {
        return this.node(name, attributes, text);
      }
    };

    XMLDocumentCB.prototype.attribute = function(name, value) {
      var attName, attValue;
      if (!this.currentNode || this.currentNode.children) {
        throw new Error("att() can only be used immediately after an ele() call in callback mode");
      }
      if (name != null) {
        name = name.valueOf();
      }
      if (isObject(name)) {
        for (attName in name) {
          if (!hasProp.call(name, attName)) continue;
          attValue = name[attName];
          this.attribute(attName, attValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        if (!this.options.skipNullAttributes || (value != null)) {
          this.currentNode.attributes[name] = new XMLAttribute(this, name, value);
        }
      }
      return this;
    };

    XMLDocumentCB.prototype.text = function(value) {
      var node;
      this.openCurrent();
      node = new XMLText(this, value);
      this.onData(this.writer.text(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.cdata = function(value) {
      var node;
      this.openCurrent();
      node = new XMLCData(this, value);
      this.onData(this.writer.cdata(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.comment = function(value) {
      var node;
      this.openCurrent();
      node = new XMLComment(this, value);
      this.onData(this.writer.comment(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.raw = function(value) {
      var node;
      this.openCurrent();
      node = new XMLRaw(this, value);
      this.onData(this.writer.raw(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.instruction = function(target, value) {
      var i, insTarget, insValue, len, node;
      this.openCurrent();
      if (target != null) {
        target = target.valueOf();
      }
      if (value != null) {
        value = value.valueOf();
      }
      if (Array.isArray(target)) {
        for (i = 0, len = target.length; i < len; i++) {
          insTarget = target[i];
          this.instruction(insTarget);
        }
      } else if (isObject(target)) {
        for (insTarget in target) {
          if (!hasProp.call(target, insTarget)) continue;
          insValue = target[insTarget];
          this.instruction(insTarget, insValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        node = new XMLProcessingInstruction(this, target, value);
        this.onData(this.writer.processingInstruction(node, this.currentLevel + 1));
      }
      return this;
    };

    XMLDocumentCB.prototype.declaration = function(version, encoding, standalone) {
      var node;
      this.openCurrent();
      if (this.documentStarted) {
        throw new Error("declaration() must be the first node");
      }
      node = new XMLDeclaration(this, version, encoding, standalone);
      this.onData(this.writer.declaration(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.doctype = function(root, pubID, sysID) {
      this.openCurrent();
      if (root == null) {
        throw new Error("Missing root node name");
      }
      if (this.root) {
        throw new Error("dtd() must come before the root node");
      }
      this.currentNode = new XMLDocType(this, pubID, sysID);
      this.currentNode.rootNodeName = root;
      this.currentNode.children = false;
      this.currentLevel++;
      this.openTags[this.currentLevel] = this.currentNode;
      return this;
    };

    XMLDocumentCB.prototype.dtdElement = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDElement(this, name, value);
      this.onData(this.writer.dtdElement(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      var node;
      this.openCurrent();
      node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
      this.onData(this.writer.dtdAttList(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.entity = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDEntity(this, false, name, value);
      this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.pEntity = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDEntity(this, true, name, value);
      this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.notation = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDNotation(this, name, value);
      this.onData(this.writer.dtdNotation(node, this.currentLevel + 1));
      return this;
    };

    XMLDocumentCB.prototype.up = function() {
      if (this.currentLevel < 0) {
        throw new Error("The document node has no parent");
      }
      if (this.currentNode) {
        if (this.currentNode.children) {
          this.closeNode(this.currentNode);
        } else {
          this.openNode(this.currentNode);
        }
        this.currentNode = null;
      } else {
        this.closeNode(this.openTags[this.currentLevel]);
      }
      delete this.openTags[this.currentLevel];
      this.currentLevel--;
      return this;
    };

    XMLDocumentCB.prototype.end = function() {
      while (this.currentLevel >= 0) {
        this.up();
      }
      return this.onEnd();
    };

    XMLDocumentCB.prototype.openCurrent = function() {
      if (this.currentNode) {
        this.currentNode.children = true;
        return this.openNode(this.currentNode);
      }
    };

    XMLDocumentCB.prototype.openNode = function(node) {
      if (!node.isOpen) {
        if (!this.root && this.currentLevel === 0 && node instanceof XMLElement) {
          this.root = node;
        }
        this.onData(this.writer.openNode(node, this.currentLevel));
        return node.isOpen = true;
      }
    };

    XMLDocumentCB.prototype.closeNode = function(node) {
      if (!node.isClosed) {
        this.onData(this.writer.closeNode(node, this.currentLevel));
        return node.isClosed = true;
      }
    };

    XMLDocumentCB.prototype.onData = function(chunk) {
      this.documentStarted = true;
      return this.onDataCallback(chunk);
    };

    XMLDocumentCB.prototype.onEnd = function() {
      this.documentCompleted = true;
      return this.onEndCallback();
    };

    XMLDocumentCB.prototype.ele = function() {
      return this.element.apply(this, arguments);
    };

    XMLDocumentCB.prototype.nod = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLDocumentCB.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLDocumentCB.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLDocumentCB.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLDocumentCB.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLDocumentCB.prototype.dec = function(version, encoding, standalone) {
      return this.declaration(version, encoding, standalone);
    };

    XMLDocumentCB.prototype.dtd = function(root, pubID, sysID) {
      return this.doctype(root, pubID, sysID);
    };

    XMLDocumentCB.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLDocumentCB.prototype.n = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLDocumentCB.prototype.t = function(value) {
      return this.text(value);
    };

    XMLDocumentCB.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLDocumentCB.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLDocumentCB.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLDocumentCB.prototype.i = function(target, value) {
      return this.instruction(target, value);
    };

    XMLDocumentCB.prototype.att = function() {
      if (this.currentNode && this.currentNode instanceof XMLDocType) {
        return this.attList.apply(this, arguments);
      } else {
        return this.attribute.apply(this, arguments);
      }
    };

    XMLDocumentCB.prototype.a = function() {
      if (this.currentNode && this.currentNode instanceof XMLDocType) {
        return this.attList.apply(this, arguments);
      } else {
        return this.attribute.apply(this, arguments);
      }
    };

    XMLDocumentCB.prototype.ent = function(name, value) {
      return this.entity(name, value);
    };

    XMLDocumentCB.prototype.pent = function(name, value) {
      return this.pEntity(name, value);
    };

    XMLDocumentCB.prototype.not = function(name, value) {
      return this.notation(name, value);
    };

    return XMLDocumentCB;

  })();

}).call(this);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.6
(function() {
  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStreamWriter, XMLText, XMLWriterBase,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLDeclaration = __webpack_require__(7);

  XMLDocType = __webpack_require__(8);

  XMLCData = __webpack_require__(5);

  XMLComment = __webpack_require__(6);

  XMLElement = __webpack_require__(4);

  XMLRaw = __webpack_require__(13);

  XMLText = __webpack_require__(14);

  XMLProcessingInstruction = __webpack_require__(15);

  XMLDTDAttList = __webpack_require__(9);

  XMLDTDElement = __webpack_require__(11);

  XMLDTDEntity = __webpack_require__(10);

  XMLDTDNotation = __webpack_require__(12);

  XMLWriterBase = __webpack_require__(34);

  module.exports = XMLStreamWriter = (function(superClass) {
    extend(XMLStreamWriter, superClass);

    function XMLStreamWriter(stream, options) {
      this.stream = stream;
      XMLStreamWriter.__super__.constructor.call(this, options);
    }

    XMLStreamWriter.prototype.document = function(doc) {
      var child, i, j, len, len1, ref, ref1, results;
      ref = doc.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        child.isLastRootNode = false;
      }
      doc.children[doc.children.length - 1].isLastRootNode = true;
      ref1 = doc.children;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        child = ref1[j];
        switch (false) {
          case !(child instanceof XMLDeclaration):
            results.push(this.declaration(child));
            break;
          case !(child instanceof XMLDocType):
            results.push(this.docType(child));
            break;
          case !(child instanceof XMLComment):
            results.push(this.comment(child));
            break;
          case !(child instanceof XMLProcessingInstruction):
            results.push(this.processingInstruction(child));
            break;
          default:
            results.push(this.element(child));
        }
      }
      return results;
    };

    XMLStreamWriter.prototype.attribute = function(att) {
      return this.stream.write(' ' + att.name + '="' + att.value + '"');
    };

    XMLStreamWriter.prototype.cdata = function(node, level) {
      return this.stream.write(this.space(level) + '<![CDATA[' + node.text + ']]>' + this.endline(node));
    };

    XMLStreamWriter.prototype.comment = function(node, level) {
      return this.stream.write(this.space(level) + '<!-- ' + node.text + ' -->' + this.endline(node));
    };

    XMLStreamWriter.prototype.declaration = function(node, level) {
      this.stream.write(this.space(level));
      this.stream.write('<?xml version="' + node.version + '"');
      if (node.encoding != null) {
        this.stream.write(' encoding="' + node.encoding + '"');
      }
      if (node.standalone != null) {
        this.stream.write(' standalone="' + node.standalone + '"');
      }
      this.stream.write(this.spacebeforeslash + '?>');
      return this.stream.write(this.endline(node));
    };

    XMLStreamWriter.prototype.docType = function(node, level) {
      var child, i, len, ref;
      level || (level = 0);
      this.stream.write(this.space(level));
      this.stream.write('<!DOCTYPE ' + node.root().name);
      if (node.pubID && node.sysID) {
        this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
      } else if (node.sysID) {
        this.stream.write(' SYSTEM "' + node.sysID + '"');
      }
      if (node.children.length > 0) {
        this.stream.write(' [');
        this.stream.write(this.endline(node));
        ref = node.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          switch (false) {
            case !(child instanceof XMLDTDAttList):
              this.dtdAttList(child, level + 1);
              break;
            case !(child instanceof XMLDTDElement):
              this.dtdElement(child, level + 1);
              break;
            case !(child instanceof XMLDTDEntity):
              this.dtdEntity(child, level + 1);
              break;
            case !(child instanceof XMLDTDNotation):
              this.dtdNotation(child, level + 1);
              break;
            case !(child instanceof XMLCData):
              this.cdata(child, level + 1);
              break;
            case !(child instanceof XMLComment):
              this.comment(child, level + 1);
              break;
            case !(child instanceof XMLProcessingInstruction):
              this.processingInstruction(child, level + 1);
              break;
            default:
              throw new Error("Unknown DTD node type: " + child.constructor.name);
          }
        }
        this.stream.write(']');
      }
      this.stream.write(this.spacebeforeslash + '>');
      return this.stream.write(this.endline(node));
    };

    XMLStreamWriter.prototype.element = function(node, level) {
      var att, child, i, len, name, ref, ref1, space;
      level || (level = 0);
      space = this.space(level);
      this.stream.write(space + '<' + node.name);
      ref = node.attributes;
      for (name in ref) {
        if (!hasProp.call(ref, name)) continue;
        att = ref[name];
        this.attribute(att);
      }
      if (node.children.length === 0 || node.children.every(function(e) {
        return e.value === '';
      })) {
        if (this.allowEmpty) {
          this.stream.write('></' + node.name + '>');
        } else {
          this.stream.write(this.spacebeforeslash + '/>');
        }
      } else if (this.pretty && node.children.length === 1 && (node.children[0].value != null)) {
        this.stream.write('>');
        this.stream.write(node.children[0].value);
        this.stream.write('</' + node.name + '>');
      } else {
        this.stream.write('>' + this.newline);
        ref1 = node.children;
        for (i = 0, len = ref1.length; i < len; i++) {
          child = ref1[i];
          switch (false) {
            case !(child instanceof XMLCData):
              this.cdata(child, level + 1);
              break;
            case !(child instanceof XMLComment):
              this.comment(child, level + 1);
              break;
            case !(child instanceof XMLElement):
              this.element(child, level + 1);
              break;
            case !(child instanceof XMLRaw):
              this.raw(child, level + 1);
              break;
            case !(child instanceof XMLText):
              this.text(child, level + 1);
              break;
            case !(child instanceof XMLProcessingInstruction):
              this.processingInstruction(child, level + 1);
              break;
            default:
              throw new Error("Unknown XML node type: " + child.constructor.name);
          }
        }
        this.stream.write(space + '</' + node.name + '>');
      }
      return this.stream.write(this.endline(node));
    };

    XMLStreamWriter.prototype.processingInstruction = function(node, level) {
      this.stream.write(this.space(level) + '<?' + node.target);
      if (node.value) {
        this.stream.write(' ' + node.value);
      }
      return this.stream.write(this.spacebeforeslash + '?>' + this.endline(node));
    };

    XMLStreamWriter.prototype.raw = function(node, level) {
      return this.stream.write(this.space(level) + node.value + this.endline(node));
    };

    XMLStreamWriter.prototype.text = function(node, level) {
      return this.stream.write(this.space(level) + node.value + this.endline(node));
    };

    XMLStreamWriter.prototype.dtdAttList = function(node, level) {
      this.stream.write(this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType);
      if (node.defaultValueType !== '#DEFAULT') {
        this.stream.write(' ' + node.defaultValueType);
      }
      if (node.defaultValue) {
        this.stream.write(' "' + node.defaultValue + '"');
      }
      return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
    };

    XMLStreamWriter.prototype.dtdElement = function(node, level) {
      this.stream.write(this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value);
      return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
    };

    XMLStreamWriter.prototype.dtdEntity = function(node, level) {
      this.stream.write(this.space(level) + '<!ENTITY');
      if (node.pe) {
        this.stream.write(' %');
      }
      this.stream.write(' ' + node.name);
      if (node.value) {
        this.stream.write(' "' + node.value + '"');
      } else {
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        if (node.nData) {
          this.stream.write(' NDATA ' + node.nData);
        }
      }
      return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
    };

    XMLStreamWriter.prototype.dtdNotation = function(node, level) {
      this.stream.write(this.space(level) + '<!NOTATION ' + node.name);
      if (node.pubID && node.sysID) {
        this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
      } else if (node.pubID) {
        this.stream.write(' PUBLIC "' + node.pubID + '"');
      } else if (node.sysID) {
        this.stream.write(' SYSTEM "' + node.sysID + '"');
      }
      return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
    };

    XMLStreamWriter.prototype.endline = function(node) {
      if (!node.isLastRootNode) {
        return this.newline;
      } else {
        return '';
      }
    };

    return XMLStreamWriter;

  })(XMLWriterBase);

}).call(this);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var Data = function () {
    function Data(connection, xmlmc) {
        _classCallCheck(this, Data);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'data';
        this.paramMap = new Map([['addRecord', ['table', 'returnModifiedData']], ['deleteRecord', ['table', 'keyValue']], ['getColumnInfoList', ['database', 'table']], ['getRecord', ['database', 'table', 'keyValue', 'formatValues', 'returnMeta', 'returnRawValues']], ['getStoredQueryList', ['folder']], ['getTableInfoList', ['database']], ['invokeStoredQuery', ['storedQuery', 'parameters']], ['runDataImport', ['confFileName', 'dataFileName']], ['sqlQuery', ['database', 'query', 'rowOffset', 'rowCount', 'formatValues', 'returnMeta', 'maxResults', 'returnRawValues']], ['updateRecord', ['table', 'returnModifiedData']]]);
    }

    _createClass(Data, [{
        key: "addRecord",
        value: function addRecord(table, optionalParams) {
            var request = new Request_1.Request(this.service, 'addRecord', Object.assign({}, { table: table }, optionalParams || {}), this.paramMap.get('addRecord') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "deleteRecord",
        value: function deleteRecord(table, keyValue, optionalParams) {
            var request = new Request_1.Request(this.service, 'deleteRecord', Object.assign({}, {
                table: table,
                keyValue: keyValue
            }, optionalParams || {}), this.paramMap.get('deleteRecord') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getColumnInfoList",
        value: function getColumnInfoList(database, table, optionalParams) {
            var request = new Request_1.Request(this.service, 'getColumnInfoList', Object.assign({}, {
                database: database,
                table: table
            }, optionalParams || {}), this.paramMap.get('getColumnInfoList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getRecord",
        value: function getRecord(table, keyValue, optionalParams) {
            var request = new Request_1.Request(this.service, 'getRecord', Object.assign({}, {
                table: table,
                keyValue: keyValue
            }, optionalParams || {}), this.paramMap.get('getRecord') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getStoredQueryList",
        value: function getStoredQueryList(optionalParams) {
            var request = new Request_1.Request(this.service, 'getStoredQueryList', optionalParams || {}, this.paramMap.get('getStoredQueryList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getTableInfoList",
        value: function getTableInfoList(database, optionalParams) {
            var request = new Request_1.Request(this.service, 'getTableInfoList', Object.assign({}, { database: database }, optionalParams || {}), this.paramMap.get('getTableInfoList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "invokeStoredQuery",
        value: function invokeStoredQuery(storedQuery, optionalParams) {
            var request = new Request_1.Request(this.service, 'invokeStoredQuery', Object.assign({}, { storedQuery: storedQuery }, optionalParams || {}), this.paramMap.get('invokeStoredQuery') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "runDataImport",
        value: function runDataImport(confFileName, dataFileName, optionalParams) {
            var request = new Request_1.Request(this.service, 'runDataImport', Object.assign({}, {
                confFileName: confFileName,
                dataFileName: dataFileName
            }, optionalParams || {}), this.paramMap.get('runDataImport') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "sqlQuery",
        value: function sqlQuery(database, query, optionalParams) {
            var request = new Request_1.Request(this.service, 'sqlQuery', Object.assign({}, {
                database: database,
                query: query
            }, optionalParams || {}), this.paramMap.get('sqlQuery') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "updateRecord",
        value: function updateRecord(table, optionalParams) {
            var request = new Request_1.Request(this.service, 'updateRecord', Object.assign({}, { table: table }, optionalParams || {}), this.paramMap.get('updateRecord') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return Data;
}();

exports.Data = Data;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var Admin = function () {
    function Admin(connection, xmlmc) {
        _classCallCheck(this, Admin);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'admin';
        this.paramMap = new Map([['addEmailRoutingRule', ['condition', 'mode', 'mailbox', 'folder']], ['deleteEmailRoutingRule', ['condition', 'mode', 'mailbox', 'folder']], ['getAuthentication', ['userId']], ['getServerConfiguration', ['EMailRoutingRules']], ['lockAnalyst', ['userId']], ['setAuthentication', ['userId', 'authenticationType', 'authenticationString']], ['unlockAnalyst', ['userId']]]);
    }

    _createClass(Admin, [{
        key: "addEmailRoutingRule",
        value: function addEmailRoutingRule(condition, optionalParams) {
            var request = new Request_1.Request(this.service, 'addEmailRoutingRule', Object.assign({}, { condition: condition }, optionalParams || {}), this.paramMap.get('addEmailRoutingRule') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "deleteEmailRoutingRule",
        value: function deleteEmailRoutingRule(condition, optionalParams) {
            var request = new Request_1.Request(this.service, 'deleteEmailRoutingRule', Object.assign({}, { condition: condition }, optionalParams || {}), this.paramMap.get('deleteEmailRoutingRule') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getAuthentication",
        value: function getAuthentication(userId, optionalParams) {
            var request = new Request_1.Request(this.service, 'getAuthentication', Object.assign({}, { userId: userId }, optionalParams || {}), this.paramMap.get('getAuthentication') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getServerConfiguration",
        value: function getServerConfiguration(optionalParams) {
            var request = new Request_1.Request(this.service, 'getServerConfiguration', optionalParams || {}, this.paramMap.get('getServerConfiguration') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "lockAnalyst",
        value: function lockAnalyst(userId, optionalParams) {
            var request = new Request_1.Request(this.service, 'lockAnalyst', Object.assign({}, { userId: userId }, optionalParams || {}), this.paramMap.get('lockAnalyst') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "setAuthentication",
        value: function setAuthentication(userId, authenticationString, optionalParams) {
            var request = new Request_1.Request(this.service, 'setAuthentication', Object.assign({}, {
                userId: userId,
                authenticationString: authenticationString
            }, optionalParams || {}), this.paramMap.get('setAuthentication') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "unlockAnalyst",
        value: function unlockAnalyst(userId, optionalParams) {
            var request = new Request_1.Request(this.service, 'unlockAnalyst', Object.assign({}, { userId: userId }, optionalParams || {}), this.paramMap.get('unlockAnalyst') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return Admin;
}();

exports.Admin = Admin;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var Helpdesk = function () {
    function Helpdesk(connection, xmlmc) {
        _classCallCheck(this, Helpdesk);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'helpdesk';
        this.paramMap = new Map([['acceptCalls', ['callref', 'markAsSLAResponse', 'timeOfAction']], ['addCallWorkItem', ['callref', 'parentGroup', 'description', 'time', 'assignToGroup', 'assignToAnalyst', 'actionBy', 'priority', 'type', 'reminder', 'remindAssignee', 'remindCallOwner', 'notifyGroup']], ['addCallWorkList', ['WorkListName', 'callref', 'SequentialWorkList', 'CreateMode', 'CreateFromTemplate', 'WorkItem']], ['addCallsToIssue', ['issueRef', 'callref']], ['addCustomerToIssue', ['issueRef', 'keyValue']], ['addFilesToCallDiaryItem', ['callRef', 'diaryUpdateId', 'fileAttachment', 'serverFileAttachment']], ['assignAndHoldCallsto3rdParty', ['callref', 'assignThirdPartySupplier', 'assignThirdPartyContract', 'holdUntil', 'updateMessage', 'forceAssignment']], ['assignCalls', ['callref', 'groupId', 'analystId', 'tpmContract', 'forceAssignment']], ['attachFilesToCalls', ['callRef', 'fileAttachment', 'serverFileAttachment']], ['attachMessageToCall', ['mailbox', 'messageId', 'fileName', 'callRef', 'udIndex', 'attachType', 'includeAttachments', 'moveMessageToFolderId']], ['callKeywordQuery', ['columnList', 'queryString', 'queryType', 'logStart', 'logEnd', 'resolveStart', 'resolveEnd', 'status', 'filter', 'maxResults']], ['callNaturalQuery', ['columnList', 'queryString', 'logStart', 'logEnd', 'resolveStart', 'resolveEnd', 'status', 'filter', 'maxResults']], ['cancelCalls', ['callRef', 'description', 'publicUpdate', 'extraUpdateDbValues']], ['changeCallClass', ['callref', 'class']], ['changeCallCondition', ['callref', 'condition']], ['changeCallProblemProfile', ['callref', 'code']], ['closeCalls', ['callref', 'timeSpent', 'description', 'fixCode', 'isChargeable', 'timeOfAction', 'publicUpdate', 'updateSource', 'updateCode', 'delayCacheFlush', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['completeCallWorkItem', ['callref', 'workItemId']], ['deleteAttachmentFromCall', ['callRef', 'attachId']], ['deleteCallWorkItems', ['callref', 'workItemId']], ['getAnalystAssignedCallCount', ['analystId', 'groupId']], ['getAnalystAssignmentTree', ['groupId', 'recursive']], ['getAnalystTeamTree', ['groupId', 'recursive']], ['getCallDiaryItemList', ['callref']], ['getCallFileAttachment', ['callRef', 'fileId']], ['getCallFileAttachmentList', ['callRef', 'updateId']], ['getCallSLAInfo', ['callref']], ['getCallStatusInfo', ['callref']], ['getCallSummaryInfo', ['callref']], ['getCallTotalTimeSpent', ['callref']], ['getCallWorkItem', ['callref', 'workItemId']], ['getCallWorkItemCount', ['callref']], ['getCallWorkItems', ['callref']], ['getLastCallUpdateIndex', ['callref']], ['getMyWorkItemList', ['configName', 'includeInactiveTasks', 'includeCompletedTasks']], ['getProfileCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes']], ['getResolutionCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes']], ['getTemplateWorkItems', ['templateName', 'parentGroup', 'workItemId']], ['getThirdPartySlaInfoForCall', ['callref', 'contractId']], ['holdCalls', ['callref', 'timeSpent', 'description', 'holdUntil', 'publicUpdate', 'updateSource', 'updateCode', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['issueClose', ['issueRef']], ['issueCreate', ['publicFlag', 'issueType', 'summary', 'description', 'createTime', 'resolveBy', 'masterCallref', 'callref', 'additionalValues']], ['issueResolve', ['issueRef']], ['issueUpdate', ['issueRef', 'publicFlag', 'issueType', 'summary', 'description', 'resolveBy', 'masterCallref', 'callref', 'additionalValues']], ['lockCalls', ['callref', 'reason', 'ignoreStatus']], ['logAndAcceptNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['logAndAssignNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'groupId', 'analystId', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'forceAssignment', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['logAndTakeNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['logDeferredCall', ['callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'groupId', 'analystId', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'forceAssignment', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['logNewCall', ['incomingCallref', 'callClass', 'slaName', 'customerId', 'customerName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'logDate', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'serverFileAttachment', 'additionalCallValues']], ['markWatchedCallsUnread', ['callref']], ['quicklogCallAdd', ['name', 'formName', 'callClass', 'mailbox', 'quickLogKeyValues', 'workItemList', 'fileAttachment']], ['quicklogCallDelete', ['name', 'mailbox']], ['quicklogCallGet', ['name', 'mailbox']], ['quicklogCallGetList', ['mailbox', 'formName', 'callClass']], ['quicklogCallUpdate', ['name', 'formName', 'callClass', 'mailbox', 'quickLogKeyValues', 'workItemList', 'fileAttachment']], ['reactivateCalls', ['callref', 'restoreWorkflow']], ['removeCallsFromIssue', ['issueRef', 'callref']], ['removeWatchOptions', ['callref', 'options']], ['resolveCalls', ['callref', 'timeSpent', 'description', 'fixCode', 'timeOfAction', 'publicUpdate', 'updateSource', 'updateCode', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['setWatchOptions', ['callref', 'options']], ['takeCallsOffHold', ['callref']], ['unlockCalls', ['callref']], ['unwatchCalls', ['callref']], ['updateAndAcceptCalls', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'markAsSLAResponse', 'priority', 'targetFixTime', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['updateAndAssignCallTo3rdParty', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'assignThirdPartySupplier', 'assignThirdPartyContract', 'forceAssignment', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['updateAndAssignCalls', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'assignGroup', 'assignAnalyst', 'forceAssignment', 'markAsSLAResponse', 'priority', 'targetFixTime', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['updateCallDiaryItem', ['callref', 'updateIndex', 'updateSource', 'updateAction', 'publicUpdate', 'emailSent', 'emailReceived', 'updateText', 'extraUpdateDbValues']], ['updateCallFileAttachment', ['callRef', 'fileId', 'fileAttachment']], ['updateCallValues', ['callref', 'actionVerb', 'updateMessage', 'additionalCallValues']], ['updateCallWorkItem', ['callref', 'workItemId', 'description', 'time', 'assignToGroup', 'assignToAnalyst', 'actionBy', 'priority', 'type', 'status', 'progress', 'reminder', 'remindAssignee', 'remindCallOwner', 'notifyGroup']], ['updateCalls', ['callref', 'timeSpent', 'description', 'publicUpdate', 'timeOfAction', 'updateSource', 'updateCode', 'markAsSLAResponse', 'priority', 'targetFixTime', 'fileAttachment', 'serverFileAttachment', 'extraUpdateDbValues']], ['watchCalls', ['callref']]]);
    }

    _createClass(Helpdesk, [{
        key: "acceptCalls",
        value: function acceptCalls(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'acceptCalls', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('acceptCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "addCallWorkItem",
        value: function addCallWorkItem(callref, parentGroup, description, time, assignToGroup, actionBy, priority, type, optionalParams) {
            var request = new Request_1.Request(this.service, 'addCallWorkItem', Object.assign({}, {
                callref: callref,
                parentGroup: parentGroup,
                description: description,
                time: time,
                assignToGroup: assignToGroup,
                actionBy: actionBy,
                priority: priority,
                type: type
            }, optionalParams || {}), this.paramMap.get('addCallWorkItem') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "addCallWorkList",
        value: function addCallWorkList(WorkListName, callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'addCallWorkList', Object.assign({}, {
                WorkListName: WorkListName,
                callref: callref
            }, optionalParams || {}), this.paramMap.get('addCallWorkList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "addCallsToIssue",
        value: function addCallsToIssue(issueRef, callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'addCallsToIssue', Object.assign({}, {
                issueRef: issueRef,
                callref: callref
            }, optionalParams || {}), this.paramMap.get('addCallsToIssue') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "addCustomerToIssue",
        value: function addCustomerToIssue(issueRef, keyValue, optionalParams) {
            var request = new Request_1.Request(this.service, 'addCustomerToIssue', Object.assign({}, {
                issueRef: issueRef,
                keyValue: keyValue
            }, optionalParams || {}), this.paramMap.get('addCustomerToIssue') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "addFilesToCallDiaryItem",
        value: function addFilesToCallDiaryItem(callRef, diaryUpdateId, optionalParams) {
            var request = new Request_1.Request(this.service, 'addFilesToCallDiaryItem', Object.assign({}, {
                callRef: callRef,
                diaryUpdateId: diaryUpdateId
            }, optionalParams || {}), this.paramMap.get('addFilesToCallDiaryItem') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "assignAndHoldCallsto3rdParty",
        value: function assignAndHoldCallsto3rdParty(callref, assignThirdPartySupplier, assignThirdPartyContract, holdUntil, updateMessage, optionalParams) {
            var request = new Request_1.Request(this.service, 'assignAndHoldCallsto3rdParty', Object.assign({}, {
                callref: callref,
                assignThirdPartySupplier: assignThirdPartySupplier,
                assignThirdPartyContract: assignThirdPartyContract,
                holdUntil: holdUntil,
                updateMessage: updateMessage
            }, optionalParams || {}), this.paramMap.get('assignAndHoldCallsto3rdParty') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "assignCalls",
        value: function assignCalls(callref, groupId, optionalParams) {
            var request = new Request_1.Request(this.service, 'assignCalls', Object.assign({}, {
                callref: callref,
                groupId: groupId
            }, optionalParams || {}), this.paramMap.get('assignCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "attachFilesToCalls",
        value: function attachFilesToCalls(callRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'attachFilesToCalls', Object.assign({}, { callRef: callRef }, optionalParams || {}), this.paramMap.get('attachFilesToCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "attachMessageToCall",
        value: function attachMessageToCall(mailbox, messageId, fileName, callRef, udIndex, attachType, includeAttachments, optionalParams) {
            var request = new Request_1.Request(this.service, 'attachMessageToCall', Object.assign({}, {
                mailbox: mailbox,
                messageId: messageId,
                fileName: fileName,
                callRef: callRef,
                udIndex: udIndex,
                attachType: attachType,
                includeAttachments: includeAttachments
            }, optionalParams || {}), this.paramMap.get('attachMessageToCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "callKeywordQuery",
        value: function callKeywordQuery(columnList, queryString, queryType, optionalParams) {
            var request = new Request_1.Request(this.service, 'callKeywordQuery', Object.assign({}, {
                columnList: columnList,
                queryString: queryString,
                queryType: queryType
            }, optionalParams || {}), this.paramMap.get('callKeywordQuery') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "callNaturalQuery",
        value: function callNaturalQuery(columnList, queryString, optionalParams) {
            var request = new Request_1.Request(this.service, 'callNaturalQuery', Object.assign({}, {
                columnList: columnList,
                queryString: queryString
            }, optionalParams || {}), this.paramMap.get('callNaturalQuery') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "cancelCalls",
        value: function cancelCalls(callRef, description, optionalParams) {
            var request = new Request_1.Request(this.service, 'cancelCalls', Object.assign({}, {
                callRef: callRef,
                description: description
            }, optionalParams || {}), this.paramMap.get('cancelCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "changeCallClass",
        value: function changeCallClass(callref, callClass, optionalParams) {
            var request = new Request_1.Request(this.service, 'changeCallClass', Object.assign({}, {
                callref: callref,
                'class': callClass
            }, optionalParams || {}), this.paramMap.get('changeCallClass') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "changeCallCondition",
        value: function changeCallCondition(callref, condition, optionalParams) {
            var request = new Request_1.Request(this.service, 'changeCallCondition', Object.assign({}, {
                callref: callref,
                condition: condition
            }, optionalParams || {}), this.paramMap.get('changeCallCondition') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "changeCallProblemProfile",
        value: function changeCallProblemProfile(callref, code, optionalParams) {
            var request = new Request_1.Request(this.service, 'changeCallProblemProfile', Object.assign({}, {
                callref: callref,
                code: code
            }, optionalParams || {}), this.paramMap.get('changeCallProblemProfile') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "closeCalls",
        value: function closeCalls(callref, timeSpent, description, optionalParams) {
            var request = new Request_1.Request(this.service, 'closeCalls', Object.assign({}, {
                callref: callref,
                timeSpent: timeSpent,
                description: description
            }, optionalParams || {}), this.paramMap.get('closeCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "completeCallWorkItem",
        value: function completeCallWorkItem(callref, workItemId, optionalParams) {
            var request = new Request_1.Request(this.service, 'completeCallWorkItem', Object.assign({}, {
                callref: callref,
                workItemId: workItemId
            }, optionalParams || {}), this.paramMap.get('completeCallWorkItem') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "deleteAttachmentFromCall",
        value: function deleteAttachmentFromCall(callRef, attachId, optionalParams) {
            var request = new Request_1.Request(this.service, 'deleteAttachmentFromCall', Object.assign({}, {
                callRef: callRef,
                attachId: attachId
            }, optionalParams || {}), this.paramMap.get('deleteAttachmentFromCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "deleteCallWorkItems",
        value: function deleteCallWorkItems(callref, workItemId, optionalParams) {
            var request = new Request_1.Request(this.service, 'deleteCallWorkItems', Object.assign({}, {
                callref: callref,
                workItemId: workItemId
            }, optionalParams || {}), this.paramMap.get('deleteCallWorkItems') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getAnalystAssignedCallCount",
        value: function getAnalystAssignedCallCount(analystId, groupId, optionalParams) {
            var request = new Request_1.Request(this.service, 'getAnalystAssignedCallCount', Object.assign({}, {
                analystId: analystId,
                groupId: groupId
            }, optionalParams || {}), this.paramMap.get('getAnalystAssignedCallCount') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getAnalystAssignmentTree",
        value: function getAnalystAssignmentTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'getAnalystAssignmentTree', optionalParams || {}, this.paramMap.get('getAnalystAssignmentTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getAnalystTeamTree",
        value: function getAnalystTeamTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'getAnalystTeamTree', optionalParams || {}, this.paramMap.get('getAnalystTeamTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallDiaryItemList",
        value: function getCallDiaryItemList(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallDiaryItemList', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('getCallDiaryItemList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallFileAttachment",
        value: function getCallFileAttachment(callRef, fileId, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallFileAttachment', Object.assign({}, {
                callRef: callRef,
                fileId: fileId
            }, optionalParams || {}), this.paramMap.get('getCallFileAttachment') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallFileAttachmentList",
        value: function getCallFileAttachmentList(callRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallFileAttachmentList', Object.assign({}, { callRef: callRef }, optionalParams || {}), this.paramMap.get('getCallFileAttachmentList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallSLAInfo",
        value: function getCallSLAInfo(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallSLAInfo', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('getCallSLAInfo') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallStatusInfo",
        value: function getCallStatusInfo(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallStatusInfo', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('getCallStatusInfo') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallSummaryInfo",
        value: function getCallSummaryInfo(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallSummaryInfo', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('getCallSummaryInfo') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallTotalTimeSpent",
        value: function getCallTotalTimeSpent(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallTotalTimeSpent', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('getCallTotalTimeSpent') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallWorkItem",
        value: function getCallWorkItem(callref, workItemId, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallWorkItem', Object.assign({}, {
                callref: callref,
                workItemId: workItemId
            }, optionalParams || {}), this.paramMap.get('getCallWorkItem') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallWorkItemCount",
        value: function getCallWorkItemCount(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallWorkItemCount', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('getCallWorkItemCount') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getCallWorkItems",
        value: function getCallWorkItems(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'getCallWorkItems', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('getCallWorkItems') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getLastCallUpdateIndex",
        value: function getLastCallUpdateIndex(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'getLastCallUpdateIndex', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('getLastCallUpdateIndex') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getMyWorkItemList",
        value: function getMyWorkItemList(optionalParams) {
            var request = new Request_1.Request(this.service, 'getMyWorkItemList', optionalParams || {}, this.paramMap.get('getMyWorkItemList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getProfileCodeTree",
        value: function getProfileCodeTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'getProfileCodeTree', optionalParams || {}, this.paramMap.get('getProfileCodeTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getResolutionCodeTree",
        value: function getResolutionCodeTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'getResolutionCodeTree', optionalParams || {}, this.paramMap.get('getResolutionCodeTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getTemplateWorkItems",
        value: function getTemplateWorkItems(templateName, optionalParams) {
            var request = new Request_1.Request(this.service, 'getTemplateWorkItems', Object.assign({}, { templateName: templateName }, optionalParams || {}), this.paramMap.get('getTemplateWorkItems') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getThirdPartyAssignmentTree",
        value: function getThirdPartyAssignmentTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'getThirdPartyAssignmentTree', optionalParams || {}, this.paramMap.get('getThirdPartyAssignmentTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getThirdPartySlaInfoForCall",
        value: function getThirdPartySlaInfoForCall(callref, contractId, optionalParams) {
            var request = new Request_1.Request(this.service, 'getThirdPartySlaInfoForCall', Object.assign({}, {
                callref: callref,
                contractId: contractId
            }, optionalParams || {}), this.paramMap.get('getThirdPartySlaInfoForCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getThirdPartyTeamTree",
        value: function getThirdPartyTeamTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'getThirdPartyTeamTree', optionalParams || {}, this.paramMap.get('getThirdPartyTeamTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getWorkflowTemplateNameList",
        value: function getWorkflowTemplateNameList(optionalParams) {
            var request = new Request_1.Request(this.service, 'getWorkflowTemplateNameList', optionalParams || {}, this.paramMap.get('getWorkflowTemplateNameList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "holdCalls",
        value: function holdCalls(callref, timeSpent, description, holdUntil, optionalParams) {
            var request = new Request_1.Request(this.service, 'holdCalls', Object.assign({}, {
                callref: callref,
                timeSpent: timeSpent,
                description: description,
                holdUntil: holdUntil
            }, optionalParams || {}), this.paramMap.get('holdCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "issueClose",
        value: function issueClose(issueRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'issueClose', Object.assign({}, { issueRef: issueRef }, optionalParams || {}), this.paramMap.get('issueClose') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "issueCreate",
        value: function issueCreate(issueType, summary, optionalParams) {
            var request = new Request_1.Request(this.service, 'issueCreate', Object.assign({}, {
                issueType: issueType,
                summary: summary
            }, optionalParams || {}), this.paramMap.get('issueCreate') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "issueResolve",
        value: function issueResolve(issueRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'issueResolve', Object.assign({}, { issueRef: issueRef }, optionalParams || {}), this.paramMap.get('issueResolve') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "issueUpdate",
        value: function issueUpdate(issueRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'issueUpdate', Object.assign({}, { issueRef: issueRef }, optionalParams || {}), this.paramMap.get('issueUpdate') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "lockCalls",
        value: function lockCalls(callref, reason, optionalParams) {
            var request = new Request_1.Request(this.service, 'lockCalls', Object.assign({}, {
                callref: callref,
                reason: reason
            }, optionalParams || {}), this.paramMap.get('lockCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "logAndAcceptNewCall",
        value: function logAndAcceptNewCall(callClass, optionalParams) {
            var request = new Request_1.Request(this.service, 'logAndAcceptNewCall', Object.assign({}, { callClass: callClass }, optionalParams || {}), this.paramMap.get('logAndAcceptNewCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "logAndAssignNewCall",
        value: function logAndAssignNewCall(callClass, groupId, optionalParams) {
            var request = new Request_1.Request(this.service, 'logAndAssignNewCall', Object.assign({}, {
                callClass: callClass,
                groupId: groupId
            }, optionalParams || {}), this.paramMap.get('logAndAssignNewCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "logAndTakeNewCall",
        value: function logAndTakeNewCall(callClass, optionalParams) {
            var request = new Request_1.Request(this.service, 'logAndTakeNewCall', Object.assign({}, { callClass: callClass }, optionalParams || {}), this.paramMap.get('logAndTakeNewCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "logDeferredCall",
        value: function logDeferredCall(callClass, logDate, groupId, optionalParams) {
            var request = new Request_1.Request(this.service, 'logDeferredCall', Object.assign({}, {
                callClass: callClass,
                logDate: logDate,
                groupId: groupId
            }, optionalParams || {}), this.paramMap.get('logDeferredCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "logNewCall",
        value: function logNewCall(callClass, optionalParams) {
            var request = new Request_1.Request(this.service, 'logNewCall', Object.assign({}, { callClass: callClass }, optionalParams || {}), this.paramMap.get('logNewCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "markWatchedCallsUnread",
        value: function markWatchedCallsUnread(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'markWatchedCallsUnread', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('markWatchedCallsUnread') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "quicklogCallAdd",
        value: function quicklogCallAdd(name, formName, callClass, optionalParams) {
            var request = new Request_1.Request(this.service, 'quicklogCallAdd', Object.assign({}, {
                name: name,
                formName: formName,
                callClass: callClass
            }, optionalParams || {}), this.paramMap.get('quicklogCallAdd') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "quicklogCallDelete",
        value: function quicklogCallDelete(name, optionalParams) {
            var request = new Request_1.Request(this.service, 'quicklogCallDelete', Object.assign({}, { name: name }, optionalParams || {}), this.paramMap.get('quicklogCallDelete') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "quicklogCallGet",
        value: function quicklogCallGet(name, optionalParams) {
            var request = new Request_1.Request(this.service, 'quicklogCallGet', Object.assign({}, { name: name }, optionalParams || {}), this.paramMap.get('quicklogCallGet') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "quicklogCallGetList",
        value: function quicklogCallGetList(optionalParams) {
            var request = new Request_1.Request(this.service, 'quicklogCallGetList', optionalParams || {}, this.paramMap.get('quicklogCallGetList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "quicklogCallUpdate",
        value: function quicklogCallUpdate(name, formName, callClass, optionalParams) {
            var request = new Request_1.Request(this.service, 'quicklogCallUpdate', Object.assign({}, {
                name: name,
                formName: formName,
                callClass: callClass
            }, optionalParams || {}), this.paramMap.get('quicklogCallUpdate') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "reactivateCalls",
        value: function reactivateCalls(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'reactivateCalls', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('reactivateCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "removeCallsFromIssue",
        value: function removeCallsFromIssue(issueRef, callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'removeCallsFromIssue', Object.assign({}, {
                issueRef: issueRef,
                callref: callref
            }, optionalParams || {}), this.paramMap.get('removeCallsFromIssue') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "removeWatchOptions",
        value: function removeWatchOptions(callref, options, optionalParams) {
            var request = new Request_1.Request(this.service, 'removeWatchOptions', Object.assign({}, {
                callref: callref,
                options: options
            }, optionalParams || {}), this.paramMap.get('removeWatchOptions') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "resolveCalls",
        value: function resolveCalls(callref, timeSpent, description, optionalParams) {
            var request = new Request_1.Request(this.service, 'resolveCalls', Object.assign({}, {
                callref: callref,
                timeSpent: timeSpent,
                description: description
            }, optionalParams || {}), this.paramMap.get('resolveCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "setWatchOptions",
        value: function setWatchOptions(callref, options, optionalParams) {
            var request = new Request_1.Request(this.service, 'setWatchOptions', Object.assign({}, {
                callref: callref,
                options: options
            }, optionalParams || {}), this.paramMap.get('setWatchOptions') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "takeCallsOffHold",
        value: function takeCallsOffHold(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'takeCallsOffHold', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('takeCallsOffHold') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "unlockCalls",
        value: function unlockCalls(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'unlockCalls', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('unlockCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "unwatchCalls",
        value: function unwatchCalls(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'unwatchCalls', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('unwatchCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "updateAndAcceptCalls",
        value: function updateAndAcceptCalls(callref, timeSpent, description, optionalParams) {
            var request = new Request_1.Request(this.service, 'updateAndAcceptCalls', Object.assign({}, {
                callref: callref,
                timeSpent: timeSpent,
                description: description
            }, optionalParams || {}), this.paramMap.get('updateAndAcceptCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "updateAndAssignCallTo3rdParty",
        value: function updateAndAssignCallTo3rdParty(callref, timeSpent, description, assignThirdPartySupplier, assignThirdPartyContract, optionalParams) {
            var request = new Request_1.Request(this.service, 'updateAndAssignCallTo3rdParty', Object.assign({}, {
                callref: callref,
                timeSpent: timeSpent,
                description: description,
                assignThirdPartySupplier: assignThirdPartySupplier,
                assignThirdPartyContract: assignThirdPartyContract
            }, optionalParams || {}), this.paramMap.get('updateAndAssignCallTo3rdParty') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "updateAndAssignCalls",
        value: function updateAndAssignCalls(callref, timeSpent, description, assignGroup, optionalParams) {
            var request = new Request_1.Request(this.service, 'updateAndAssignCalls', Object.assign({}, {
                callref: callref,
                timeSpent: timeSpent,
                description: description,
                assignGroup: assignGroup
            }, optionalParams || {}), this.paramMap.get('updateAndAssignCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "updateCallDiaryItem",
        value: function updateCallDiaryItem(callref, updateIndex, optionalParams) {
            var request = new Request_1.Request(this.service, 'updateCallDiaryItem', Object.assign({}, {
                callref: callref,
                updateIndex: updateIndex
            }, optionalParams || {}), this.paramMap.get('updateCallDiaryItem') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "updateCallFileAttachment",
        value: function updateCallFileAttachment(callRef, fileId, fileAttachment, optionalParams) {
            var request = new Request_1.Request(this.service, 'updateCallFileAttachment', Object.assign({}, {
                callRef: callRef,
                fileId: fileId,
                fileAttachment: fileAttachment
            }, optionalParams || {}), this.paramMap.get('updateCallFileAttachment') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "updateCallValues",
        value: function updateCallValues(callref, additionalCallValues, optionalParams) {
            var request = new Request_1.Request(this.service, 'updateCallValues', Object.assign({}, {
                callref: callref,
                additionalCallValues: additionalCallValues
            }, optionalParams || {}), this.paramMap.get('updateCallValues') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "updateCallWorkItem",
        value: function updateCallWorkItem(callref, workItemId, optionalParams) {
            var request = new Request_1.Request(this.service, 'updateCallWorkItem', Object.assign({}, {
                callref: callref,
                workItemId: workItemId
            }, optionalParams || {}), this.paramMap.get('updateCallWorkItem') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "updateCalls",
        value: function updateCalls(callref, timeSpent, description, optionalParams) {
            var request = new Request_1.Request(this.service, 'updateCalls', Object.assign({}, {
                callref: callref,
                timeSpent: timeSpent,
                description: description
            }, optionalParams || {}), this.paramMap.get('updateCalls') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "watchCalls",
        value: function watchCalls(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'watchCalls', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('watchCalls') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return Helpdesk;
}();

exports.Helpdesk = Helpdesk;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var Knowledgebase = function () {
    function Knowledgebase(connection, xmlmc) {
        _classCallCheck(this, Knowledgebase);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'knowledgebase';
        this.paramMap = new Map([['articleAdd', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'problem', 'solution', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired']], ['articleDelete', ['docRef', 'forceDelete']], ['articleUpdate', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'problem', 'solution', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired']], ['catalogAdd', ['name']], ['catalogDelete', ['catalogId']], ['catalogRename', ['catalogId', 'newName']], ['documentAdd', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'forceOverwrite', 'document', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired']], ['documentAddChange', ['docRef', 'date', 'analystID', 'groupID', 'description']], ['documentClearChanges', ['docRef']], ['documentDelete', ['docRef', 'forceDelete']], ['documentFlagForModification', ['docRef', 'clearFlag']], ['documentGetCallref', ['docRef']], ['documentGetChanges', ['docRef']], ['documentGetInfo', ['docRef']], ['documentGetRelated', ['docRef']], ['documentGetSurveyAverageUsefulness', ['docRef']], ['documentGetType', ['docRef']], ['documentGetUrl', ['docRef']], ['documentIncreaseAccessCounter', ['docRef', 'counterValue']], ['documentList', ['catalogId', 'maxResults']], ['documentSetRelated', ['docRef', 'relatedDocRef']], ['documentSetSurveyInfo', ['docRef', 'analystID', 'groupID', 'usefulness']], ['documentUpdate', ['docRef', 'title', 'docVisibleToCustomers', 'docStatus', 'catalogId', 'author', 'callref', 'callProbCode', 'docDate', 'keywords', 'template', 'document', 'ownerAnalystID', 'ownerGroupID', 'expiryDate', 'isRetired']], ['doesFileExist', ['fileName']], ['isCallInKnowledgeBase', ['callref']], ['queryKeyword', ['queryString', 'catalogId', 'queryType', 'searchTitle', 'searchKeywords', 'searchProblem', 'searchSolution', 'searchCallProbCode', 'includeRetiredDocuments', 'maxResults', 'sortResultsBy', 'sortResultsAsc']], ['queryNatural', ['queryString', 'catalogId', 'includeRetiredDocuments', 'maxResults', 'sortResultsBy', 'sortResultsAsc']], ['unpublishedCallAdd', ['callRef']], ['unpublishedCallDelete', ['callRef']], ['unpublishedCallList', ['maxResults']]]);
    }

    _createClass(Knowledgebase, [{
        key: "articleAdd",
        value: function articleAdd(title, docVisibleToCustomers, docStatus, catalogId, optionalParams) {
            var request = new Request_1.Request(this.service, 'articleAdd', Object.assign({}, {
                title: title,
                docVisibleToCustomers: docVisibleToCustomers,
                docStatus: docStatus,
                catalogId: catalogId
            }, optionalParams || {}), this.paramMap.get('articleAdd') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "articleDelete",
        value: function articleDelete(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'articleDelete', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('articleDelete') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "articleUpdate",
        value: function articleUpdate(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'articleUpdate', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('articleUpdate') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "catalogAdd",
        value: function catalogAdd(name, optionalParams) {
            var request = new Request_1.Request(this.service, 'catalogAdd', Object.assign({}, { name: name }, optionalParams || {}), this.paramMap.get('catalogAdd') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "catalogDelete",
        value: function catalogDelete(catalogId, optionalParams) {
            var request = new Request_1.Request(this.service, 'catalogDelete', Object.assign({}, { catalogId: catalogId }, optionalParams || {}), this.paramMap.get('catalogDelete') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "catalogList",
        value: function catalogList(optionalParams) {
            var request = new Request_1.Request(this.service, 'catalogList', optionalParams || {}, this.paramMap.get('catalogList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "catalogRename",
        value: function catalogRename(catalogId, newName, optionalParams) {
            var request = new Request_1.Request(this.service, 'catalogRename', Object.assign({}, {
                catalogId: catalogId,
                newName: newName
            }, optionalParams || {}), this.paramMap.get('catalogRename') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentAdd",
        value: function documentAdd(title, docVisibleToCustomers, docStatus, catalogId, document, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentAdd', Object.assign({}, {
                title: title,
                docVisibleToCustomers: docVisibleToCustomers,
                docStatus: docStatus,
                catalogId: catalogId,
                document: document
            }, optionalParams || {}), this.paramMap.get('documentAdd') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentAddChange",
        value: function documentAddChange(docRef, date, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentAddChange', Object.assign({}, {
                docRef: docRef,
                date: date
            }, optionalParams || {}), this.paramMap.get('documentAddChange') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentClearChanges",
        value: function documentClearChanges(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentClearChanges', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentClearChanges') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentDelete",
        value: function documentDelete(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentDelete', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentDelete') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentFlagForModification",
        value: function documentFlagForModification(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentFlagForModification', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentFlagForModification') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentGetCallref",
        value: function documentGetCallref(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentGetCallref', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentGetCallref') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentGetChanges",
        value: function documentGetChanges(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentGetChanges', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentGetChanges') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentGetInfo",
        value: function documentGetInfo(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentGetInfo', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentGetInfo') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentGetRelated",
        value: function documentGetRelated(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentGetRelated', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentGetRelated') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentGetSurveyAverageUsefulness",
        value: function documentGetSurveyAverageUsefulness(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentGetSurveyAverageUsefulness', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentGetSurveyAverageUsefulness') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentGetType",
        value: function documentGetType(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentGetType', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentGetType') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentGetUrl",
        value: function documentGetUrl(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentGetUrl', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentGetUrl') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentIncreaseAccessCounter",
        value: function documentIncreaseAccessCounter(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentIncreaseAccessCounter', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentIncreaseAccessCounter') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentList",
        value: function documentList(optionalParams) {
            var request = new Request_1.Request(this.service, 'documentList', optionalParams || {}, this.paramMap.get('documentList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentSetRelated",
        value: function documentSetRelated(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentSetRelated', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentSetRelated') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentSetSurveyInfo",
        value: function documentSetSurveyInfo(docRef, analystID, groupID, usefulness, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentSetSurveyInfo', Object.assign({}, {
                docRef: docRef,
                analystID: analystID,
                groupID: groupID,
                usefulness: usefulness
            }, optionalParams || {}), this.paramMap.get('documentSetSurveyInfo') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "documentUpdate",
        value: function documentUpdate(docRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'documentUpdate', Object.assign({}, { docRef: docRef }, optionalParams || {}), this.paramMap.get('documentUpdate') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "doesFileExist",
        value: function doesFileExist(fileName, optionalParams) {
            var request = new Request_1.Request(this.service, 'doesFileExist', Object.assign({}, { fileName: fileName }, optionalParams || {}), this.paramMap.get('doesFileExist') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "isCallInKnowledgeBase",
        value: function isCallInKnowledgeBase(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'isCallInKnowledgeBase', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('isCallInKnowledgeBase') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "queryKeyword",
        value: function queryKeyword(queryString, queryType, optionalParams) {
            var request = new Request_1.Request(this.service, 'queryKeyword', Object.assign({}, {
                queryString: queryString,
                queryType: queryType
            }, optionalParams || {}), this.paramMap.get('queryKeyword') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "queryNatural",
        value: function queryNatural(queryString, optionalParams) {
            var request = new Request_1.Request(this.service, 'queryNatural', Object.assign({}, { queryString: queryString }, optionalParams || {}), this.paramMap.get('queryNatural') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "templateList",
        value: function templateList(optionalParams) {
            var request = new Request_1.Request(this.service, 'templateList', optionalParams || {}, this.paramMap.get('templateList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "unpublishedCallAdd",
        value: function unpublishedCallAdd(callRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'unpublishedCallAdd', Object.assign({}, { callRef: callRef }, optionalParams || {}), this.paramMap.get('unpublishedCallAdd') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "unpublishedCallDelete",
        value: function unpublishedCallDelete(callRef, optionalParams) {
            var request = new Request_1.Request(this.service, 'unpublishedCallDelete', Object.assign({}, { callRef: callRef }, optionalParams || {}), this.paramMap.get('unpublishedCallDelete') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "unpublishedCallList",
        value: function unpublishedCallList(optionalParams) {
            var request = new Request_1.Request(this.service, 'unpublishedCallList', optionalParams || {}, this.paramMap.get('unpublishedCallList') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return Knowledgebase;
}();

exports.Knowledgebase = Knowledgebase;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var Mylibrary = function () {
    function Mylibrary(connection, xmlmc) {
        _classCallCheck(this, Mylibrary);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'mylibrary';
        this.paramMap = new Map([['addUserLibraryResource', ['resource']], ['createFolder', ['folder']], ['deleteFile', ['file']], ['deleteFolder', ['folder', 'forceDelete']], ['deleteUserLibraryResource', ['name']], ['getFile', ['path']], ['getFolder', ['path', 'includeFiles']], ['getFolderFromPath', ['path', 'includeSubFolders']], ['putFile', ['path', 'forceOverwrite', 'file']], ['renameItem', ['path', 'newName']]]);
    }

    _createClass(Mylibrary, [{
        key: "addUserLibraryResource",
        value: function addUserLibraryResource(resource, optionalParams) {
            var request = new Request_1.Request(this.service, 'addUserLibraryResource', Object.assign({}, { resource: resource }, optionalParams || {}), this.paramMap.get('addUserLibraryResource') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "createFolder",
        value: function createFolder(folder, optionalParams) {
            var request = new Request_1.Request(this.service, 'createFolder', Object.assign({}, { folder: folder }, optionalParams || {}), this.paramMap.get('createFolder') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "deleteFile",
        value: function deleteFile(file, optionalParams) {
            var request = new Request_1.Request(this.service, 'deleteFile', Object.assign({}, { file: file }, optionalParams || {}), this.paramMap.get('deleteFile') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "deleteFolder",
        value: function deleteFolder(folder, optionalParams) {
            var request = new Request_1.Request(this.service, 'deleteFolder', Object.assign({}, { folder: folder }, optionalParams || {}), this.paramMap.get('deleteFolder') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "deleteUserLibraryResource",
        value: function deleteUserLibraryResource(name, optionalParams) {
            var request = new Request_1.Request(this.service, 'deleteUserLibraryResource', Object.assign({}, { name: name }, optionalParams || {}), this.paramMap.get('deleteUserLibraryResource') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getFile",
        value: function getFile(path, optionalParams) {
            var request = new Request_1.Request(this.service, 'getFile', Object.assign({}, { path: path }, optionalParams || {}), this.paramMap.get('getFile') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getFolder",
        value: function getFolder(optionalParams) {
            var request = new Request_1.Request(this.service, 'getFolder', optionalParams || {}, this.paramMap.get('getFolder') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getFolderFromPath",
        value: function getFolderFromPath(optionalParams) {
            var request = new Request_1.Request(this.service, 'getFolderFromPath', optionalParams || {}, this.paramMap.get('getFolderFromPath') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getUserLibraryResources",
        value: function getUserLibraryResources(optionalParams) {
            var request = new Request_1.Request(this.service, 'getUserLibraryResources', optionalParams || {}, this.paramMap.get('getUserLibraryResources') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "putFile",
        value: function putFile(path, file, optionalParams) {
            var request = new Request_1.Request(this.service, 'putFile', Object.assign({}, {
                path: path,
                file: file
            }, optionalParams || {}), this.paramMap.get('putFile') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "renameItem",
        value: function renameItem(path, newName, optionalParams) {
            var request = new Request_1.Request(this.service, 'renameItem', Object.assign({}, {
                path: path,
                newName: newName
            }, optionalParams || {}), this.paramMap.get('renameItem') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return Mylibrary;
}();

exports.Mylibrary = Mylibrary;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var Reporting = function () {
    function Reporting(connection, xmlmc) {
        _classCallCheck(this, Reporting);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'reporting';
        this.paramMap = new Map([['getCustomReportTree', ['folderPath', 'recursive']], ['getSystemReportTree', ['folderID', 'recursive']]]);
    }

    _createClass(Reporting, [{
        key: "getCustomReportTree",
        value: function getCustomReportTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'getCustomReportTree', optionalParams || {}, this.paramMap.get('getCustomReportTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getSystemReportTree",
        value: function getSystemReportTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'getSystemReportTree', optionalParams || {}, this.paramMap.get('getSystemReportTree') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return Reporting;
}();

exports.Reporting = Reporting;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var Selfservice = function () {
    function Selfservice(connection, xmlmc) {
        _classCallCheck(this, Selfservice);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'selfservice';
        this.paramMap = new Map([['changePassword', ['oldPassword', 'newPassword']], ['customerCancelCall', ['callRef', 'description', 'extraUpdateDbValues']], ['customerGetCallDetails', ['callref', 'formatValues', 'returnMeta', 'returnRawValues']], ['customerGetCallList', ['returnOpen', 'returnClosed', 'returnCancelled', 'formatValues', 'returnMeta', 'returnRawValues']], ['customerGetProfileCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes']], ['customerGetResolutionCodeTree', ['node', 'filter', 'returnFullTree', 'returnInactiveCodes']], ['customerLogNewCall', ['logIncoming', 'callClass', 'slaName', 'assetId', 'costCenter', 'probCode', 'site', 'condition', 'groupId', 'analystId', 'timeSpent', 'updateMessage', 'updateCode', 'updateSource', 'fileAttachment', 'additionalCallValues']], ['customerUpdateCall', ['callref', 'timeSpent', 'description', 'updateSource', 'updateCode', 'fileAttachment', 'extraUpdateDbValues']], ['customerUpdateCallValues', ['callref', 'actionVerb', 'updateMessage', 'additionalCallValues']], ['requestPasswordReset', ['selfServiceId', 'customerId', 'loginId']], ['verifyPasswordResetToken', ['selfServiceId', 'customerId', 'loginId', 'token', 'password']]]);
    }

    _createClass(Selfservice, [{
        key: "changePassword",
        value: function changePassword(oldPassword, newPassword, optionalParams) {
            var request = new Request_1.Request(this.service, 'changePassword', Object.assign({}, {
                oldPassword: oldPassword,
                newPassword: newPassword
            }, optionalParams || {}), this.paramMap.get('changePassword') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "customerCancelCall",
        value: function customerCancelCall(callRef, description, optionalParams) {
            var request = new Request_1.Request(this.service, 'customerCancelCall', Object.assign({}, {
                callRef: callRef,
                description: description
            }, optionalParams || {}), this.paramMap.get('customerCancelCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "customerGetCallDetails",
        value: function customerGetCallDetails(callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'customerGetCallDetails', Object.assign({}, { callref: callref }, optionalParams || {}), this.paramMap.get('customerGetCallDetails') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "customerGetCallList",
        value: function customerGetCallList(optionalParams) {
            var request = new Request_1.Request(this.service, 'customerGetCallList', optionalParams || {}, this.paramMap.get('customerGetCallList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "customerGetProfileCodeTree",
        value: function customerGetProfileCodeTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'customerGetProfileCodeTree', optionalParams || {}, this.paramMap.get('customerGetProfileCodeTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "customerGetResolutionCodeTree",
        value: function customerGetResolutionCodeTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'customerGetResolutionCodeTree', optionalParams || {}, this.paramMap.get('customerGetResolutionCodeTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "customerLogNewCall",
        value: function customerLogNewCall(callClass, groupId, optionalParams) {
            var request = new Request_1.Request(this.service, 'customerLogNewCall', Object.assign({}, {
                callClass: callClass,
                groupId: groupId
            }, optionalParams || {}), this.paramMap.get('customerLogNewCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "customerUpdateCall",
        value: function customerUpdateCall(callref, timeSpent, description, optionalParams) {
            var request = new Request_1.Request(this.service, 'customerUpdateCall', Object.assign({}, {
                callref: callref,
                timeSpent: timeSpent,
                description: description
            }, optionalParams || {}), this.paramMap.get('customerUpdateCall') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "customerUpdateCallValues",
        value: function customerUpdateCallValues(callref, additionalCallValues, optionalParams) {
            var request = new Request_1.Request(this.service, 'customerUpdateCallValues', Object.assign({}, {
                callref: callref,
                additionalCallValues: additionalCallValues
            }, optionalParams || {}), this.paramMap.get('customerUpdateCallValues') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "requestPasswordReset",
        value: function requestPasswordReset(selfServiceId, optionalParams) {
            var request = new Request_1.Request(this.service, 'requestPasswordReset', Object.assign({}, { selfServiceId: selfServiceId }, optionalParams || {}), this.paramMap.get('requestPasswordReset') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "verifyPasswordResetToken",
        value: function verifyPasswordResetToken(selfServiceId, token, password, optionalParams) {
            var request = new Request_1.Request(this.service, 'verifyPasswordResetToken', Object.assign({}, {
                selfServiceId: selfServiceId,
                token: token,
                password: password
            }, optionalParams || {}), this.paramMap.get('verifyPasswordResetToken') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return Selfservice;
}();

exports.Selfservice = Selfservice;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var Survey = function () {
    function Survey(connection, xmlmc) {
        _classCallCheck(this, Survey);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'survey';
        this.paramMap = new Map([['sendCustomerCallSurvey', ['surveyId', 'callref']]]);
    }

    _createClass(Survey, [{
        key: "sendCustomerCallSurvey",
        value: function sendCustomerCallSurvey(surveyId, callref, optionalParams) {
            var request = new Request_1.Request(this.service, 'sendCustomerCallSurvey', Object.assign({}, {
                surveyId: surveyId,
                callref: callref
            }, optionalParams || {}), this.paramMap.get('sendCustomerCallSurvey') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return Survey;
}();

exports.Survey = Survey;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(2);

var System = function () {
    function System(connection, xmlmc) {
        _classCallCheck(this, System);

        this.connection = connection;
        this.xmlmc = xmlmc;
        this.service = 'system';
        this.paramMap = new Map([['getTimezoneDetails', ['timeZone']], ['getTimezoneOffset', ['timeZone']], ['multiClipAddItem', ['personalClipboard', 'name', 'itemData', 'multiClipGroup']], ['multiClipDeleteItem', ['itemId']], ['multiClipGetItemData', ['itemId']], ['multiClipSetItemData', ['itemId', 'itemData']], ['offsetEpochTime', ['epochTime', 'timeZone']], ['sendProductFeedback', ['app', 'message', 'nps']]]);
    }

    _createClass(System, [{
        key: "getFileTypeRestriction",
        value: function getFileTypeRestriction(optionalParams) {
            var request = new Request_1.Request(this.service, 'getFileTypeRestriction', optionalParams || {}, this.paramMap.get('getFileTypeRestriction') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getSystemInfo",
        value: function getSystemInfo(optionalParams) {
            var request = new Request_1.Request(this.service, 'getSystemInfo', optionalParams || {}, this.paramMap.get('getSystemInfo') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getTimezoneDetails",
        value: function getTimezoneDetails(optionalParams) {
            var request = new Request_1.Request(this.service, 'getTimezoneDetails', optionalParams || {}, this.paramMap.get('getTimezoneDetails') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getTimezoneList",
        value: function getTimezoneList(optionalParams) {
            var request = new Request_1.Request(this.service, 'getTimezoneList', optionalParams || {}, this.paramMap.get('getTimezoneList') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "getTimezoneOffset",
        value: function getTimezoneOffset(optionalParams) {
            var request = new Request_1.Request(this.service, 'getTimezoneOffset', optionalParams || {}, this.paramMap.get('getTimezoneOffset') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "multiClipAddItem",
        value: function multiClipAddItem(personalClipboard, name, itemData, optionalParams) {
            var request = new Request_1.Request(this.service, 'multiClipAddItem', Object.assign({}, {
                personalClipboard: personalClipboard,
                name: name,
                itemData: itemData
            }, optionalParams || {}), this.paramMap.get('multiClipAddItem') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "multiClipDeleteItem",
        value: function multiClipDeleteItem(itemId, optionalParams) {
            var request = new Request_1.Request(this.service, 'multiClipDeleteItem', Object.assign({}, { itemId: itemId }, optionalParams || {}), this.paramMap.get('multiClipDeleteItem') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "multiClipGetItemData",
        value: function multiClipGetItemData(itemId, optionalParams) {
            var request = new Request_1.Request(this.service, 'multiClipGetItemData', Object.assign({}, { itemId: itemId }, optionalParams || {}), this.paramMap.get('multiClipGetItemData') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "multiClipGetTree",
        value: function multiClipGetTree(optionalParams) {
            var request = new Request_1.Request(this.service, 'multiClipGetTree', optionalParams || {}, this.paramMap.get('multiClipGetTree') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "multiClipSetItemData",
        value: function multiClipSetItemData(itemId, itemData, optionalParams) {
            var request = new Request_1.Request(this.service, 'multiClipSetItemData', Object.assign({}, {
                itemId: itemId,
                itemData: itemData
            }, optionalParams || {}), this.paramMap.get('multiClipSetItemData') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "offsetEpochTime",
        value: function offsetEpochTime(epochTime, optionalParams) {
            var request = new Request_1.Request(this.service, 'offsetEpochTime', Object.assign({}, { epochTime: epochTime }, optionalParams || {}), this.paramMap.get('offsetEpochTime') || []);
            return this.connection.sendRequest(request);
        }
    }, {
        key: "sendProductFeedback",
        value: function sendProductFeedback(message, optionalParams) {
            var request = new Request_1.Request(this.service, 'sendProductFeedback', Object.assign({}, { message: message }, optionalParams || {}), this.paramMap.get('sendProductFeedback') || []);
            return this.connection.sendRequest(request);
        }
    }]);

    return System;
}();

exports.System = System;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(86)
  , qs = __webpack_require__(87)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decode(part[1])] = decode(part[2])
  );

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ })
/******/ ]);