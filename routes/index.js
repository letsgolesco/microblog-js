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

/* GET single microblog */
router.get('/blogs/:id', function (req, res) {
    db.Microblog.findById(req.params.id, function (err, blog) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(blog);
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

/* POST new entry to blog */
router.post('/blogs/:id/entries', function(req, res) {
    var entry = new db.Entry({
        text: req.body.text,
        image: req.body.image,
        microblog: req.params.id
    });
    console.log(entry);
    entry.save(function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
    res.json('');
});

/* DELETE entry from blog */
router.delete('/blogs/:blogId/entries/:id', function(req, res) {
    var entry = db.Entry.findById(req.params.id);
    entry.remove(function(err) {
        if (err) {
            console.log(err);
            return;
        }
    });
    res.json('');
});

module.exports = router;
