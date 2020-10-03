const {pipeline} = require("stream");
const options = require("./args_parser");
const {createInputStream, createTransformStream, createOutputStream} = require("./streams");

pipeline(
    createInputStream(options.input),
    createTransformStream(options.shift),
    createOutputStream(options.output),
    () => {
        console.log("Cipher successfully applied");
        process.exit(0);
    }
);