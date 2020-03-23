const express = require('express')

const app = express()

const user = {
  name: 'Marília Suzart',
  job: 'Fullstack developer',
  github: 'https://github.com/GabrieleSuzart',
  skills: ['JavaScript, ES6, React, Angular, CSS3, HTML5'],
  address: {
    city: 'São Paulo',
    state: 'SP'
  }
}

app.get('/', (request, response) => {
  return response.json(user)
})

app.listen(3333)
