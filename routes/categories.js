var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET /api/v1/projects/:project_id/categories */
router.get('/projects/:project_id/categories', function(req, res, next) {
    models.Category.findAll()
        .then(function(categories) {
            res.status(200).send(categories);
        });
});

/* POST /api/v1/projects/:project_id/categories */
router.post('/projects/:project_id/categories', function(req, res, next) {
    models.Category.create({
        project_id: req.params.project_id,
        name: req.body.name
    }).then(function(category) {
        res.status(201).send(category);
    });
});

/* GET /api/v1/categories/:category_id */
router.get('/categories/:category_id', function(req, res, next) {
    models.Category.find({
        where: {
            id: req.params.category_id
        }
    }).then(function(category) {
        if (category) {
            res.status(200).send(category);
        } else {
            res.status(400).send({ message: 'Project not found'});
        }
    });
});

/* PUT /api/v1/categories/:category_id */
router.put('/projects/:category_id', function(req, res, next) {
    models.Category.find({
        where: {
            id: req.params.category_id
        }
    }).then(function(category) {
        if (category) {
            category.updateAttributes({
                name: req.body.name
            }).then(function(category) {
                res.status(200).send(category);
            });
        } else {
            res.status(400).send({ message: 'Project not found'});
        }
    });
});

module.exports = router;
