var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET /api/v1/projects */
router.get('/projects', function(req, res, next) {
  models.Project.findAll()
    .then(function(projects) {
      res.status(200).send(projects);
    });
});


/* POST /api/v1/projects */
router.post('/projects', function(req, res, next) {
    models.Project.create({
        name: req.body.name
    }).then(function(project) {
        res.status(201).send(project);
    });
});

/* GET /api/v1/projects/:project_id */
router.get('/projects/:project_id', function(req, res, next) {
    models.Project.find({
        where: {
            id: req.params.project_id
        }
    }).then(function(project) {
        if (project) {
            res.status(200).send(project);
        } else {
            res.status(400).send({ message: 'Project not found'});
        }
    });
});

/* PUT /api/v1/projects/:project_id */
router.put('/projects/:project_id', function(req, res, next) {
    models.Project.find({
        where: {
            id: req.params.project_id
        }
    }).then(function(project) {
        if (project) {
            project.updateAttributes({
                name: req.body.name
            }).then(function(project) {
                res.status(200).send(project);
            });
        } else {
            res.status(400).send({ message: 'Project not found'});
        }
    });
});

module.exports = router;
