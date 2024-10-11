/* Here's how you import the types database into our controller */

const { Animal, Type } = require('../models')

// INDEX - app.get
const getAllTypes = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const types = await Type.find()
        res.json(types) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const type = await Type.findById(id)
        if (type) {
            return res.json(type)
        } return res.status(404).send(`Type with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That type doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

// CREATE - app.post
const createType = async (req, res) => {
    try {
        const type = await new Type(req.body) /* Enables ability to update via tools like Thunderclient */
        await type.save()
        return res.status(201).json({type})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateType = async (req, res) => {
    try {
        let { id } = req.params
        let type = await Type.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (type) {
            return res.status(200).json(type)
        }
        throw new Error("Type not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// DELETE - app.delete
const deleteType = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Type.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Type deleted")
        }
        throw new Error("Type not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType
}