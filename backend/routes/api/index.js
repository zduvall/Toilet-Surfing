const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const bathroomsRouter = require('./bathrooms.js');
const bookingsRouter = require('./booking.js');
const favoritesRouter = require('./favorites')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/bathrooms', bathroomsRouter);
router.use('/bookings', bookingsRouter);
router.use('/favorites', favoritesRouter);

module.exports = router;
