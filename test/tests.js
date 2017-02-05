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
  })
})