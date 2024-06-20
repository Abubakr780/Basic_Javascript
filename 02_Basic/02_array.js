const array1 =['pakistan','india','Malysia']
const array2 =['Islamabad','Dehli','Kualalmpur']
// array1.push(array2)
// console.log(array1)
//console.log(array1.concat(array2))

const array3 = [...array1,...array2] //Spread Operator array1 and two add in array 3
//console.log(array3)

const array4  = [1,2,3,4,5,[6,7],[8,9,10]]
const array5 = array4.flat(Infinity) // make a single array remove the bracts make [1,2,3,4,5,6,7,8,9,10]
//console.log(array5)

console.log(Array.isArray("PPK")) //output false
console.log(Array.from("PPK_TECNOLOGY")) //output give as an array ['p','p','K','_','T']
console.log(Array.from({name:"PPK"})) //intersting  give empty array []

let playerName = "Abc"
let score2 = 200
let score3 = 300
console.log(Array.of(playerName,score2,score3)) // make a new array