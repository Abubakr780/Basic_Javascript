// Singlten object 
//const tinderUser=new Object()

const tinderUser={}

tinderUser.id=123
tinderUser.name="abubakr"
tinderUser.email="abubakr@gmail.com"
//console.log(tinderUser)

const regularUser={
    id:1234,
    age:1234,
    fullName:{
        UserName:{
            firstName:"Abubakr",
            LastName:"Siddique"
        }
    },
    Country:"Malysia",
    Address:"Melaka"
}
//console.log(regularUser.fullName.UserName.LastName)
//console.log(regularUser.Country)

const companyName={1: "PPK", 2: "MRL", 3: "Tecnology"}
const location=   {4: "Malysia", 5: "Melaka", 6: "Batu Berandom"}

//const companyDetails =Object.assign({},companyName,location)

const companyDetails={...companyName, ...location} //sapred two objects companyname and location into companyDetail
//console.log(companyDetails)

const user=[
    {
        id:"Abc",
        Name:"Abubakr",
        Email:"Abubakr@gmail.com"

    },
    {
        id:"Abc",
        Name:"Abubakr",
        Email:"Abubakr@gmail.com"

    },
    {
        id:"Abc",
        Name:"Abubakr",
        Email:"Abubakr@gmail.com"

    },
    {
        id:"Abc",
        Name:"Abubakr",
        Email:"Abubakr@gmail.com"

    }
]

// console.log(user[2].Email) // array of abject take objcet no 2 and inside get email
// console.log(Object.keys(companyDetails)) // take inside object just keys
// console.log(Object.values(companyDetails)) // take inside object just values
// console.log(Object.entries(companyName)) //make saperate array for each key value pair
// console.log(location.hasOwnProperty('Melaka')) //check inside object propery lay or not

const location1=   {CountryName: "Malysia", CityName: "Melaka", Address: "Batu Berandom"}

const {CountryName:country,CityName:city}=location1  //Object Destructuring
console.log(country,city)

//json
// {
//     "name":"ppk",
//     "address":"malysia",
// }


//Array of objects
[ 
{

},
{

},
{

}
]