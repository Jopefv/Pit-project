const express = require('express');
const router = express.Router();
const cors = require('cors')
const { test, registerUser, registerCompany } = require('../controllers/authController')

//middleware
router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
)

router.get('/', test)
router.post('/registerUser', registerUser)
router.post('/registerCompany', registerCompany)

module.exports = router