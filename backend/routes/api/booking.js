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
    const bookings = await UserBookBathroom.findAll();
    return res.json(bookings);
  })
);

// Create new bathroom
const validateCreateBathroom = [
  check('userId')
    .exists({ checkFalsy: true })
    .withMessage('Bathroom name cannot be empty.')
    .isLength({ min: 3, max: 50 })
    .withMessage('Name must be between 4 and 50 characters.')
    .custom((value) => {
      return UserBookBathroom.findOne({ where: { name: value } }).then((name) => {
        if (name) {
          return Promise.reject('Name already in use by another UserBookBathroom.');
        }
      });
    }),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Description cannot be empty.')
    .isLength({ min: 20, max: 200 })
    .withMessage('Description must be between 20 and 200 characters.'),
  check('image')
    .custom((_value, { req }) => {
      if (!req.file) {
        throw new Error('Must upload an image.');
      }
      return true;
    })
    .custom((_value, { req }) => {
      const regex = new RegExp(/.*\/(apng|avif|jpe?g|png|svg|webp)$/i);
      if (!regex.test(req.file.mimetype)) {
        throw new Error(
          'Upload must be an image (apng, avif, jpeg/jpg, png, svg, webp).'
        );
      }
      return true;
    }),
  check('streetNumber')
    .exists({ checkFalsy: true })
    .withMessage('Street number cannot be empty.')
    .isLength({ max: 255 })
    .withMessage('Street number required (less than 255 chars).'),
  check('route')
    .exists({ checkFalsy: true })
    .withMessage('Route cannot be empty.')
    .isLength({ max: 255 })
    .withMessage('Route required (less than 255 chars).'),
  check('locality')
    .exists({ checkFalsy: true })
    .withMessage('Locality cannot be empty.')
    .isLength({ max: 255 })
    .withMessage('Locality required (less than 255 chars).'),
  check('administrativeArea')
    .exists({ checkFalsy: true })
    .withMessage('Administrative area cannot be empty.')
    .isLength({ max: 255 })
    .withMessage('Adminiatrative area required (less than 255 chars).'),
  check('postalCode')
    .exists({ checkFalsy: true })
    .withMessage('Postal code cannot be empty.')
    .isLength({ max: 15 })
    .withMessage('Postal required (less than 15 chars).'),
  check('country')
    .exists({ checkFalsy: true })
    .withMessage('Country cannot be empty.')
    .isLength({ max: 255 })
    .withMessage('Country required (less than 255 chars)'),
  check('lat')
    .exists({ checkFalsy: true })
    .withMessage('Latitude cannot be empty.')
    .isLength({ max: 255 })
    .withMessage('Country required (less than 255 chars)'),
  check('lng')
    .exists({ checkFalsy: true })
    .withMessage('Longitude cannot be empty.')
    .isLength({ max: 255 })
    .withMessage('Country required (less than 255 chars).'),
  // check('name').custom((value) => {
  //   return Bathroom.findOne({ where: { name: value } }).then((name) => {
  //     if (name) {
  //       return Promise.reject('Name already in use by another bathroom.');
  //     }
  //   });
  // }),
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
    const bathroom = await UserBookBathroom.create({
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
