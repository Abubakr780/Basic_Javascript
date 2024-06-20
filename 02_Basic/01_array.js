// Array //
//Shallow Copy//
//Shallow copy property share the same reference like a heap memory ..
// Deep Copy //
// property do not share the same refernce reference like a stack memory

const myArray= [1,3,4,7,8,9]
const myCompany=["PPK","MRL"]
const myArray2 = new Array(2,3,4,5,6,)
//console.log(myArray[1])

//Array Method  
// myArray.push(6) add 6 element at the end of array
// myArray.push(7)
// myArray.pop() remove element at the end of array
//myArray.unshift(0) add element at the start of array
//myArray.shift() remove element at the start of array
// console.log(myArray.includes(2))
// console.log(myArray.indexOf(9))
// const newArray = myArray.join() // newArray veriable change the data type into string when we use join()
// console.log(newArray)

//Slice, Splice

// console.log('A', myArray)
// const myn1 =myArray.slice(1,3)
// console.log(myn1)
// console.log('B',myArray)

// const myn2 =myArray.splice(1,3)
// console.log(myn2)
// console.log('C',myArray)

//const newArray=[1,2,3,4,5,6,7,8]
// const sliceArray = newArray.slice(1,4)
// console.log(sliceArray)
// console.log(newArray)

//Remove Splice
// const spliceArray =  newArray.splice(2,3)
// console.log(spliceArray)
// console.log(newArray)

//const addSpliceValue = myArray.splice(1,0,'PPK','Technology')
const newArray=[1,2,3,4,5,6,7,8]
// const addSpliceValue =newArray.splice(1, 0, 'a', 'b');
// console.log(addSpliceValue)
// console.log(newArray)

const updateSpliceValue = newArray.splice(1,1,'PPK')
console.log(updateSpliceValue)
console.log(newArray)

const updateSpliceValue2 = newArray.splice(2,2,'Tecnology')
console.log(updateSpliceValue2)
console.log(newArray)