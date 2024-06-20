let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
//console.log(myDate.toDateString())
//console.log(myDate.toJSON())
// console.log(myDate.getDay())
// console.log(myDate.getDate())
// console.log(myDate.getMonth())
// console.log(myDate.getFullYear())
// console.log(myDate.getHours())
// console.log(myDate.getTime())
//let myCreatedDate =new Date(2024,3,25)
//let myCreatedDate =new Date(2024,3,25,5,3)
//let myCreatedDate =new Date("2024-03-25")
// let myCreatedDate =new Date("01-23-2024")
// console.log(myCreatedDate.toLocaleString())

 //let myTimeStemp = Date.now()
// console.log(myTimeStemp)
// console.log(myCreatedDate.getTime())

//let myCreatedDate = new Date("01-23-2024");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStemp = Date.now();
// console.log(myTimeStemp); // Current timestamp
// console.log(myCreatedDate.getTime()); // Timestamp for the created date

// Calculate the difference in milliseconds
let myCreatedDate = new Date("01-23-2024");
let myTimeStemp = Date.now()
let timeDifference = myTimeStemp - myCreatedDate.getTime();
//console.log(timeDifference);

// Convert the difference to more readable formats
let differenceInSeconds = timeDifference / 1000;
let differenceInMinutes = differenceInSeconds / 60;
let differenceInHours = differenceInMinutes / 60;
let differenceInDays = differenceInHours / 24;

// console.log("Difference in milliseconds:", timeDifference);
// console.log("Difference in seconds:", Math.round(differenceInSeconds));
// console.log("Difference in minutes:", Math.ceil(differenceInMinutes));
// console.log("Difference in hours:", Math.floor(differenceInHours));
// console.log(`Difference in days: ${Math.floor(differenceInDays)}`);
// console.log(Math.floor(differenceInDays) );

let curruntDate =Date.now()
let fixDate = new Date("2024-03-25")
//console.log(curruntDate)
//console.log(fixDate.getTime())

let timeDifferenceBooths = curruntDate - fixDate.getTime()
//console.log(timeDifference)

let DifferenceInScond = timeDifferenceBooths/1000
let differenceInMinute = DifferenceInScond/60
let differenceInHour = differenceInMinute/60
let differenceInDay = differenceInHour/24
let differenceInMonth =differenceInDay/30

// console.log(`Difference in scounds: ${Math.floor(DifferenceInScond)}`)
// console.log(`Diffrence in Minute: ${Math.ceil(differenceInMinute)}`)
// console.log("Difference in hour:"+ Math.round(differenceInHour))
// console.log(`Difference in Day: ${Math.floor(differenceInDay)}`)
// console.log(`Difference In Month: ${differenceInMonth}`)

let newObject = new Date()
newObject.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
})
console.log(newObject)
