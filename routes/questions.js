/**
 * Created by Margaritow on 01/12/2016.
 */
var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET /api/v1/questions */
router.get('/questions', function(req, res) {
    models.Question.findAll()
        .then(function(questions) {
            res.status(200).send(questions);
        });
});


/* POST /api/v1/question */
router.post('/question', function(req, res) {
    models.Category.find({
        where: {
            id: req.body.category_id
        }
    }).then(function (category) {
        if (category){
            models.Question.create({
                question: req.body.question,
                category_id: req.body.category_id
            }).then(function(question) {
                res.status(201).send(question);
            });
        }else{
            res.status(400).send({ message: 'Firs register category please'});
        }
    });
});

/* GET /api/v1/questions/:question_id */
router.get('/questions/:question_id', function(req, res) {
    models.Question.find({
        where: {
            id: req.params.question_id
        }
    }).then(function(question) {
        if (question) {
            res.status(200).send(question);
        } else {
            res.status(400).send({ message: 'Question not found'});
        }
    });
});

/* PUT /api/v1/questions/:question_id */
router.put('/questions/:question_id', function(req, res) {
    models.Question.find({
        where: {
            id: req.params.question_id
        }
    }).then(function(question) {
        if (question) {
            models.Category.find({
                where: {
                    id: req.body.category_id
                }
            }).then(function (category) {
                if (category){
                    question.updateAttributes({
                        question: req.body.question,
                        category_id: req.body.category_id
                    }).then(function(question) {
                        res.status(200).send(question);
                    });
                }else{
                    res.status(400).send({ message: 'Firs register category please'});
                }
            });

        } else {
            res.status(400).send({ message: 'Question not found'});
        }
    });
});

module.exports = router;
