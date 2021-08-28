const auth = require('../middlewares/auth');
const router = require('express').Router();
const dashboard = require('../controllers/dashboard');

router.get('/', auth, dashboard.getData);

module.exports = router;