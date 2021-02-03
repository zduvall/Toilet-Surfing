const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');

// const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const { UserFavBathroom } = require('../../db/models');

const router = express.Router();

// Get all favorites
router.get(
  '/',
  asyncHandler(async (_req, res) => {
    const favorites = await UserFavBathroom.findAll();
    return res.json(favorites);
  })
);

// Create new favorite
router.post(
  '/',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, bathroomId } = req.body;
    console.log('userId', userId, 'bathroomId', bathroomId);
    // const favorite = await UserFavBathroom.create({
    //   userId,
    //   bathroomId,
    // });
    // return res.json({
    //   favorite,
    // });
  })
);

// Delete favorite

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
