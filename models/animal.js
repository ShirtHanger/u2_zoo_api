const { Schema } = require('mongoose')

const animalSchema = new Schema(
  {
    common_name: { type: String, required: true },
    science_name: { type: String, required: true },
    region: { type: String, required: true },    
    habitat: { type: String, required: true }, /* Cold water, hot water, forest, desert, swamp, etc. */
    diet: { type: String, required: true }, /* Herbivore, Carnivore, Omnivore */
    population: { type: Number, required: true }, 
    hasFur: { type: Boolean, required: true },
    hasScales: { type: Boolean, required: true },
    isPoisonous: { type: Boolean, required: true },
    isVenomous: { type: Boolean, required: true },
    isExtinct: { type: Boolean, required: true },
    image_url: { type: String, required: true },
    type_id: { type: Schema.Types.ObjectId, ref: 'Type' }
  },
  { timestamps: true }
)

module.exports = animalSchema