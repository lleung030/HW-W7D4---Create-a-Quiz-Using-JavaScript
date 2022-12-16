const [clientId, clientSecret] = ['43e153b764bb403f95af54208af72719', '5808c14e4b714637baa4123aa8efc8ac']

// const getToken = () =>{
//     return fetch('https://accounts.spotify.com/api/token', {
//         method : 'POST',
//         body : 'grant_type=client_credentials',
//         headers : {
//             Authorization : `Basic ${btoa(clientId + ':' + clientSecret)}`,
//             'Content-Type' : 'application/x-www-form-urlencoded'
//         }        
//     })
//     .then((res) => res.json())
//     .then((data) => data.access_token)
//     .catch((error) => error)
// }

// // getToken()
// //     .then((message) => console.log(`\nAccess Token: ${message}`))
// //     .catch((error) => console.log(error))

// // const getToken = async () =>{
// //     return await fetch('https://accounts.spotify.com/api/token', {
// //         method : 'POST',
// //         body : 'grant_type=client_credentials',
// //         headers : {
// //             Authorization : `Basic ${btoa(clientId + ':' + clientSecret)}`,
// //             'Content-Type' : 'application/x-www-form-urlencoded'
// //         }        
// //     })
// //     const data = await result.json()
// //     return data.access_token
// // }


// const getSong = async (track, artist) => {
//     const result = await fetch(`https://api.spotify.com/v1/search?q=${track},${artist}&type=track,artist&limit=5`,{
//         method:'GET',
//         headers:{
//             Authorization: `Bearer ${await getToken()}`,
//             "Content-Type": 'application/json'
//         }
//     })
//     const data = await result.json()
//     return data.tracks.items[0].preview_url
// }

// const clickedEvent = async (figId) => {
//     const imgIndex = parseInt(figId.slice(-1)) -1
//     const [song, artist] = document.getElementsByTagName('img')[imgIndex].alt.split(' - ')
//     preview_url = await getSong(song, artist)
//     console.log(`Url for ${song} ${artist} ${preview_url}`)
//     // console.log(song, artist)
//     if(playSong){
//         playSong.pause()
//     }
//     startSong(preview_url)
// }

// let playSong

// const startSong = (url) => {
//     let playSong = new Audio(url)
//     return playSong.play()
// }

// const stopSong = () => {
//     playSong.pause()
// }


const getToken = () => {
    return fetch('https://accounts.spotify.com/api/token', {
    method : 'POST',
    body : 'grant_type=client_credentials',
    headers : {
        Authorization : `Basic ${btoa(clientId + ':' + clientSecret)}`,
        "Content-Type" : 'application/x-www-form-urlencoded'

    }
})
    .then((res) => res.json())
    .then((data) => data.access_token)
    .catch((error) => error)

 }

 getToken()
    .then((message) => console.log(`\nAccess Token: ${message}`))
    .catch((error) => console.log(error))



const getSong = async (track, artist) => {
    const result = await fetch(`https://api.spotify.com/v1/search?q=${track},${artist}&type=track,artist&limit=5`,{
        method:'GET',
        headers:{
            Authorization: `Bearer ${await getToken()}`,
            "Content-Type": 'application/json'
        }
    })
    const data = await result.json()
    return data.tracks.items[0].preview_url
}

const clickedEvent = async (figId) => {
    const imgIndex = parseInt(figId.slice(-1)) -1
    const [song, artist] = document.getElementsByTagName('img')[imgIndex].alt.split(' - ')
    preview_url = await getSong(song, artist)
    console.log(`Url for ${song} ${artist} ${preview_url}`)
   if(playSong){
        playSong.pause()
   }
    startSong(preview_url)
}

let playSong

const startSong = (url) => {
    playSong = new Audio(url)
    return playSong.play()
}

const stopSong = () => {
    playSong.pause()
}