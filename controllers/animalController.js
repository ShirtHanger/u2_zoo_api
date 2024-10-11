/* Here's how you import the animals database into our controller */

const { Animal, Type } = require('../models')

// INDEX - app.get
const getAllAnimals = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const animals = await Animal.find()
        res.json(animals) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getAnimalById = async (req, res) => {
    try {
        const { id } = req.params
        const animal = await Animal.findById(id)
        if (animal) {
            return res.json(animal)
        } return res.status(404).send(`Animal with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That animal doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

// CREATE - app.post
const createAnimal = async (req, res) => {
    try {
        const animal = await new Animal(req.body) /* Enables ability to update via tools like Thunderclient */
        await animal.save()
        return res.status(201).json({animal})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateAnimal = async (req, res) => {
    try {
        let { id } = req.params
        let animal = await Animal.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (animal) {
            return res.status(200).json(animal)
        }
        throw new Error("Animal not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// DELETE - app.delete
const deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Animal.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Animal deleted")
        }
        throw new Error("Animal not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllAnimals,
    getAnimalById,
    createAnimal,
    updateAnimal,
    deleteAnimal
}