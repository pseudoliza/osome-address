const osomeAddress = require('../scr/index')

describe('osome address', () => {
  it('yep is osome address', () => {
    const expected = 'osome address'

    expect(osomeAddress).toEqual(expected)
  })
})
