/*
 ドキュメントを元に作成
*/
var express = require('express')

// アプリケーションオブジェクトの作成
var app = express()

// ミドルウェアの定義
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  // 次のミドルウェアへ
  next()
}

// ミドルウェアの読み込み
app.use(myLogger)

// パスを限定してミドルウェアを適用
app.get('/', function (req, res) {
  // ミドルウェア関数の連鎖はここでおしまい
  res.send('Hello World!')
})

app.listen(3000)