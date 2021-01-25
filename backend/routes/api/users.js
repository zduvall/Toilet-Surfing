const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');

const { User } = require('../../db/models');

const router = express.Router();

// Sign up user
const validateSignUp = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Email must be a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Username must be at least 4 characters.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ max: 30 })
    .withMessage('Username must be less than 30 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('username').custom((value) => {
    return User.findOne({ where: { username: value } }).then((username) => {
      if (username) {
        return Promise.reject(
          'Username already taken by another surfer.'
        );
      }
    });
  }),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

router.post(
  '',
  validateSignUp,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signUp({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

module.exports = router;
