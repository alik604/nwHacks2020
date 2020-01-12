const { createServer } = require('http')
const next = require('next')
const express = require('express')

const app = next({
    dev: process.env.NODE_ENV !== 'production'
})

// Sets up environmental variable used for production
const port = process.env.PORT || 3000
const routes = require('./routes')
const handler = routes.getRequestHandler(app)


app.prepare().then( () => {
  express().use(handler).listen(3000, (err) => {
        if (err) throw err;
        console.log('Ready on localhost:3000')
    })
    
    express().post('/newImages', function (req, res) {
        console.log(req)
        res.send('POST request to the homepage')
      })
})