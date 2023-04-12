const mongoose = require("mongoose");

const QuesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide Title"],
    maxlength: 50,
  },
  description: {
    type: String,
    required: [true, "Please Provide Description"],
    maxlength: 150,
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, "Please Provide Input Test Case"],
      },
      output: {
        type: String,
        required: [true, "Please Provide Output Test Case"],
      },
    },
  ],
    // To Associate Every Created Ques to a User 
    createdBy:{
        type: mongoose.Types.ObjectId
    }
});

module.exports = mongoose.model("Ques", QuesSchema);
