import { expect } from 'chai'
import log from '../src/index'

describe('Test for npm module console-emoji', function () {

  it('log should be a function', function () {
    expect(log).to.be.a('function')
  })

  it('log without message should return fail', function () {
    expect(log()).to.be.false
  })

  it('log with message should return true', function () {
    expect(log('my message')).to.be.true
  })
})
