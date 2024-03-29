const router = require('express').Router()
const UserController = require('../controllers/user')

router.post('/login', UserController.login)
router.get('/logout', UserController.logout)
router.post('/register', UserController.register)

module.exports = router