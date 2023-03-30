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

const api = require('./api')

async function main(){
    try {
        const result = await api.obterPokemon('venusaur')
        const names = []


        // for(let i=0; i<= Object.keys(result.data).length -1; i++){
        //     const pokemon = result.results[i]
        //     names.push(pokemon.name) 
        // }

        // console.log('Nomes:',names)

        console.log(result.data.forms[0].name);

        console.log(Object.keys(result.data).length)


        const results = [
            "dsjaiodsajiod",
            "dsjaiodsajiod",
            "dsjaiodsajiod",
            "dsjaiodsajiod",
            "dsjaiodsajiod",
            "dsjaiodsajiod",
            "dsjaiodsajiod",
            "dsjaiodsajiod",
            "dsjaiodsajiod",
            "dsjaiodsajiod",
            "dsjaiodsajiod",
        ]
    } catch (error) {
        console.log('ERROUUU', error)
    }
}

main()
