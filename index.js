const express = require("express");
const app = express();

require("dotenv").config();

const connectDB = require("./Database/DB_connect");

const AuthRouter = require("./routes/RouterAuth");
const QuesRouter = require("./routes/RouterQues");

const Auth_MDW = require("./middleware/Auth_mdw");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Leetcode Clone</h1>");
});

// For Login and Registeration
app.use("/api/v1/auth", AuthRouter);

// For Question Creation and Fetching them.
app.use("/api/v1/ques", Auth_MDW,QuesRouter);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DB Connected to Backend");
    app.listen(PORT, () => console.log(`Sever Listening on PORT ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
