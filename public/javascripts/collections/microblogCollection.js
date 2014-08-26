define([
  'backbone',
  'models/microblogModel'
], function(Backbone, Microblog) {

  var MicroblogCollection = Backbone.Collection.extend({
    model: Microblog,
    url: '/blogs'
  });

  return MicroblogCollection;

});
