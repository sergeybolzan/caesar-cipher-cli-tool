const fs = require("fs");
const {Transform} = require("stream");
const cipher = require("./cipher");
const endProcessWithErrorMessage = require("./error");

module.exports = {
    createInputStream: (input) => input
        ? fs.createReadStream(input)
            .on("error", () => endProcessWithErrorMessage("Can't read file"))
        : process.stdin,

    createTransformStream: (shift) => new Transform({
        transform: (chunk, _, callback) => callback(null, cipher(chunk.toString(), shift))
    }),

    createOutputStream: (output) => {
        let stream;
        if (output) {
            if (!fs.existsSync(output)) {
                endProcessWithErrorMessage("Can't write file");
            }
            stream = fs.createWriteStream(output, {flags: "a"})
                .on("error", () => endProcessWithErrorMessage("Can't write file"))
        } else {
            stream = process.stdout;
        }
        return stream;
    }
};