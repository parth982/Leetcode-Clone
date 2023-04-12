const Ques = require("../models/Questions");
const {StatusCodes} = require('http-status-codes');

const GetAllQues = async (req, res) => {
    const ques = await Ques.find({createdBy: req.user_validInfo.userId}).sort('createdAt');
    res.status(StatusCodes.OK).json({ques, count: ques.length,msg:'All Ques Created by user are as below:'});
};

module.exports = GetAllQues;