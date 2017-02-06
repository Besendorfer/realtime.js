/**
 * utilities.js - Utilities library needed for the project.
 * 
 * I am building this partially because it is nice to learn how a lot of these utilities are actually
 * working. It is also nice to include only what is needed, rather than importing a huge library for
 * only limited use.
 * 
 * This also uses UMD, just in case it is needed in some other environment.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory()
  } else {
    // Browser globals (root is window)
    root.Utilities = factory()
  }
})(this, function () {
  return {
    isString: function (str) {
      return Object.prototype.toString.call(str) === '[object String]'
    },
    isArray: function (arr) {
      return !!(arr && arr.constructor === Array)
    },
    isFunction: function(fn) {
      return !!(fn && fn.constructor && fn.call && fn.apply)
    },
    removeArrayItems: function(arr, toRemove) {
      return arr.filter(function (item) {
        return toRemove.indexOf(item) === -1
      })
    }
  }
});