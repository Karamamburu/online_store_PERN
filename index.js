import dotenv from 'dotenv'
import express from 'express'
import sequelize from './db.js';
import * as models from './models.js/models.js'

// dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()

console.log(sequelize.config)
const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

  } catch (error) {
    console.error(error)
  }
}

start()