// Dates

let myDate = new Date();
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 25);
//let myCreatedDate = new Date(2024, 0, 25,7,6);
//let myCreatedDate = new Date("2024-10-04");
let myCreatedDate = new Date("04-10-2002");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp)
//console.log(myCreatedDate,getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
//console.log(newDate.getDate());
//console.log(newDate.getDay());
//console.log(newDate.getMonth());
//console.log(newDate.getSeconds());


newDate.toLocaleString('default',{
    weekday: "long",
})