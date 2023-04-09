const jwt = require("jsonwebtoken");
const { UnauthenticatedErr } = require("../errors/Errors");

const AuthMdw = (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedErr("Authentication Invalid");
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user_validInfo = { userId: payload.userId, userName: payload.name };
  } catch (err) {
    throw new UnauthenticatedErr(
      "Authentication Invalid " + "Message => " + err.message
    );
  }
};

module.exports = AuthMdw;
