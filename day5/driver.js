
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
