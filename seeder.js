"use strict";

// Module to create & save data when none exists

var mongoose = require('mongoose'),
    models = require('./models/index');

var insertionCb = function (err, item) {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully inserted: ' + item._id);
    }
};

module.exports = {
    check: function () {
        models.Microblog.find({}, function (err, blogs) {
            if (blogs.length === 0) {
                console.log('No microblogs found, seeding...');

                /* First blog and 3 entries for it */
                var newBlog = new models.Microblog({
                    name: "First Blog"
                });
                newBlog.save();

                var newEntry = new models.Entry({
                    text: "First blog, first entry",
                    image: "https://octodex.github.com/images/spidertocat.png",
                    microblog: newBlog
                });
                newEntry.save();

                newEntry = new models.Entry({
                    text: "First blog, second entry",
                    image: "https://octodex.github.com/images/stormtroopocat.png",
                    microblog: newBlog
                });
                newEntry.save();

                newEntry = new models.Entry({
                    text: "First blog, third entry",
                    image: "https://octodex.github.com/images/heisencat.png",
                    microblog: newBlog
                });
                newEntry.save();

                /* Second blog and 3 entries for it */
                newBlog = new models.Microblog({
                    name: "Second Blog"
                });
                newBlog.save();

                newEntry = new models.Entry({
                    text: "Second blog, first entry",
                    image: "https://octodex.github.com/images/stormtroopocat.png",
                    microblog: newBlog
                });
                newEntry.save();

                newEntry = new models.Entry({
                    text: "Second blog, second entry",
                    image: "https://octodex.github.com/images/spidertocat.png",
                    microblog: newBlog
                });
                newEntry.save();

                newEntry = new models.Entry({
                    text: "Second blog, third entry",
                    image: "https://octodex.github.com/images/heisencat.png",
                    microblog: newBlog
                });
                newEntry.save();

                console.log('Done seeding!');

            } else {
                console.log('Found ' + blogs.length + ' existing blogs');
            }
        });
    }
};
