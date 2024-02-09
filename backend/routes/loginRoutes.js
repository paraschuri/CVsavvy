const express = require('express')

const router = express.Router()
const {signupUser,loginUser} = require('../controller/userController')
const {signupRecruiter,loginRecruiter} = require('../controller/recruiterController')
const {userGoogle,recruiterGoogle} = require('../controller/googleController')
const {userGithub,recruiterGithub} = require('../controller/githubController')

router.post('/login/user',loginUser)

router.post('/signup/user',signupUser)

router.post('/login/recruiter',loginRecruiter)

router.post('/signup/recruiter',signupRecruiter)

router.post('/login/user/google',userGoogle)

router.post('/login/recruiter/google',recruiterGoogle)

router.post('/login/user/github',userGithub)

router.post('/login/recruiter/github',recruiterGithub)

module.exports = router