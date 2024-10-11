
const express = require('express') 
const PORT = process.env.PORT || 3001
// const cors = require('cors')
const db = require('./db')
// Insert your database schema files here (??)
const { Animal, Type } = require('./models')

/* For logging functionality */
const bodyParser = require('body-parser')
const logger = require('morgan')

const typeController = require('./controllers/typeController')
const animalController = require('./controllers/animalController')
// require() imports and middleware here ^ ///////

const app = express() 

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

/* For logging functionality */

app.use(logger('dev'))
app.use(bodyParser.json())

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res)=> { // request and response arguements
    res.send('Welcome to The Zoo API!')
})


/* TYPE ROUTES */


// INDEX Types
app.get('/types', typeController.getAllTypes)
// SHOW - Types
app.get('/types/:id', typeController.getTypeById)
// CREATE - Types
/* POST Goes to INDEX route because we are creating something new */
app.post('/types', typeController.createType) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - Types
app.put('/types/:id', typeController.updateType)
// DELETE - Types
app.delete('/types/:id', typeController.deleteType)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */

/* ANIMAL ROUTES */

// INDEX Animals
app.get('/animals', animalController.getAllAnimals)
// SHOW - Animals
app.get('/animals/:id', animalController.getAnimalById)
// CREATE - Animals
/* POST Goes to INDEX route because we are creating something new */
app.post('/animals', animalController.createAnimal) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - Animals
app.put('/animals/:id', animalController.updateAnimal)
// DELETE - Animals
app.delete('/animals/:id', animalController.deleteAnimal)












app.get('/middleware', (req, res, next) => {
    console.log('middleware is working') // Next will run THIS CODE first BEFORE the response is sent
    next()
},
    (req, res) => /* Must restart req and res */
        {res.send('response complete')}
)

app.get('/*', (req, res)=> {
    res.send({
       error: '404 file not found'
    })
})