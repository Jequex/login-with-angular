const router = require('express').Router();
const users = require('../controllers/user');
const { validation, check } = require('../middlewares/user');

router.post('/', check, validation, users.createUser);

module.exports = router;