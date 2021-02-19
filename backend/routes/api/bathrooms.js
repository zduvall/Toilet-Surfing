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

// Create new bathroom validations
const validateCreateBathroom = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Bathroom name cannot be empty.')
    .isLength({ min: 3, max: 50 })
    .withMessage('Name must be 4 - 50 characters.')
    .custom((value) => {
      return Bathroom.findOne({ where: { name: value } }).then((name) => {
        if (name) {
          return Promise.reject('Name already in use by another bathroom.');
        }
      });
    }),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Description cannot be empty.')
    .isLength({ min: 4, max: 200 })
    .withMessage('Description must be 4 - 200 characters.'),
  check('image')
    .custom((_value, { req }) => {
      if (!req.file) {
        throw new Error('Must upload an image.');
      }
      return true;
    })
    .custom((_value, { req }) => {
      const regex = new RegExp(/.*\/(apng|avif|jpe?g|png|svg|webp)$/i);
      if (!!req.file && !regex.test(req.file.mimetype)) {
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
  handleValidationErrors,
];

// Create new bathroom
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

// Update bathroom validations
const validateUpdateBathroom = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Bathroom name cannot be empty.')
    .isLength({ min: 3, max: 50 })
    .withMessage('Name must be 4 - 50 characters.'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Description cannot be empty.')
    .isLength({ min: 4, max: 200 })
    .withMessage('Description must be 4 - 200 characters.'),
  check('image').custom((_value, { req }) => {
    if (!req.file) {
      return true;
    } else {
      const regex = new RegExp(/.*\/(apng|avif|jpe?g|png|svg|webp)$/i);
      if (!regex.test(req.file.mimetype)) {
        throw new Error(
          'Upload must be an image (apng, avif, jpeg/jpg, png, svg, webp).'
        );
      }
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
  handleValidationErrors,
];

// update bathroom
router.put(
  '/:bathroomId(\\d+)',
  requireAuth,
  singleMulterUpload('image'),
  validateUpdateBathroom,
  asyncHandler(async (req, res) => {
    const bathroomId = Number(req.params.bathroomId);

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

    let imageUrl;
    if (!!req.file) imageUrl = await singlePublicFileUpload(req.file);

    const bathroomToUpdate = await Bathroom.findByPk(bathroomId);

    await bathroomToUpdate.update({
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

    const updatedBathroom = await Bathroom.findByPk(bathroomId);

    return res.json({
      updatedBathroom,
    });
  })
);

// delete bathroom
router.delete(
  '/:bathroomId(\\d+)',
  requireAuth,
  asyncHandler(async (req, res) => {
    const bathroomId = Number(req.params.bathroomId);
    const bathroomToDelete = await Bathroom.findByPk(bathroomId);
    await bathroomToDelete.destroy();
    return res.json('success');
  })
);

module.exports = router;
