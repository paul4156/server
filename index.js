var MyError = require("paul4156-base/js-error");

module.exports = function () {
  throw new MyError("My error message");
};
