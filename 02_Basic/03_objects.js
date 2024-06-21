// Objects
// Two methods to declare objects (1: Litral) and (2: Constractor)
//Constractor --> Singlten make just one instance 
// when we declare object with Litral then make a  Multiple instances

//Singlten
//Object.create

//object Litral
const mysymb = Symbol("key1") //call sysmbol in object interview question
const jsUser={
    name:"abubakr",  //name type-->String
    "FullName":"Abubakr Siddique",
    [mysymb]:"mykey1",    //Symbol in object syntex 
    age:1234,
    location:"Malysia",
    email:"abubakr@gmail.com",
    isLoggedIn:false,
    lastLoginDays:['Monday','Tuseday']
}
// console.log(jsUser.name)    //First method to call object with .
// console.log(jsUser["name"]) //Scound method to call object as string
// console.log(jsUser.FullName)
// console.log(typeof jsUser[mysymb])  //Call Symbol

// jsUser.email = "abubakrmrl@gmail.com"
//Object.freeze(jsUser)  // no changing inside jsuser object
// jsUser.email ="abubakrppk@gmail.com"
// console.log(jsUser)
jsUser.greeting=function(){
    console.log("Hello World...")
}
console.log(jsUser.greeting())

jsUser.greetingTwo =function(){
    console.log(`Hello World..${this.name}`)
}
console.log(jsUser.greetingTwo())
//console.log(jsUser)

console.log(jsUser.lastLoginDays)
jsUser.myobj={
    City:"Melaka",
    Country:"Malysia",
    Address:"Batu berandam",
    Identity:this.FullName
}
console.log(jsUser.myobj)
console.log(jsUser)