const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=f5bdaac7a31b562ba66dda5af915930f&unit=imperial"
    
    https.get(url, function(response){ 
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            console.log(weatherData);
            
        })

    });

    res.send("Server is up and running.")
})





app.listen(3000, function() {
console.log("Server is running on port 3000.");
})