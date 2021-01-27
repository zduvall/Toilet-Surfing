const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const {
  singlePublicFileUpload,
  singleMulterUpload,
} = require('../../utils/awsS3');

const { Bathroom } = require('../../db/models');

const router = express.Router();

// Get all bathrooms
router.get(
  '/',
  asyncHandler(async (_req, res) => {
    const bathrooms = await Bathroom.findAll();
    return res.json(bathrooms);
  })
);

// Create new bathroom
const validateCreateBathroom = [
  check('name')
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .isLength({ max: 50 })
    .withMessage('Name must be between 4 and 50 characters.'),
  check('description')
    .exists({ checkFalsy: true })
    .isLength({ min: 20 })
    .isLength({ max: 200 })
    .withMessage('Description must be between 20 and 200 characters.'),
  check('imageUrl')
    .exists({ checkFalsy: true })
    .withMessage('Must upload an image.'),
  check('streetNumber')
    .exists({ checkFalsy: true })
    .isLength({ max: 255 })
    .withMessage('Street number required (less than 255 chars)'),
  check('route')
    .exists({ checkFalsy: true })
    .isLength({ max: 255 })
    .withMessage('Route required (less than 255 chars)'),
  check('locality')
    .exists({ checkFalsy: true })
    .isLength({ max: 255 })
    .withMessage('Locality required (less than 255 chars)'),
  check('administrativeArea')
    .exists({ checkFalsy: true })
    .isLength({ max: 255 })
    .withMessage('Adminiatrative area required (less than 255 chars)'),
  check('postalCode')
    .exists({ checkFalsy: true })
    .isLength({ max: 15 })
    .withMessage('Postal required (less than 15 chars)'),
  check('country')
    .exists({ checkFalsy: true })
    .isLength({ max: 255 })
    .withMessage('Country required (less than 255 chars)'),
  check('lat')
    .exists({ checkFalsy: true })
    .isLength({ max: 255 })
    .withMessage('Country required (less than 255 chars)'),
  check('lng')
    .exists({ checkFalsy: true })
    .isLength({ max: 255 })
    .withMessage('Country required (less than 255 chars)'),
  check('name').custom((value) => {
    return Bathroom.findOne({ where: { name: value } }).then((name) => {
      if (name) {
        return Promise.reject('Name already taken by another bathroom.');
      }
    });
  }),
  handleValidationErrors,
];

router.post(
  '/',
  requireAuth,
  singleMulterUpload('image'),
  validateCreateBathroom,
  asyncHandler(async (req, res) => {
    const {
      bathroomOwnerId,
      name,
      description,
      streetNumber,
      route,
      locality,
      administrativeArea,
      postalCode,
      country,
      lat,
      lng,
    } = req.body;
    const imageUrl = await singlePublicFileUpload(req.file);
    const bathroom = await Bathroom.create({
      bathroomOwnerId,
      name,
      description,
      imageUrl,
      streetNumber,
      route,
      locality,
      administrativeArea,
      postalCode,
      country,
      lat,
      lng,
    });
    return res.json({
      bathroom,
    });
  })
);

module.exports = router;
