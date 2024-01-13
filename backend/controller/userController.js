const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET;
const createToken = (_id) => {
    return jwt.sign({ _id }, SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {

    const { email, password} = req.body
    try {
        const user = await User.login(email, password)

        const token = createToken(user._id);
        const name = user.name
        res.status(200).json({ name, token })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
        console.log(err.message)
    }
}   

const signupUser = async (req, res) => {

    const { name, email, password } = req.body
    console.log(name,email,password)
    try {
        const user = await User.signup(name,email,password)

        const token = createToken(user._id);

        res.status(200).json({ name, token })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = { signupUser, loginUser }