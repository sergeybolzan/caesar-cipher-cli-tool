const fs = require("fs");
const {Transform} = require("stream");
const cipher = require("./cipher");

module.exports = {
    createInputStream: (input) => input
        ? fs.createReadStream(input)
            .on("error", () => {
                console.error("Can't read file");
                process.exit(-1);
            })
        : process.stdin,

    createTransformStream: (shift) => new Transform({
        transform: (chunk, _, callback) => callback(null, cipher(chunk.toString(), shift))
    }),

    createOutputStream: (output) => {
        let stream;
        if (output) {
            if (!fs.existsSync(output)) {
                console.error("Can't write file");
                process.exit(-1);
            }
            stream = fs
                .createWriteStream(output, {flags: "a"})
                .on("error", () => {
                    console.error("Can't write file");
                    process.exit(-1);
                })
        } else {
            stream = process.stdout;
        }
        return stream;
    }
};