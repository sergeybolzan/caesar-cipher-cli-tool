const argv = require("minimist")(process.argv.slice(2), {alias: {"shift": "s", "input": "i", "output": "o", "action": "a"}});

const input = argv["input"];
const output = argv["output"];
const action = argv["action"];
const shift = argv["shift"] * (action === "encode" ? 1 : -1);

if (!Number.isInteger(shift)) {
    console.error("Please add correct shift option");
    process.exit(-1);
}

if (action !== "encode" && action !== "decode") {
    console.error("Please add correct action option");
    process.exit(-1);
}

module.exports = {
    input,
    output,
    action,
    shift
}