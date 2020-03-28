const express = require('express')

const routes = express.Router()

const user = {
    name: 'Marília Suzart',
    job: 'Fullstack developer',
}

routes.post('/users', (request, response) => {
    return response.json(user)
})

module.exports = routes
