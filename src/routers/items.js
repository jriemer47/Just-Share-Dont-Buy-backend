const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/items')


// links controllers folder to getAll function
router.get('/', ctrl.getAll)





module.exports = router