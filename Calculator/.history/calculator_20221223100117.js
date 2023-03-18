// ESLintはJavaScriptコードのエラーチェックを行うLinterと呼ばれるツールの一つです。
// jshint esversion:6


const express = require('express');

// 👩‍🎓So, by using Body Parser, we're able to parse the HTTP request that we get,
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    // console.log(req)
    // console.log(2 + 5)
    // res.send('<h2>227の6:0vvvvvvvvvv0くらいだよ</h2>')
    res.sendFile(__dirname + "/index.html");
    // 別のフォルダー
    // res.sendFile(__dirname + "/children/index.html");
});

app.post('/', function (req, res) {
    //   var num1 = Number(req.body.num1);
    //   var num2 = Number(req.body.num2);
    //   var result = num1+num2;

    //   res.send(String(result));

      var num1 =req.body.num1;
      var num2 =req.body.num2;
      var result = num1 + num2;



    // console.log(req.body.num1 + req.body.num2)

    res.send('The result of calculation!!!!!');
});









// 📄listenしないと、、ねえ、起きませんよ！
app.listen(3000, function () {
    console.log('これでrunされてる　on port 3000')
});