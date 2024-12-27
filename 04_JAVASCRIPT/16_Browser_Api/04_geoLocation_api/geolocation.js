navigator.geolocation.getCurrentPosition((data) =>{
    console.log(data)
})

navigator.geolocation.getCurrentPosition((data) =>{
    console.log(data.coords.latitude)
})