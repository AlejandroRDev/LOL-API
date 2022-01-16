const ClassesRoutes = require('express').Router()
const { isAuth } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const { getAllClasses, getClass, postNewClass } = require('./classes.controller')


ClassesRoutes.get('/', getAllClasses)
ClassesRoutes.get('/:id', getClass)
ClassesRoutes.post('/newClass', postNewClass)

module.exports = ClassesRoutes