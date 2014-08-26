"use strict";

var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET home page. */
router.get('/', function (req, res) {
    db.Microblog.find({}, function (err, blogs) {
        if (err) {
            console.log(err);
            return;
        }
        var microblogs = JSON.stringify(blogs);
        res.render('index', { Microblogs: microblogs });
    });
});

/* GET all microblogs */
router.get('/blogs', function (req, res) {
    db.Microblog.find({}, function (err, blogs) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(blogs);
    });
});

/* Get all entries for a specific microblog */
router.get('/blogs/:id/entries', function (req, res) {
    db.Entry.find({ microblog: req.params.id }, function (err, entries) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(entries);
    });
});

/* Get all entries ever */
router.get('/entries', function (req, res) {
    db.Entry.find({}, function (err, entries) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(entries);
    });
});

/* GET single microblog */
router.get('/blogs/:id', function (req, res) {
    db.Microblog.findOne({ _id: req.params.id }, function (err, blog) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(blog);
    });
});

module.exports = router;
