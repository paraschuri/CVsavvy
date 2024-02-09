const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Recruiter = require('../models/recruiterModel');
const SECRET = process.env.SECRET;

const userGoogle = async(req,res) => {
    console.log()
    const data = req.body.user
    const {uid,email,displayName} = data
    try{
        let profile = await User.findOne({ googleId: uid });
        if (!profile) {
            const existing = await User.findOne({email:email})
            if(!existing){
                profile = User.create({
                    name: displayName,
                    email: email,
                    googleId: uid,
                });
            }
            else{
                await User.updateOne(
                    { email: email },
                    { $set: { googleId: uid } }
                );
            }
        }
        const token = jwt.sign({ userId: profile._id }, SECRET, { expiresIn: '3d' });
        res.status(200).json({name:displayName, token })
    }
    catch(error){
        res.status(401).json({error:error.message})
    }
}

const recruiterGoogle = async(req,res) => {
    const data = req.body.user
    const {uid,email,displayName} = data
    try{
        let recruiter_profile = await Recruiter.findOne({ googleId: uid });
        if (!recruiter_profile) {
            const existing = await Recruiter.findOne({email:email})
            if(!existing){
                recruiter_profile = Recruiter.create({
                    name: displayName,
                    email: email,
                    googleId: uid,
                });
            }
            else{
                await Recruiter.updateOne(
                    { email: email },
                    { $set: { googleId: uid } }
                );
            }
        }
        const token = jwt.sign({ userId: recruiter_profile._id }, SECRET, { expiresIn: '3d' });
        res.status(200).json({ name: displayName, token })
    }
    catch(error){
        res.status(401).json({error:error.message})
    }
}

module.exports = { userGoogle, recruiterGoogle }