const SubclassesRoutes = require('express').Router()
const { isAuth } = require('../../middlewares/auth')
const { getAllSubclasses, getSubclass, postNewSubclass} = require('./subclasses.controller')


SubclassesRoutes.get('/', getAllSubclasses)
SubclassesRoutes.get('/:id', getSubclass)




module.exports =  SubclassesRoutes 