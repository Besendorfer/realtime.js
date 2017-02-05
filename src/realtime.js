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

  // Don't open a stream, just single pushes
  var push = {
    // The function that defines the watch.
    // name: string - The ID used to determine which API to push on.
    // pushUrls: string[] - The URLs to send the push to.
    // customCb: function - The custom callback function defined by the user.
    // returns -> success: Object containing pushUrls and customCb, fail: Error object.
    registerWatch: function (name, pushUrls, customCb) {
      if (!Utilities.isString(name)) {
        var errorMessage = 'registerWatch was not given a name of type \'string\' - param: 1'
        console.error(errorMessage)
        return Error(errorMessage)
      }

      if (!Utilities.isArray(pushUrls)) {
        var errorMessage = 'registerWatch was not given an array of push URLs - param: 2'
        console.error(errorMessage)
        return Error(errorMessage)
      }

      if (!Utilities.isFunction(customCb)) {
        var errorMessage = 'registerWatch was not given a function for the callback - param: 3'
        console.error(errorMessage)
        return Error(errorMessage)
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
    // returns ->
    addWatchUrls: function (name, addUrls) {

    },
    // Function to remove URLs that were previous in the URL list.
    // name: string - The ID used to determine which watch to remove the URLs from.
    // removeUrls: string[] - The URLs to be removed.
    // returns -> 
    removeWatchUrls: function (name, removeUrls) {

    },
    // Function to change (or add) the callback function to be used for the watch.
    // name: string - The ID used to determine which watch's callback function to change (or add).
    // replacementCb: function() - The function to replace (or add). Send null or undefined to remove old callback.
    // returns ->
    replaceWatchFn: function (name, replacementCb) {

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