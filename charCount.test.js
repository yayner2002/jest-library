const stringLength = require('./charCount')

// arrange
const str = 'yay'
// act
const result = stringLength(str)
const match = result>=1 && result<10
// assert 
test('properlly countes the characters in a string', () => {
    expect(result).toBe(str.length)
})
test('string is at least 1 character long and not longer than 10 characters', () => {
    expect(match).toBeTruthy()
})
