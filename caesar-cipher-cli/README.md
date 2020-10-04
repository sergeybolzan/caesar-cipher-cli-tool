# Caesar cipher CLI tool

To run the tool enter the following command in the CLI:

```bash
node my_caesar_cli -a encode -s 1
``` 

where `-a` is an action (encode or decode) and `-s` is a shift.
These options are mandatory.

To encrypt text from a file add `-i` option with the filename:

```bash
node my_caesar_cli -a encode -s 1 -i input.txt
``` 

To save the text to a file add `-o` option with the filename:

```bash
node my_caesar_cli -a encode -s 1 -o option.txt
```

List of all options (short alias and full name):
1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode