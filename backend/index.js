const express = require('express')

const app = express()

app.use(express.json())

const user = {
  name: 'Marília Suzart',
  job: 'Fullstack developer',
}

app.post('/users', (request, response) => {
  return response.json(user)
})

app.listen(3333)
