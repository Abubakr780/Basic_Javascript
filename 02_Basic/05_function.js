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

isLoggedInUser(4)