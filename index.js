const express = require('express')  
const app = express()  
const port = 3000

app.get('/time/', (request, response) => {  
  let date = new Date()
  let time = date.getHours() + ':'
  time += date.getMinutes() + ':' + date.getSeconds()
  response.send(time)
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
