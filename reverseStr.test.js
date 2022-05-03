const reverseString = require('./reverseStr')

// arrange
const string = 'yayner'
// act
const result = reverseString(string)
// assert 
test('properlly reverses a string', () => {
    expect(result).toBe('renyay')
})