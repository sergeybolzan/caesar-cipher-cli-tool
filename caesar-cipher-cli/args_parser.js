const argv = require("minimist")(process.argv.slice(2), {alias: {"shift": "s", "input": "i", "output": "o", "action": "a"}});

let shift = argv["shift"];
const action = argv["action"];
const input = argv["input"];
const output = argv["output"];

if (!Number.isInteger(shift)) {
    console.error("Please add correct shift option");
    process.exit(-1);
}

if (action !== "encode" && action !== "decode") {
    console.error("Please add correct action option");
    process.exit(-1);
}

if (action === "decode") {
    shift = -shift;
}

module.exports = {
    shift,
    input,
    output
}