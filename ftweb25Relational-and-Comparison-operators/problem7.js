// comparision operators-->devided into 4 types
// 1. == double equal to --> only value is checked
// 2. != not equal to
// 3.=== triple equal to --> when first value and data type as well is equal to the second value then it is true otherwise 
//                           false 
// 4.!== --> opposite of triple equal to

// These take numbers as input and output as boolean

/*
"goku" = "Goku" --> false
*/

let a = "10"
let b = "2"
let c = "goku"
let d = 10
let e = "Goku"

console.log(a==b)
console.log(a==c)
console.log(b==d)
console.log(a==d) // Only the value is checked so this is true
console.log(e==c)