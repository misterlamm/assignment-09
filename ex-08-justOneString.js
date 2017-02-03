

// Part 07: justOneString()

// Using logical operators, write a function called `justOneString()`
// that accepts two arguments and will return true if either input is a string,
// but returns false if both arguments or neither are strings.

var justOneString = function justOneString(x,y) {
  if (typeof x === 'string' && typeof y === 'string') {
    return false}
    else if (typeof y === 'string') {
      return true}
      else if (typeof x === 'string') {
      return true}
      else{
        return false
      }
  }

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a',5) === true)
console.assert(justOneString(6,'dotron') === true)
console.assert(justOneString('peanut','butter') === false)
console.assert(justOneString(8,true) === false)
