const http = require('http')
const fs = require('fs')

let obj

http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' })
  obj = {
    firstname: 'John',
    lastname: 'Doe'
  }
  res.end(JSON.stringify(obj))

}).listen(1337, '127.0.0.1')