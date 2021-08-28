const router = require('express').Router();
const users = require('../controllers/auth');
const { check, validation } = require('../middlewares/user');
const auth = require('../middlewares/auth');

router.get('/', auth, users.getUser);
router.post('/', check, validation, users.loginUser);

module.exports = router;