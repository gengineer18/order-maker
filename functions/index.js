// index.js
const cors = require('cors')
const express = require('express')
const functions = require('firebase-functions')
// Expressの読み込み

const app = express()

app.use(cors())

app.get('/hello', (req, res) => {
  // レスポンスの設定
  res.send({ res: 'Hello Express!!!!!!' })
})

// 出力
const api = functions.region('asia-northeast1').https.onRequest(app)
module.exports = { api }
