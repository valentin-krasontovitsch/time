const express = require('express')  
const app = express()  
const time = require('time')
const port = 3000

app.get('/time/', (request, response) => {  
  response.send(new time.Date())
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
