const ChampionsRoutes = require ('express').Router()
const { isAuth} = require ('../../middlewares/auth')
const upload = require('../../middlewares/file')

const { postNewChampion, getAllChampion, getChampion, patchChampion } = require('./champions.controller')
ChampionsRoutes.get('/', getAllChampion)
ChampionsRoutes.get('/:id', getChampion)
ChampionsRoutes.post('/newChampion', [isAuth], upload.single('img'), postNewChampion)


module.exports = ChampionsRoutes






