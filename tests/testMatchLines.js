// Tests if codejudge successfully compiles and runs a C program
// that does not require any user input.

function runTest() {
  lib.sendToMaster('MatchLines');
}

function checkResponse(data) {
  if (data.trim() === "1")
    lib.success("testMatchLines.js");
  else
    lib.fail("testMatchLines.js: Expected 1 but received " + data);
}

module.exports.runTest = runTest;
module.exports.checkResponse = checkResponse;