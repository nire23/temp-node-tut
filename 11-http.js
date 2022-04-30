const http = require('http')
const { listenerCount } = require('process')

const server= http.createServer((req,res)=> {
    if (req.url === '/'){
        res.end('welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`<h1>opps</h1>
    <p> this is not the page you are looking for</p>
       <a href = '/'>home page</a> `)
   

res.end() 

})
server.listen(4000)