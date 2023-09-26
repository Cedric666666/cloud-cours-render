const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_cours_cl', // Database name
  'cloud_cours_cl_user', // User
  'jewo41A5q2NklNsbPoHW7Fil89zLF5nS', // Password
  {
    host: 'dpg-ck9d0vpehpqs73c3ort0-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
