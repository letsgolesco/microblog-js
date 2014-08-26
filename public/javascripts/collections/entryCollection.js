define([
  'backbone',
  'models/entryModel'
], function(Backbone, Entry) {

  var EntryCollection = Backbone.Collection.extend({
    model: Entry,
    url: '/entries'
  });

  return EntryCollection;

});
