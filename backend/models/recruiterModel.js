const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const recruiterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
})

recruiterSchema.statics.signup = async function (email,password,name){
    if(!email || !password || !name){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Enter a valid email")
    }
    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already registered')
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    
    const user = await this.create({email,password:hash,name})
    return user
}

recruiterSchema.statics.login = async function (email,password){
    if(!email || !password){
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error('Account does not exist')
    }

    const match = await bcrypt.compare(password,user.password)
    
    if(!match){
        throw Error("Incorrect password")
    }

    return user
}

module.exports = mongoose.model('Recruiter',recruiterSchema)
