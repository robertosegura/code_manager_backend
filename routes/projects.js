var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET /projects */
router.get('/', function(req, res, next) {
  models.Project.findAll()
    .then(function(projects) {
      res.status(200).send(projects);
    });
});

module.exports = router;
