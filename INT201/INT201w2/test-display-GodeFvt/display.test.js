const testFn = require('./display.js')

test('output#1', () => {
  expect(testFn('hello world!')).toBe('your message is hello world!')
})
test('output#2', () => {
  expect(testFn(123)).toBe('your message is 123')
})

test('output#3', () => {
  expect(testFn(null)).toBe('no message')
})

test('output#4', () => {
  expect(testFn(undefined)).toBe('no message')
})
