/* eslint-disable import/order */
const functions = require('firebase-functions')
const mysql = require('mysql')
const dayjs = require('dayjs')

dayjs.locale('ja')

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

exports.getAllPosts = https.onRequest(async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (!mysqlPool) {
    mysqlPool = mysql.createPool(mysqlConfig)
  }

  const connection = await new Promise((resolve, reject) => {
    mysqlPool.getConnection((error, connection) => {
      if (error) reject(error)
      resolve(connection)
    })
  })

  try {
    const results = await new Promise((resolve, reject) => {
      const query = 'select * from posts order by `updatedAt` desc'
      connection.query(query, (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results)
      })
    })

    res.status(200).send(JSON.stringify(results))
  } catch (err) {
    await new Promise((resolve, reject) => {
      connection.rollback((error, results) => {
        if (error) reject(error)
        resolve(results)
      })
    })
    console.error('!!!!!!!!!!!!!GET ERROR!!!!!!!!!!!!!')
    console.error(err)
    res.status(500).send(err)
  } finally {
    connection.release()
  }
})

exports.getAPost = https.onRequest(async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (!mysqlPool) {
    mysqlPool = mysql.createPool(mysqlConfig)
  }

  const connection = await new Promise((resolve, reject) => {
    mysqlPool.getConnection((error, connection) => {
      if (error) reject(error)
      resolve(connection)
    })
  })

  const { postId } = req.query

  try {
    const results = await new Promise((resolve, reject) => {
      const query =
        'select posts.postId, posts.title, posts.userName, postData.order, postData.position, postData.description, posts.createdAt, posts.updatedAt from posts inner join postData on posts.postId=postData.postId where posts.postId=? order by postData.order'
      connection.query(query, postId, (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results)
      })
    })

    res.status(200).send(JSON.stringify(results))
  } catch (err) {
    await new Promise((resolve, reject) => {
      connection.rollback((error, results) => {
        if (error) reject(error)
        resolve(results)
      })
    })
    console.error('!!!!!!!!!!!!!GET ERROR!!!!!!!!!!!!!')
    console.error(err)
    res.status(500).send(err)
  } finally {
    connection.release()
  }
})

exports.insertPost = https.onRequest(async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (!mysqlPool) {
    mysqlPool = mysql.createPool(mysqlConfig)
  }

  const connection = await new Promise((resolve, reject) => {
    mysqlPool.getConnection((error, connection) => {
      if (error) reject(error)
      resolve(connection)
    })
  })

  const {
    userName = '',
    title = '',
    position1,
    position2,
    position3,
    position4,
    position5,
    position6,
    position7,
    position8,
    position9,
    description1 = '',
    description2 = '',
    description3 = '',
    description4 = '',
    description5 = '',
    description6 = '',
    description7 = '',
    description8 = '',
    description9 = '',
  } = req.query
  const dateStr = dayjs().format('MMssYYDDmm')
  const max = 999
  const min = 100
  const random = String(Math.floor(Math.random() * (max + 1 - min)) + min)
  const postId = `ODR${random}${dateStr}`

  try {
    const results = await new Promise((resolve, reject) => {
      connection.query(
        'insert into posts (postId, userName, title) values (?, ?, ?)',
        [postId, userName, title],
        (error, results) => {
          if (error) {
            reject(error)
          }
          resolve(results)
        }
      )
      const query =
        'insert into postData (`postId`, `order`, `position`, `description`) values (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?)'
      const data = [
        postId,
        1,
        position1,
        description1,
        postId,
        2,
        position2,
        description2,
        postId,
        3,
        position3,
        description3,
        postId,
        4,
        position4,
        description4,
        postId,
        5,
        position5,
        description5,
        postId,
        6,
        position6,
        description6,
        postId,
        7,
        position7,
        description7,
        postId,
        8,
        position8,
        description8,
        postId,
        9,
        position9,
        description9,
      ]
      connection.query(query, data, (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results)
      })
    })

    await new Promise((resolve, reject) => {
      connection.commit((error, results) => {
        if (error) reject(error)
        resolve(results)
      })
    })

    results.postId = postId
    res.status(200).send(JSON.stringify(results))
  } catch (err) {
    await new Promise((resolve, reject) => {
      connection.rollback((error, results) => {
        if (error) reject(error)
        resolve(results)
      })
    })
    console.error('!!!!!!!!!!!!!INSERT ERROR!!!!!!!!!!!!!')
    console.error(err)
    res.status(500).send(err)
  } finally {
    connection.release()
  }
})
