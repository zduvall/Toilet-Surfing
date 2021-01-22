const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

module.exports = router;


// const asyncHandler = require('express-async-handler');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
// const { User } = require('../../db/models');


// // remove below -- test setTokenCookie
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     },
//   })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // remove below -- test restoreUser
// router.get('/restore-user', restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// //remove below -- test requireAuth
// router.get('/require-auth', requireAuth, (req, res) => {
//   return res.json(req.user);
// });

// // edit below
// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });