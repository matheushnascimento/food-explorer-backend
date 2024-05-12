const {Router} = require('express')

const UsersController = require('../controllers/UsersController.js');


const usersRoutes = new Router()
const usersController = new UsersController()

usersRoutes.get('/', usersController.create)

module.exports = usersRoutes;




