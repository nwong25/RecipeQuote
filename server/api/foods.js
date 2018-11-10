const router = require('express').Router()
const {Food} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const foodItems = await Food.findAll()
    res.json(foodItems)
  } catch (err) {
    next(err)
  }
})

module.exports = router
