const ClassesRoutes = require('express').Router()
const { isAuth } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const { getAllClasses, getClass, patchClass } = require('./classes.controller')


ClassesRoutes.get('/', getAllClasses)
ClassesRoutes.get('/:id', getClass)

module.exports = ClassesRoutes