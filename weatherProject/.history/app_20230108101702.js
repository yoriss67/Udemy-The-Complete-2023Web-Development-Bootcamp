const express = require('express');
// 👩‍🎓nodeの中のものなので新規install必要なし
const https = require('node:https');

const app = express();


app.get('/', function (req, res) {

    // 👩‍🎓絶対「https」入れる
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=9587befcd671d9b68920184868fb6b5d&units=metric'
    // 「response」なのは重複を避けるため
    https.get(url,function(response) {
        // console.log(response)
        console.log(response.statusCode);
         

        response.on('data', function(data) {

            // これだとhexadecimal
            // console.log(data)

            const weatherData = JSON.parse(data);
            console.log(weatherData);


            // const object = {
            //     name: "yoriss67l",
            //     favFood: "yogurt"
            // }
            // console.log(JSON.stringify(object));
            

            const temp = weatherData.main.temp
            console.log(temp)

            const desc = weatherData.weather[0].description
            console.log(desc)

            // 👩‍🎓ここが「response」じゃなく「res」なのはhttpじゃなく全体のアプリを指しているから
            res.send(`<h1>The temperature in London is ${temp} deg C</h1>`)

            

        })
    } )

    app.get('/', function (req, res) {
        res.send(`The current weather is ${}`)
    })
    
    

    // res.send('TCPコネクション上に「ストリーム」という仮想通信経路')
    // res.send('server is up and running')
})




app.listen(3000, function () {
    console.log('server is running on port 3000')
});