const express = require('express');
const pageController = require('../controllers/pageController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', pageController.showIndex);
router.get('/signup', authController.showSignup);

module.exports = router;
