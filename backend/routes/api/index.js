const router = require('express').Router();

// edit below
router.post('/test', function (req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;