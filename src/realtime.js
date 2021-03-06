/**
 * realtime.js - Real time API library. Drop this in and make your API real time! (will likely rename later)
 * 
 * UMD pattern found here: https://github.com/umdjs/umd
 * This allows cross compatibilty between various environments (AMD, Node.js, and the browser).
 * I'm honestly not sure if it is necessary yet, but I figured I'd be prepared, and I learned a bit while doing it. :)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./utilities'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('./utilities'))
  } else {
    // Browser globals (root is window)
    root.Realtime = factory(root.Utilities)
  }
})(this, function (Utilities) {
  // Watch object definition:
  /*
    'name': {
      'pushUrls': [],
      'customCb': function
    }
  */
  var watchStore = {}

  var getTypeCheckerFn = function (type) {
    switch (type) {
      case 'string':
        return Utilities.isString
      case 'array':
        return Utilities.isArray
      case 'function':
        return Utilities.isFunction
      default:
        console.error('Unknown type ' + type)
        break
    }
  }

  // Write some sort of error handler
  var error = {
    incompatibleType: function (item, type, paramNum) {
      var postfixParam = paramNum ? ' - param: ' + paramNum : ''

      if (!getTypeCheckerFn(type)(item)) {
        var errorMessage = 'Incompatible type: ' + type + ' for ' + item + postfixParam
        console.error(errorMessage)
        throw TypeError(errorMessage)
      }

      return false
    }
  }

  // Don't open a stream, just single pushes
  var push = {

    // The function that defines the watch.
    // name: string - The ID used to determine which API to push on.
    // pushUrls: string[] - The URLs to send the push to.
    // customCb: function - The custom callback function defined by the user.
    // returns -> success: The watch object containing pushUrls and customCb, fail: Error object.
    registerWatch: function (name, pushUrls, customCb) {
      try {
        error.incompatibleType(name, 'string', 1)
        error.incompatibleType(pushUrls, 'array', 2)
        pushUrls.forEach(function (url) {
          error.incompatibleType(url, 'string', 2)
        })
        error.incompatibleType(customCb, 'function', 3)
      } catch (e) {
        return e
      }

      watchStore[name] = {
        pushUrls: pushUrls,
        customCb: customCb
      }

      return watchStore[name]
    },

    // Function to add URLs to send pushes to.
    // name: string - The ID used to determine which watch to add the URLs to.
    // addUrls: string[] - The URLs to be added.
    // returns -> success: The watch object containing pushUrls and customCb, fail: Error object.
    addWatchUrls: function (name, addUrls) {
      try {
        error.incompatibleType(name, 'string', 1)
        error.incompatibleType(addUrls, 'array', 2)
        addUrls.forEach(function (url) {
          error.incompatibleType(url, 'string', 2)
        })
      } catch (e) {
        return e
      }

      watchStore[name] = watchStore[name].pushUrls.concat(addUrls)

      return watchStore[name]
    },

    // Function to remove URLs that were previous in the URL list.
    // name: string - The ID used to determine which watch to remove the URLs from.
    // removeUrls: string[] - The URLs to be removed.
    // returns -> success: The watch object containing pushUrls and customCb, fail: Error object.
    removeWatchUrls: function (name, removeUrls) {
      try {
        error.incompatibleType(name, 'string', 1)
        error.incompatibleType(removeUrls, 'array', 2)
        removeUrls.forEach(function (url) {
          error.incompatibleType(url, 'string', 2)
        })
      } catch (e) {
        return e
      }
      
      watchStore[name].pushUrls = Utilities.removeArrayItems(watchStore[name].pushUrls, removeUrls)

      return watchStore[name]
    },

    // Function to change (or add) the callback function to be used for the watch.
    // name: string - The ID used to determine which watch's callback function to change (or add).
    // replacementCb: function() - The function to replace (or add). Send null or undefined to remove old callback.
    // returns -> success: The watch object containing pushUrls and customCb, fail: Error object.
    replaceWatchFn: function (name, replacementCb) {
      try {
        error.incompatibleType(name, 'string', 1)
        error.incompatibleType(replacementCb, 'function', 2)
      } catch (e) {
        return e
      }

      watchStore[name].customCb = replacementCb

      return watchStore[name]
    },

    // Function to alert the given watch that an event occurred.
    // name: string - The ID used to determine which watch should be alerted.
    // result: object - The result to send with the alert. Whatever data that should be passed to the user.
    // returns ->
    emit: function (name, result) {
      
    }
  }

  // Open a full blown stream, don't close the connection unless necessary
  var stream = {

  }

  return {
    push: push,
    stream: stream
  }
})