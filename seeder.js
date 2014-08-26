// Module to create & save data when none exists

var mongoose = require('mongoose'),
    models = require('./models/index');

var insertionCb = function(err, item) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully inserted: ' + item._id);
  }
};

module.exports = {
  check: function() {
    models.Microblog.find({}, function(err, blogs) {
      if (blogs.length === 0) {
        console.log('No microblogs found, seeding...');

        /* First blog and 2 entries for it */
        var newBlog = new models.Microblog({
          name: "First Blog"
        });
        newBlog.save();

        var firstEntry = new models.Entry({
          text: "First blog, first entry",
          image: "https://octodex.github.com/images/spidertocat.png",
          microblog: newBlog
        });
        firstEntry.save();

        // TODO: probably dumb to make 2 vars for 4 dummy entries
        var secondEntry = new models.Entry({
          text: "First blog, second entry",
          image: "https://octodex.github.com/images/stormtroopocat.png",
          microblog: newBlog
        });
        secondEntry.save();

        /* Second blog and 2 entries for it */
        newBlog = new models.Microblog({
          name: "Second Blog"
        });
        newBlog.save();

        firstEntry = new models.Entry({
          text: "Second blog, first entry",
          image: "https://octodex.github.com/images/stormtroopocat.png",
          microblog: newBlog
        });
        firstEntry.save();

        secondEntry = new models.Entry({
          text: "Second blog, second entry",
          image: "https://octodex.github.com/images/spidertocat.png",
          microblog: newBlog
        });
        secondEntry.save();

        console.log('Done seeding!');

      } else {
        console.log('Found ' + blogs.length + ' existing blogs');
      }
    });
  }
};
