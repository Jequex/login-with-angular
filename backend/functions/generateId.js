const {customAlphabet} = require('nanoid');

module.exports = generateId = () => {
    const chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nanoid = customAlphabet(chars, 15);
    return nanoid();
};