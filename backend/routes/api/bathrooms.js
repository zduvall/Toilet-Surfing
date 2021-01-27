const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');

// const { handleValidationErrors } = require('../../utils/validation');
// const { requireAuth } = require('../../utils/auth');

const { Bathroom } = require('../../db/models');

const router = express.Router();

// get all bathrooms
router.get(
  '/',
  asyncHandler(async (_req, res) => {
    const bathrooms = await Bathroom.findAll();
    return res.json(bathrooms);
  })
);

module.exports = router;
