// every file is module
//modules - encapsulated file only share minimum 
const os = require('os')

//info about current user

const user = os.userInfo();
console.log(user);

//info about the system uptime

const uptime =os.uptime();
console.log(`The pc is up for: ${uptime} seconds`);

const currentOS ={
    name : os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)






