const { StatusCodes } = require("http-status-codes");

class CustomErr extends Error {
  constructor(message) {
    super(message);
  }
}

class NotFoundErr extends CustomErr {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

class BadRequestErr extends CustomErr {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

class UnauthenticatedErr extends CustomErr {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = {
  NotFoundErr,
  BadRequestErr,
  UnauthenticatedErr,
};
