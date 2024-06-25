let a= 10;
function Test(){
    let a =15
   // console.log(`inner output:${a}`)
}
console.log(a)
Test()

var b=10
function VarTest(){
    var b=30
    //console.log("Inner value:",b)
}
//console.log(b)
VarTest()

function one(){
    const userName="abubakr"
    function Two(){
        const website="youtube"
        console.log(website)
    }
   //console.log(website)
Two()
}
one()

if(true){
    const name="abubakr"
    if(name==="abubakr"){
        const webSite="youtube"
        console.log("name is:"+name+" website is "+webSite)
    }
   // console.log(webSite)
}
//console.log(name)

//+++++++++++++ Intersting ++++++++++++

console.log(AddOne(5))

function AddOne(num){
    return num + 1
}
AddOne(5)


const myFunction =function AddTwo(num){
    return num + 2
}
console.log(myFunction(5))
