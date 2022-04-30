const { readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/subfolder/first.txt','utf8', (err, result) => {
    
    if (err){
        console.log(err)
        return
    }

    const first = result;


readFile('./content/subfolder/second.txt','utf8', (err,result) => {

    if (err){
        console.log(err)
        return
    }

    const second = result;


writeFile('./content/subfolder/10-asyncfile.txt', 
`here is the result : ${first}, ${second}`, (err ,result) => {

    if (err){
    console.log(err);
    return
    }
    

   console.log('done with this task') 
})
})
})
console.log('start with new one')
