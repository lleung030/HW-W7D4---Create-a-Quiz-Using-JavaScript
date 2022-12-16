// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png

const mockFetch = function(url, accept) {
    return new Promise((resolve, reject) => {
        //Where your asynchoronous code goes - things that we don't know for sure will happen immediately -- anything that does not take an instaneous amount of time
        setTimeout(() => {
            //This piece of code runs after 5 seconds
            //Mocks the program waitng for a response from a server
            if (accept) {
                resolve('Hello World')
            } else{
                reject('Error')
            }
        }, 5000)
    })
}

mockFetch('https://example.org', false)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => console.log(err))

mockFetch('https://example.org', true)
.then((response) => {
    console.log(response)
})
.catch((err) => console.log(err))

/*
Find th efirst evolution of the given pokemon
*/

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((response) => response.json())
    .then((pokemonData) =>{
        const speciesUrl = pokemonData.species.url
        
        fetch(speciesUrl)
        .then((response) => response.json())
        .then((speciesData) =>{
            const evolutionUrl = speciesData.evolution_chain.url

            fetch(evolutionUrl)
                .then((response) => response.json())
                .then((evolutionData) => {
                    console.log(evolutionData.chain.species.name)
                    console.log(`The first evolution is ${evolutionData.chain.species.name}`)
                })
        })
    })


/*
Async/Await
same way of doing it but easier
*/

const getFirstEvolution = async function(pokemonName) {
    
    try {
        const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const pokemonData = await response.json()

        const speciesUrl = pokemonData.species.url

        const speciesResponse = await fetch(speciesUrl)
        const speciesData = await speciesResponse.json()

        const evolutionUrl = species.evolution_chain.url

        const evolutionResponse = await fetch(evolutionUrl)
        const evolutionData = await evolutionResponse.json()

        console.log(`The first evolution is ${evolutionData.chain.species.name}`)
    
    }   
    catch (err) {
        console.log('There is an error')
        console.log(err)
    }
}

getFirstEvolution('pikachu')
getFirstEvolution('pikachu2')

mockFetch('https://example.org', false)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => console.log(err))

mockFetch('https://example.org', true)
.then((response) => {
    console.log(response)
})
.catch((err) => console.log(err))


const mockFetch2 = async function() {
    
    try {
        const response  = await fetch(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
        const driverData = await response.json()

        const limitData = driverData.MRData.limit

        console.log(limitData)
        
        // console.log(driverData)
    }   
    catch (err) {
        console.log('There is an error')
        console.log(err)
    }
}

mockFetch2()
