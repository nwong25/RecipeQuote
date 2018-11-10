const Sequelize = require('sequelize')
const db = require('../db')

const Food = db.define('food', {
  category: {
    type: Sequelize.STRING
  },
  brand: {
    type: Sequelize.STRING
  },
  food: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING
  }
})

module.exports = Food
