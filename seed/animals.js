const db = require('../db') // Import database
const { Type, Animal } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

const main = async () => { 

    const mammalType = await Type.find({ type_name: 'Mammal' })
    const fishType = await Type.find({ type_name: 'Fish' })
    const reptileType = await Type.find({ type_name: 'Reptile' })

    const animals = [
    {
        common_name: 'Saber-Tooth Tiger',
        science_name: 'Smilodon fatalis',
        region: 'Europe, North America',
        habitat: 'grasslands',
        diet: 'carnivore',
        population: 0,
        hasFur: true,
        hasScales: false,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: true,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/mammals/saber-tooth-tiger.jpg',
        type_id: mammalType[0]._id
    },
    {
        common_name: 'African Elephant',
        science_name: 'Loxodonta africana',
        region: 'Africa',
        habitat: 'savannah, forest',
        diet: 'herbivore',
        population: 415000,
        hasFur: false,
        hasScales: false,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/mammals/african-elephant.jpg',
        type_id: mammalType[0]._id
    },
    {
        common_name: 'Gray Wolf',
        science_name: 'Canis lupus',
        region: 'North America, Europe, Asia',
        habitat: 'forest, grasslands, tundra',
        diet: 'carnivore',
        population: 300000,
        hasFur: true,
        hasScales: false,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/mammals/gray-wolf.jpg',
        type_id: mammalType[0]._id
    },
    {
        common_name: 'Koala',
        science_name: 'Phascolarctos cinereus',
        region: 'Australia',
        habitat: 'forest',
        diet: 'herbivore',
        population: 80000,
        hasFur: true,
        hasScales: false,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/mammals/koala.jpg',
        type_id: mammalType[0]._id
    },
    {
        common_name: 'Great White Shark',
        science_name: 'Carcharodon carcharias',
        region: 'Worldwide',
        habitat: 'cold water',
        diet: 'carnivore',
        population: 3500,
        hasFur: false,
        hasScales: false,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/fish/great-white-shark.jpg',
        type_id: fishType[0]._id
    },
    {
        common_name: 'Clownfish',
        science_name: 'Amphiprioninae',
        region: 'Pacific Ocean',
        habitat: 'warm water',
        diet: 'omnivore',
        population: 100000,
        hasFur: false,
        hasScales: true,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/fish/clownfish.jpg',
        type_id: fishType[0]._id
    },
    {
        common_name: 'Salmon',
        science_name: 'Salmo salar',
        region: 'North Atlantic',
        habitat: 'cold water',
        diet: 'omnivore',
        population: 10000000,
        hasFur: false,
        hasScales: true,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/fish/salmon.jpg',
        type_id: fishType[0]._id
    },
    {
        common_name: 'Piranha',
        science_name: 'Pygocentrus nattereri',
        region: 'South America',
        habitat: 'freshwater',
        diet: 'omnivore',
        population: 1000000,
        hasFur: false,
        hasScales: true,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/fish/piranha.jpg',
        type_id: fishType[0]._id
    },
    {
        common_name: 'Komodo Dragon',
        science_name: 'Varanus komodoensis',
        region: 'Indonesia',
        habitat: 'forest, grassland',
        diet: 'carnivore',
        population: 3000,
        hasFur: false,
        hasScales: true,
        isPoisonous: false,
        isVenomous: true,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/reptiles/komodo-dragon.jpg',
        type_id: reptileType[0]._id
    },
    {
        common_name: 'Green Iguana',
        science_name: 'Iguana iguana',
        region: 'Central, South America',
        habitat: 'forest',
        diet: 'herbivore',
        population: 100000,
        hasFur: false,
        hasScales: true,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/reptiles/green-iguana.jpg',
        type_id: reptileType[0]._id
    },
    {
        common_name: 'King Cobra',
        science_name: 'Ophiophagus hannah',
        region: 'Southeast Asia',
        habitat: 'forest',
        diet: 'carnivore',
        population: 50000,
        hasFur: false,
        hasScales: true,
        isPoisonous: false,
        isVenomous: true,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/reptiles/king-cobra.jpg',
        type_id: reptileType[0]._id
    },
    {
        common_name: 'Leopard Gecko',
        science_name: 'Eublepharis macularius',
        region: 'Asia',
        habitat: 'desert',
        diet: 'carnivore',
        population: 1000000,
        hasFur: false,
        hasScales: true,
        isPoisonous: false,
        isVenomous: false,
        isExtinct: false,
        image_url: 'https://www.fakeanimalsdatabase.edu/types/reptiles/leopard-gecko.jpg',
        type_id: reptileType[0]._id
    }
  ]


  
  await Animal.insertMany(animals)
  console.log('============================')
  console.log('ANIMALS are now roaming the wilds, each type is different!')
  console.log('============================')
}

const run = async () => {
  await main()
  db.close()
}

run()