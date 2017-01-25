const express = require('express')  
const app = express()  
const port = 3000

app.get('/time/', (request, response) => {  
  response.send(new Date())
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
