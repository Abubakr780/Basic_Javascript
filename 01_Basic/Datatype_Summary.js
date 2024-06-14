//Two Type of Datatypes

//(1):Primitive (2):Non Primitive

//(1)Primitive  (call by value)
// 7 datatype in Primitive 
//       Type           Typeof
// (1)   Number         number
// (2)   Bolean         bolean
// (3)   String         string
// (4)   BigInt         bigint
// (5)   Null           Object
// (6)   Undefined      undefined
// (1)   Symbol         symbol

//(1)Non Primitive  (call by Reference)
//       Type           Typeof
// (1)   Array          object
// (2)   Object         object
// (1)   Function       function(object)

const score=100
const scoreValue=3.228
const isLoggedIn=true
const outSideTemprature=null
let userEmail

//console.log(typeof userEmail)
//console.log(userEmail)

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(typeof id)
// console.log(id=== anotherId)

const bigNumber=43949595945943455464546654645n  // at the end put n for the representation of bigint
// console.log(typeof bigNumber)
// console.log(bigNumber)

const hero = ['test1','test 2','test3']
let myObj={
    name:"Abubakr",
    age:27
}
const myFunction= function(){
    console.log('Hello World')
}
console.log(typeof myFunction)
//console.log(myFunction)

//***********************************Stack & Heap Memory ************************************
let firstName='PPK'
let lastName=firstName

lastName="Technology"
//console.log(firstName)
//console.log(lastName)

let userOne ={
    email:"abubakr@gmail.com",
    password:12345
}

let userTwo = userOne

userTwo.email="usama@gmail.com"

 console.log(userOne.email)
 console.log(userTwo.email)
