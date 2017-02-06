const Realtime = require('../src/realtime')
const assert = require('assert')

describe('push', function () {
  describe('registerWatch', function () {
    it('should return the appropriate object containing the URL array and custom callback', function () {
      let watchObj = Realtime.push.registerWatch('watch me!', ['url1', 'url2'], function () { console.log('hello world!') })
      assert.equal('url1', watchObj.pushUrls[0])
      assert.equal('url2', watchObj.pushUrls[1])
      assert.equal('function () { console.log(\'hello world!\') }', watchObj.customCb)
    })

    it('should return errors when incompatible types are passed to the function', function () {
      let watchObj = Realtime.push.registerWatch(['array'], ['string'], function () { console.log('hello world!') })
      assert.equal('TypeError', watchObj.name)
      assert.equal('Incompatible type: string for array - param: 1', watchObj.message)
      watchObj = Realtime.push.registerWatch('watch me!', 'string', function () { console.log('hello world!') })
      assert.equal('TypeError', watchObj.name)
      assert.equal('Incompatible type: array for string - param: 2', watchObj.message)
      watchObj = Realtime.push.registerWatch('watch me!', [1], function () { console.log('hello world!') })
      assert.equal('TypeError', watchObj.name)
      assert.equal('Incompatible type: string for 1 - param: 2', watchObj.message)
      watchObj = Realtime.push.registerWatch('watch me!', ['string'], 'string')
      assert.equal('TypeError', watchObj.name)
      assert.equal('Incompatible type: function for string - param: 3', watchObj.message)
    })
  })

  describe('addWatchUrls', function () {

  })

  describe('removeWatchUrls', function () {

  })

  describe('replaceWatchFn', function () {

  })
})