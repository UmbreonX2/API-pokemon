const api = require('./api')

async function main(){
    try {
        const result = await api.obterPokemon('')
        const names = []

        console.time('for')
        for(let i=0; i<= result.results.length -1; i++){
            const pokemon = result.results[i]
            names.push(pokemon.name) 
        }
        console.timeEnd('for')
        console.log('Nomes:',names)


    } catch (error) {
        console.log('ERROUUU', error)
    }
}

main()