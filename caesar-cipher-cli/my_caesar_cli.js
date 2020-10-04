const {pipeline} = require("stream");
const options = require("./args_parser");
const {createInputStream, createTransformStream, createOutputStream} = require("./streams");

pipeline(
    createInputStream(options.input),
    createTransformStream(options.shift),
    createOutputStream(options.output),
    (err) => {
        if (err) {
            console.error('Something went wrong', err);
        } else {
            console.log("Cipher successfully applied");
        }
    }
);