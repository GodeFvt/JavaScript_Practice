const testFn = require('./greeting.js')

test('output#1', () => {
  expect(testFn('students')).toBe('hello, students')
})

test('output#2', () => {
  expect(testFn(null)).toBe('hello, guest')
})

test('output#3', () => {
  expect(testFn(undefined)).toBe('hello, guest')
})
