const express = require('express')
const router = express.Router()
const {getAllManagers,getManager,postManager,updateManager,deleteManager} = require('../controllers/managerController')

router.get('/',getAllManagers)

router.get('/:id',getManager)

router.post('/',postManager)

router.delete('/:id',deleteManager)

router.patch('/:id',updateManager)

module.exports = router