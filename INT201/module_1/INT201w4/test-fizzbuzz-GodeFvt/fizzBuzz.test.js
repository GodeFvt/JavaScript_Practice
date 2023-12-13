const fizzBuzz = require('./fizzBuzz.js')

test('should generate the correct FizzBuzz pattern up to a specified maximum value', () => {
  const expectedOutput = '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16'
  const actualOutput = fizzBuzz(16)
  expect(actualOutput).toBe(expectedOutput)
})

test('should return an empty string for a maximum value of 0', () => {
  const expectedOutput = ''
  const actualOutput = fizzBuzz(0)
  expect(actualOutput).toBe(expectedOutput)
})

test('should return a single "1" for a maximum value of 1', () => {
  const expectedOutput = '1'
  const actualOutput = fizzBuzz(1)
  expect(actualOutput).toBe(expectedOutput)
})

test('should generate the correct FizzBuzz pattern up to a specified maximum value', () => {
  const expectedOutput = '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16'
  const actualOutput = fizzBuzz(16)
  expect(actualOutput).toBe(expectedOutput)
})
