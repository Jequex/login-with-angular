const router = require('express').Router();
const users = require('../controllers/auth');
const { check2, validation } = require('../middlewares/user');
const auth = require('../middlewares/auth');

router.get('/', auth, users.getUser);
router.post('/', check2, validation, users.loginUser);

module.exports = router;