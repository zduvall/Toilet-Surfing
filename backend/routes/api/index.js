const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const bathroomsRouter = require('./bathrooms.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/bathrooms', bathroomsRouter);

module.exports = router;
