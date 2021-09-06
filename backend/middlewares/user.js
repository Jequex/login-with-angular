const { check, validationResult } = require('express-validator');

exports.check = [
    check('username', 'username is too short').isLength({ min: 4 }),
    check('password', 'password is too short').isLength({ min: 4 }),
    check('email', 'email is invalid').isEmail()
];

exports.check2 = [
    check('username', 'username is too short').isLength({ min: 4 }),
    check('password', 'password is too short').isLength({ min: 4 })
];

exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ data: errors.array() });
    }
    next();
};