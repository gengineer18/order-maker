const functions = require('firebase-functions')
const mysql = require('mysql')
const https = functions.region('asia-northeast1').https

const connectionName = functions.config().db.connection
const dbUser = functions.config().db.user
const dbPassword = functions.config().db.password
const dbName = functions.config().db.name

const mysqlConfig = {
  connectionLimit: 1,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  timezone: 'jst',
}

if (process.env.NODE_ENV === 'production') {
  mysqlConfig.socketPath = `/cloudsql/${connectionName}`
}

let mysqlPool

exports.mysqlDemo = https.onRequest((req, res) => {
  if (!mysqlPool) {
    mysqlPool = mysql.createPool(mysqlConfig)
  }

  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
  res.set('Access-Control-Allow-Headers', 'Content-Type, authorization')

  mysqlPool.query('select * from users', (err, results) => {
    if (err) {
      console.error(err)
      res.status(500).send(err)
    } else {
      res.send(JSON.stringify(results))
    }
  })
})

// exports.mysqlDemo2 = https.onRequest(async (req, res) => {
//   if (!mysqlPool) {
//     mysqlPool = mysql.createPool(mysqlConfig)
//   }

//   res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
//   res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
//   res.set('Access-Control-Allow-Headers', 'Content-Type, authorization')

//   const min = 10000000000
//   const max = 99999999999

//   const randomId = Math.floor(Math.random() * (max + 1 - min)) + min

//   await mysqlPool.query(
//     'insert into users (id, firstName, familyName) values (?, ?, ?)',
//     [randomId, 'test', 'user'],
//     (err, results) => {
//       console.log('test1', results)
//       if (err) {
//         console.log('test2', results)
//         mysqlPool.rollback(() => mysqlPool.release())
//       } else {
//         mysqlPool.commit((err) => {
//           if (err) {
//             console.log('test3', results)
//             mysqlPool.rollback(() => mysqlPool.release())
//           } else {
//             console.log('test4', results)
//             mysqlPool.release()
//           }
//         })
//       }
//     }
//   )
//   res.send({ data: 'hoge' })
// })
