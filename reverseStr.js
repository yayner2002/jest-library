function reverseString(string){
    const splitStr = string.split('')
    const reversArray = splitStr.reverse()
    const joinArray = reversArray.join('')
    return joinArray
}
module.exports = reverseString