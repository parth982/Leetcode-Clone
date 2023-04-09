const { StatusCodes } = require("http-status-codes");

const ErrHandlerMdw = (err, req, res, next) => {
  let customError = {
    mesg: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    statusCode: err.message || "Something Went Wrong Try Again Later",
  };
  // Handling Validation Of Inputs Error while Registeration with Proper Response [Validation Error]
  // Because we didnt handle that in the controller register_logic.js
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }

  // Handling Duplication of Email Error while Registeration with Proper Response [Duplication Error]
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate Value Entered for ${Object.keys(
      err.keyValue
    )} field, Please Choose another Value`;
    customError.statusCode = 400;
  }

  return res.status(customError.mesg).json({ Message: customError.mesg });
};
