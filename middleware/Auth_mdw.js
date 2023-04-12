const jwt = require("jsonwebtoken");
const { UnauthenticatedErr } = require("../errors/Errors");

const AuthMdw = (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedErr("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user_validInfo = { userId: payload.userId, userName: payload.name };
    next();
  } catch (err) {
    throw new UnauthenticatedErr(
      "Authentication Invalid " + "Message => " + err.message
    );
  }
};

module.exports = AuthMdw;
