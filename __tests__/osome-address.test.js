const osomeAddress = require('../src/index')

describe('osome address', () => {
  it('yep, it\'s osome address', () => {
    expect(osomeAddress.houseNumber).toEqual('80')
    expect(osomeAddress.streetName).toEqual('Robinson Road')
    expect(osomeAddress.floor).toEqual('08')
    expect(osomeAddress.apartment).toEqual('01')
    expect(osomeAddress.country).toEqual('Singapore')
    expect(osomeAddress.zipCode).toEqual('068898')
    expect(osomeAddress.fullAddress).toEqual('80 Robinson Road, #08-01, Singapore 068898')
  })
})
