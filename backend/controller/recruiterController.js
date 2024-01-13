const Recruiter = require('../models/recruiterModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET;
const createToken = (_id) => {
    return jwt.sign({ _id }, SECRET, { expiresIn: '3d' })
}

const loginRecruiter = async (req, res) => {

    const { email, password} = req.body
    try {
        const recruiter = await Recruiter.login(email, password)

        const token = createToken(recruiter._id);
        const name = recruiter.name
        res.status(200).json({ name, token })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}   

const signupRecruiter = async (req, res) => {

    const { email, password, name } = req.body
    try {
        const recruiter = await Recruiter.signup(email, password, name)

        const token = createToken(recruiter._id);

        res.status(200).json({ name, token })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = { signupRecruiter, loginRecruiter }