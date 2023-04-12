const express = require("express");
const router = express.Router();

const GetAllQues = require("../controllers/GetAllQues_logic");
const CreateQues = require("../controllers/CreateQues_logic");

router.route("/AllQues").get(GetAllQues);
router.route("/GenQues").post(CreateQues);

module.exports = router;
