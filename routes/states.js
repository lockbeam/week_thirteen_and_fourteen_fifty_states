let express = require('express')
let States = require('../models').States

let router = express.Router()

router.get('/states', function(req, res, next) {
    //asking the states model to find all the states
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
        //return the array of all states
    })
    .catch( err => next(err) )
})

//enables StateMap to request all the data about one state from the server via the API
router.get('/state/:name', function(req, res, next) {
    let stateName = req.params.name
    States.findOne( {where: { name: stateName}})
        .then( state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch( err => next(err))
})

//patch route used to update when the checkbox for visited is selected for a specific state
router.patch('/states/:name', function(req, res, next) {
    let stateName = req.params.name
    let stateVisited = req.body.visited
    //above is identifying state and sending json data regarding the checked or unchecked visited

    //below means in the database find the state with name equal to stateName 
    States.update( { visited: stateVisited }, { where: {name: stateName }})
        .then( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated == 1) {
                return res.send('ok')
            }
            //error handeling say if someone where to modify the visited status for a random input like 'qwerty'
            return res.status(404).send("Can't find that state")
        })
        // all other error handling - likely not user error:
        .catch( err => next(err))
})

//anything that imports the stats.js will be abelt o access the router with the get route
module.exports = router