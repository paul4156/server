var myFunction = require("./index");
const JsError = require("paul4156-base/js-error");

try {
  myFunction();
} catch (error) {
  if (error instanceof JsError) {
    console.error("caught");
  } else {
    console.error("missed");
  }
}
