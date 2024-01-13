const express = require('express')

const router = express.Router()
const {signupUser,loginUser} = require('../controller/userController')
const {signupRecruiter,loginRecruiter} = require('../controller/recruiterController')


router.post('/login/user',loginUser)

router.post('/signup/user',signupUser)

router.post('/login/recruiter',loginRecruiter)

router.post('/signup/recruiter',signupRecruiter)

module.exports = router