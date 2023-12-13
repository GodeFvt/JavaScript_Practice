const isPasswordValid = require('./passwordValidation.js')

describe('Password Validator', () => {
  it('should return false for passwords with null or undefined', () => {
    expect(isPasswordValid(null)).toBe(false)
    expect(isPasswordValid(undefined)).toBe(false)
  })

  it('should return false for passwords with less than 8 characters', () => {
    expect(isPasswordValid('')).toBe(false)
    expect(isPasswordValid('a')).toBe(false)
    expect(isPasswordValid('#')).toBe(false)
    expect(isPasswordValid('1')).toBe(false)
    expect(isPasswordValid('2$')).toBe(false)
    expect(isPasswordValid('ABc')).toBe(false)
    expect(isPasswordValid('!^aV1')).toBe(false)
    expect(isPasswordValid('Abc123!')).toBe(false)
  })

  it('should return false for passwords without uppercase letters', () => {
    expect(isPasswordValid('abc12345!')).toBe(false)
    expect(isPasswordValid('@p@ssw0rd')).toBe(false)
    expect(isPasswordValid('abc!@#xyz')).toBe(false)
  })

  it('should return false for passwords without lowercase letters', () => {
    expect(isPasswordValid('ABC12345!')).toBe(false)
    expect(isPasswordValid('AB$CD!H@')).toBe(false)
    expect(isPasswordValid('P*ASS1WORD')).toBe(false)
  })

  it('should return false for passwords without digits', () => {
    expect(isPasswordValid('Abcdefgh!')).toBe(false)
    expect(isPasswordValid('%less$Than')).toBe(false)
    expect(isPasswordValid('noooo!#!#')).toBe(false)
  })

  it('should return false for passwords without special characters', () => {
    expect(isPasswordValid('Abc12345')).toBe(false)
    expect(isPasswordValid('1234-Aab')).toBe(false)
    expect(isPasswordValid('Pky_15ab')).toBe(false)
  })

  it('should return true for valid passwords', () => {
    expect(isPasswordValid('Abc12345!')).toBe(true)
    expect(isPasswordValid('A1b!C2d@')).toBe(true)
    expect(isPasswordValid('MySuper$3cret')).toBe(true)
    expect(isPasswordValid('1234-Aab!')).toBe(true)
    expect(isPasswordValid('Pky_15%ab')).toBe(true)
    expect(isPasswordValid('@p@sW0rd')).toBe(true)
  })
})
