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
        console.log('statusCode:', response.statusCode);
         

        response.on('data', function(data) {
            // console.log(data)
            coJSON.parse(data)
        })
    } )
    

    res.send('server is up and running')
})


app.listen(3000, function () {
    console.log('server is running on port 3000')
});