const argv = require("minimist")(process.argv.slice(2), {alias: {"shift": "s", "input": "i", "output": "o", "action": "a"}});
const endProcessWithErrorMessage = require("./error");

const action = argv["action"];
const shift = argv["shift"];
const input = argv["input"];
const output = argv["output"];

if (action !== "encode" && action !== "decode") {
    endProcessWithErrorMessage("Please add correct action option");
}

if (!Number.isInteger(shift)) {
    endProcessWithErrorMessage("Please add correct shift option");
}

module.exports = {
    shift: action === "encode" ? shift : -shift,
    input,
    output
}