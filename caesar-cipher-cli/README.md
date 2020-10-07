# Caesar cipher CLI tool

Caesar cipher CLI tool is a tool that will encode and decode a text by Caesar cipher.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the tool.

```bash
npm install
```

## Usage

To run the tool enter the following command in the CLI:

```bash
node my_caesar_cli -a encode -s 1
``` 

where `-a` is an action (encode or decode) and `-s` is a shift.
These options are mandatory.

To encrypt text from a file add `-i` option with the filename:

```bash
node my_caesar_cli -a encode -s 1 -i i.txt
``` 

To save the text to a file add `-o` option with the filename:

```bash
node my_caesar_cli -a encode -s 1 -o o.txt
```

List of all options (short alias and full name):
1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode