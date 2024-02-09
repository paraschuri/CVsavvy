const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Recruiter = require('../models/recruiterModel');
const SECRET = process.env.SECRET;

const userGithub = async(req,res) => {
    console.log()
    const data = req.body.user
    const {uid,email,displayName} = data
    try{
        let profile = await User.findOne({ githubId: uid });
        if (!profile) {
            const existing = await User.findOne({email:email})
            if(!existing){
                profile = User.create({
                    name: displayName,
                    email: email,
                    githubId: uid,
                });
            }
            else{
                await User.updateOne(
                    { email: email },
                    { $set: { githubId: uid } }
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

const recruiterGithub = async(req,res) => {
    const data = req.body.user
    const {uid,email,displayName} = data
    try{
        let recruiter_profile = await Recruiter.findOne({ githubId: uid });
        if (!recruiter_profile) {
            const existing = await Recruiter.findOne({email:email})
            if(!existing){
                recruiter_profile = Recruiter.create({
                    name: displayName,
                    email: email,
                    githubId: uid,
                });
            }
            else{
                await Recruiter.updateOne(
                    { email: email },
                    { $set: { githubId: uid } }
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

module.exports = { userGithub, recruiterGithub }