const express = require('express')
const router = express.Router()
const upload = require('../middlewares/multer')
const {postClub,getAllClubs,getClub,updateClub,deleteClub} = require('../controllers/clubController')

router.get('/',getAllClubs)

router.get('/:id',getClub)

router.post('/',upload.single("logo"),postClub)

router.delete('/:id',deleteClub)

router.patch('/:id',updateClub)

module.exports = router