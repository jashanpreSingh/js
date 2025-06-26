const accountId = 144470
let accountEmail = "jashan@gmail.com"
var accountPassword = "12345"
accountCity = "Bathinda"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sadaf@gmail.com"
accountPassword = "232422"
accountCity = "Bengaluru"


console.log(accountId);


/*
prefer not use to var 
because of issue in block scope and functional scope 

*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])