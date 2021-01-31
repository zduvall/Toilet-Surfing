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

// Delete booking // for some reason I wasn't able to get the bookings to come through with the PK id attribute on get, so I'm having to delete using a body through put (can't do with delete)

router.delete(
  '/',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, bathroomId, dateTimeStart, dateTimeEnd } = req.body;
    await UserBookBathroom.destroy({
      where: {
        userId,
        bathroomId,
        dateTimeStart,
        dateTimeEnd,
      },
    });
  })
);

module.exports = router;
