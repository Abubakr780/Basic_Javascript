const user ={
    name:"abubakr",
    price:45,

    welcomMessage:function(){
        console.log(`${this.name} Welcom to website`)
       // console.log(this)
    }
}
// user.welcomMessage()
// user.name="usa"
// user.welcomMessage()

//console.log(this)

// function test(){
//     const name="abubakr"
//     console.log(this.name)
// }
// test()

// var checkThiskeyword=function test(){
//     name:"abubakr"
//     console.log(this.name)
// }
// test()

// var checkThiskeyword=()=> {
//     name:"abubakr"
//     console.log(this.name)
// }
//checkThiskeyword()


// const addTwo=(num1,num2) =>{   ///Basic Arrow Function
//     return num1+num2
// }
// console.log(addTwo(3,4))


// const addTwo=(num1,num2) => num1+num2  ///Implicit return  
// console.log(addTwo(3,14))   

// const addTwo=(num1,num2) => (num1+num2)  ///Implicit return  no need to write return key word if use a bracts
// console.log(addTwo(3,67))   

const addTwo=(num1,num2) => ({name:"abubakr"}) ///Implicit return  no need to write return key word if use a bracts
console.log(addTwo(3,67))   