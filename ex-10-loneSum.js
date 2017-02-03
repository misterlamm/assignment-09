
// Part 10: loneSum()

// Given 3 integer values as arguments, return their sum.
// However, if one of the values is the same as another of the values,
// it does not count towards the sum.

var loneSum = function loneSum(x, y, z) {
    var result = x + y + z

    return result

        if (x === y && y === z) {
            x === 0;
            y === 0;
            z === 0;
        }
        // if (x === y) {
        //     x === 0;
        //     y === 0;
        // }
        // if (x === z) {
        //     x === 0;
        //     z === 0;
        // }
        // if (y === z) {
        //     y === 0;
        //     z === 0;
        // }


    }

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( loneSum(1,2,3) === 6)
console.assert( loneSum(11,9,5) === 25)
console.assert( loneSum(4,2,4) === 2)
console.assert( loneSum(13,8,8) === 13)
console.assert( loneSum(10,10,10) === 0)
