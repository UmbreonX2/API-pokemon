const axios = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon/'

async function obterPokemon(pokemon){
  const urlAPI = `${URL}/${pokemon}`
  const response = await axios.get(urlAPI) 
  return response.data 
   return response   
}

module.exports ={ obterPokemon }

// obterPokemon('ditto')
//     .then(function(resultado){
//         console.log('Nome Solicitado:', resultado)
//     })
//     .catch(function(error){
//         console.error('QUEBROU!',error)
//     })
