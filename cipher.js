const ALPHABET_UPPERCASE_START_CODE = 65;
const ALPHABET_UPPERCASE_END_CODE = 90;
const ALPHABET_LOWERCASE_START_CODE = 97;
const ALPHABET_LOWERCASE_END_CODE = 122;
const ALPHABET_LENGTH = 26;

module.exports = (text, shift) => {
    if (shift < 0) shift += ALPHABET_LENGTH;
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        const code = char.charCodeAt(0);
        if (code >= ALPHABET_UPPERCASE_START_CODE && code <= ALPHABET_UPPERCASE_END_CODE) {
            char = String.fromCharCode(((code - ALPHABET_UPPERCASE_START_CODE + shift) % ALPHABET_LENGTH) + ALPHABET_UPPERCASE_START_CODE);
        } else if (code >= ALPHABET_LOWERCASE_START_CODE && code <= ALPHABET_LOWERCASE_END_CODE) {
            char = String.fromCharCode(((code - ALPHABET_LOWERCASE_START_CODE + shift) % ALPHABET_LENGTH) + ALPHABET_LOWERCASE_START_CODE);
        }
        result += char;
    }
    return result;
};