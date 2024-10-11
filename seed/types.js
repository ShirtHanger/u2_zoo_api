const db = require('../db')
const { Type } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
    const types = [
      {
        type_name: 'Mammal',
        blood: 'warm', /* Warm, Cold, varies */
        environment: 'land', /* Aquatic, land, varies */
        breaths_through: 'lungs', /* Lungs, Gills */
        birth_type: 'live', /* Live, egg */
        full_list_url: 'https://www.fakeanimalsdatabase.edu/types/mammals'
      },
      {
        type_name: 'Fish',
        blood: 'varies', /* Warm, Cold, varies */
        environment: 'aquatic', /* Aquatic, land, varies */
        breaths_through: 'gills', /* Lungs, Gills */
        birth_type: 'varies', /* Live, egg */
        full_list_url: 'https://www.fakeanimalsdatabase.edu/types/fish'
      },
      {
        type_name: 'Reptile',
        blood: 'cold', /* Warm, Cold, varies */
        environment: 'land', /* Aquatic, land, varies */
        breaths_through: 'lungs',
        birth_type: 'egg', /* Live, egg */
        full_list_url: 'https://www.fakeanimalsdatabase.edu/types/reptiles'
      },
    ]
  
  

  await Type.insertMany(types) 

  console.log('============================')
  console.log('fauna TYPES have been discovered!')
  console.log('============================')

}

const run = async () => {

  await main()
  
  db.close()
}

run()