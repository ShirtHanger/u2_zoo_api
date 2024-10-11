const { Schema } = require('mongoose')

const typeSchema = new Schema(
  {
    type_name: { type: String, required: true },
    blood: { type: String, required: true }, /* Warm, Cold, varies */
    environment: { type: String, required: true }, /* Aquatic, land */
    breaths_through: { type: String, required: true }, /* Lungs, Gills */
    birth_type: { type: String, required: true }, /* Live, egg */
    full_list_url: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = typeSchema