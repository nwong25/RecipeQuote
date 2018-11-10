const router = require('express').Router()
const {Food} = require('../db/models')
const axios = require('axios')

router.get('/:search', async (req, res, next) => {
  try {
    console.log(req.params.search)
    const url = `https://api.edamam.com/search?q=${
      req.params.search
    }&app_id=fd721777&app_key=7162062d5e79210452cd7df45c2196b5`
    const response = await axios.get(url)
    const recipe = response.data
    res.send(recipe)
  } catch (err) {
    next(err)
  }
})

module.exports = router
