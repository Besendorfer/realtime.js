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

describe('isArray', () => {
  it('should determine if the given array parameter is an array', () => {
    var isArray = Utilities.isArray(['string'])
    assert.equal(true, isArray)
  })

  it('should determine if the given non-array parameters are not an array', () => {
    var isArray = Utilities.isArray(1)
    assert.equal(false, isArray)
    isArray = Utilities.isArray('string')
    assert.equal(false, isArray)
    isArray = Utilities.isArray({ name: 'string' })
    assert.equal(false, isArray)
    isArray = Utilities.isArray(() => {})
    assert.equal(false, isArray)
    isArray = Utilities.isArray(true)
    assert.equal(false, isArray)
    isArray = Utilities.isArray(false)
    assert.equal(false, isArray)
    isArray = Utilities.isArray(null)
    assert.equal(false, isArray)
    isArray = Utilities.isArray(undefined)
    assert.equal(false, isArray)
  })
})

describe('isFunction', () => {
  it('should determine if the given function parameter is a function', () => {
    var isFunction = Utilities.isFunction(() => {})
    assert.equal(true, isFunction)
  })

  it('should determine if the given non-function parameters are not a function', () => {
    var isFunction = Utilities.isFunction(1)
    assert.equal(false, isFunction)
    isFunction = Utilities.isFunction(['string'])
    assert.equal(false, isFunction)
    isFunction = Utilities.isFunction({ name: 'string' })
    assert.equal(false, isFunction)
    isFunction = Utilities.isFunction('string')
    assert.equal(false, isFunction)
    isFunction = Utilities.isFunction(true)
    assert.equal(false, isFunction)
    isFunction = Utilities.isFunction(false)
    assert.equal(false, isFunction)
    isFunction = Utilities.isFunction(null)
    assert.equal(false, isFunction)
    isFunction = Utilities.isFunction(undefined)
    assert.equal(false, isFunction)
  })
})

describe('removeArrayItems', () => {
  
})