const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const { UserBookBathroom } = require('../../db/models');

const router = express.Router();

// Get all bookings
router.get(
  '/',
  asyncHandler(async (_req, res) => {
    const bookings = await UserBookBathroom.findAll({
      attributes: [
        'id',
        'userId',
        'bathroomId',
        'dateTimeStart',
        'dateTimeEnd',
      ],
    });
    // const bookings = await UserBookBathroom.findAll();
    // console.log(bookings);
    return res.json(bookings);
  })
);

// Create new booking
const validateCreateBooking = [
  check('userId')
    .exists({ checkFalsy: true })
    .withMessage('Booking must be connected to a user.'),
  check('bathroomId')
    .exists({ checkFalsy: true })
    .withMessage('Booking must be connected to a bathroom.'),
  check('dateTimeStart')
    .exists({ checkFalsy: true })
    .withMessage('Start time cannot be empty'),
  check('dateTimeEnd')
    .exists({ checkFalsy: true })
    .withMessage('End time cannot be empty'),
  handleValidationErrors,
];

router.post(
  '/',
  requireAuth,
  validateCreateBooking,
  asyncHandler(async (req, res) => {
    const { userId, bathroomId, dateTimeStart, dateTimeEnd } = req.body;
    const booking = await UserBookBathroom.create({
      userId,
      bathroomId,
      dateTimeStart,
      dateTimeEnd,
    });
    return res.json({
      booking,
    });
  })
);

// Delete booking

router.delete(
  '/:bookingId(\\d+)',
  requireAuth,
  asyncHandler(async (req, res) => {
    const bookingId = Number(req.params.bookingId);
    const numDestroyed = await UserBookBathroom.destroy({
      where: { id: bookingId },
    });
    return res.json(numDestroyed);
  })
);

module.exports = router;
