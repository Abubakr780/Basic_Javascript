// Functions ///
const name = "abubakr"


function myfunc() {
    console.log("a")
    console.log("b")
    console.log("c")
}
//console.log(myfunc())
//myfunc()

// function Addition(number1,number2){
//     console.log( number1 + number2)
//     return
// }
// function Addition(number1,number2){
//     // let result= number1 + number2
//     // return result
//     return number1+number2
// }
function isLoggedInUser(userName) {
    if (!userName) {
        console.log("Please enter username")
    }
    else {
        return console.log(`${userName} is loggedin user...`)
    }
}
// const result =Addition(10,5)
// console.log(`Result is: ${result}`)

//isLoggedInUser(4)

function calculateCartPrice(...item) //Rest operator(...) we can pass multiple values using this operator
{
   return item
}
console.log(calculateCartPrice(2,3,5,7))

let obj={
    name:"Abubakr",
    city:"Malaka"
}
function checkobj(objValue){
    console.log(`your name is ${objValue.name} and city is:${objValue.city}`)
    //return objValue
}
//checkobj(obj)
checkobj({
    name:"Abubakr",
    city:"Malaka"
})

const myArray = [20,34,56,34]
function ShowArrayValue(value){
    return value
}
console.log(ShowArrayValue(myArray[3]))