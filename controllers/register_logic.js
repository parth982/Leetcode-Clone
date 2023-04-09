const User = require('../models/Users');
const {StatusCodes} = require('http-status-codes');

const Register = async (req,res)=>{
    const user_doc = await User.create({...req.body});
    const token = user_doc.createJWT();
    res.status(StatusCodes.CREATED).json({user:{name:user_doc.name},token});
}

module.exports = Register;