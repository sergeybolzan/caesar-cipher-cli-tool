const argv = require('minimist')(process.argv.slice(2), {alias: {'shift': 's', 'input': 'i', 'output': 'o', 'action': 'a'}});
const coder = require('./coder');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs').promises;

const input = argv["input"];
const output = argv["output"];
const action = argv["action"];
const shift = argv["shift"] * (action === 'encode' ? 1 : -1);

console.log(shift, input, output, action);

if (!Number.isInteger(shift)) {
    console.error("Please add shift option");
    process.exit(0);
}

if (action !== "encode" && action !== "decode") {
    console.error("Please add action option");
    process.exit(0);
}

main();
async function main() {
    let text;
    if (input) {
        try {
            text = await fs.readFile(input, 'utf8');
        } catch (err) {
            console.error("Can't read file");
            process.exit(0);
        }
        await write(text);
        process.exit(0);
    } else {
        console.log("Please input a text:");
        for await (text of rl) await write(text);
    }
}

async function write(text) {
    const result = coder.caesarShift(text, shift);
    if (output) {
        try {
            await fs.access(output, fs.F_OK);
            await fs.appendFile(output, result);
        } catch (err) {
            console.error("Can't write file");
        }
    } else {
        console.log(result);
    }
}