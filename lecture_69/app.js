//lecture_69

// const moment = require('moment')
// console.log(moment().format("ddd, hA"))

//lecture_71 - nodemon

const http = require('http')
const fs = require('fs')

let obj

http.createServer((req, res) => {

  if (req.url === '/'){
    fs.createReadStream(__dirname + '/index.htm').pipe
    (res)
  }

  else if (req.url === '/json'){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    obj = {
      firstname: 'John',
      lastname: 'Doe'
    }
    res.end(JSON.stringify(obj))
  }

  else {
    res.writeHead(404)
    res.end()
  }

}).listen(1337, '127.0.0.1')