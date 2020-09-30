const argv = require('minimist')(process.argv.slice(2), {alias: {'shift': 's', 'input': 'i', 'output': 'o', 'action': 'a'}});
const coder = require('./coder');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');

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

if (input) {
    fs.readFile(input, 'utf8', (err, text) => {
        if (err) {
            console.error("Can't read file", err);
            process.exit(0);
        }
        const result = coder.caesarShift(text, shift);
        console.log(result);
        stdout(result);
    });
} else {
    rl.question("Please input a text: ", (text) => {
        const result = coder.caesarShift(text, shift);
        console.log(result);
        stdout(result);
        rl.close();
    });
}

function stdout(text) {
    if (output) {
        fs.access(output, fs.F_OK, err => {
            if (err) {
                console.error("Can't write file", err);
                process.exit(0);
            }
            console.log("file exists")

            fs.appendFile(output, text, err => {
                if (err) {
                    console.error("Can't write file", err);
                    process.exit(0);
                }
                console.log("success write")
            });
        })
    }
}