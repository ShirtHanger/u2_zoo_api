const mongoose = require('mongoose')

const animalSchema = require('./animal')
const typeSchema = require('./type')

const Animal = mongoose.model('Animal', animalSchema)
const Type = mongoose.model('Type', typeSchema)

module.exports = {
  Animal,
  Type
}