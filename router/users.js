const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/users', userController.index)

  router.post('/user', userController.store)

  router.put('/user/:id', userController.update)

  router.delete('/user/:id', userController.delete)

  module.exports = router