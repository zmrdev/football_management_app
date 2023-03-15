const express = require('express')
const router = express.Router()
const {getAllPlayers,getPlayer,postPlayer,updatePlayer,deletePlayer} = require('../controllers/playerController')

router.get('/',getAllPlayers)

router.get('/:id',getPlayer)

router.post('/',postPlayer)

router.delete('/:id',deletePlayer)

router.patch('/:id',updatePlayer)

module.exports = router