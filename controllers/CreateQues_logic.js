const Ques = require("../models/Questions");
const {StatusCodes} = require('http-status-codes');

const CreateQues = async (req, res) => {
    req.body.createdBy = req.user_validInfo.userId;
    const ques = await Ques.create(req.body);
    res.status(StatusCodes.CREATED).json({ques,msg:'Successfully Created Question'});
};

module.exports = CreateQues;