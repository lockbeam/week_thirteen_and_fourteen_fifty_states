// file that starts the express server running
// similar to student sign in app

let express = require('express')
let states_api = require('./routes/states')

let app = express()

// below line allows the server to recieve and process messages in JSON format
app.use(express.json())

// below lines lets all of the routes in the States API available
app.use('/api', states_api)

//error handling handles all other requests that are not defined within this file
app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.log(err) //for developers to see more error details
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port', server.address().port)
})

