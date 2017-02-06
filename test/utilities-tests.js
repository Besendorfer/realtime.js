const Utilities = require('../src/utilities')
const assert = require('assert')

describe('isString', () => {
  it('should determine if the given string parameter is a string', () => {
    var isString = Utilities.isString('string')
    assert.equal(true, isString)
  })

  it('should determine if the given non-string parameters are not a string', () => {
    var isString = Utilities.isString(1)
    assert.equal(false, isString)
    isString = Utilities.isString(['string'])
    assert.equal(false, isString)
    isString = Utilities.isString({ name: 'string' })
    assert.equal(false, isString)
    isString = Utilities.isString(() => {})
    assert.equal(false, isString)
    isString = Utilities.isString(true)
    assert.equal(false, isString)
    isString = Utilities.isString(false)
    assert.equal(false, isString)
    isString = Utilities.isString(null)
    assert.equal(false, isString)
    isString = Utilities.isString(undefined)
    assert.equal(false, isString)
  })
})