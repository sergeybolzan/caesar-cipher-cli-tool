const path = require("path");
const fs = require("fs");
const {Transform} = require("stream");
const cipher = require("./cipher");
const endProcessWithErrorMessage = require("./error");

module.exports = {
    createInputStream: (input) => input
        ? fs.createReadStream(path.resolve(__dirname, "../", input))
            .on("error", () => endProcessWithErrorMessage("Can't read file"))
        : process.stdin,

    createTransformStream: (shift) => new Transform({
        transform: (chunk, _, callback) => callback(null, cipher(chunk.toString(), shift))
    }),

    createOutputStream: (output) => {
        let stream;
        if (output) {
            const outputPath = path.resolve(__dirname, "../", output);
            if (!fs.existsSync(outputPath)) {
                endProcessWithErrorMessage("Can't write file");
            }
            stream = fs.createWriteStream(outputPath, {flags: "a"})
                .on("error", () => endProcessWithErrorMessage("Can't write file"))
        } else {
            stream = process.stdout;
        }
        return stream;
    }
};