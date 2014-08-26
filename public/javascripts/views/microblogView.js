'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'views/entryCollectionView',
  'collections/entryCollection'
], function($, _, Backbone, Handlebars, EntryCollectionView, EntryCollection) {

  var MicroblogView = Backbone.View.extend({

    className: 'microblog-container',

    render: function() {
      this.$el.html('');
      var entryCollectionView = new EntryCollectionView({ collection: this.model.entries });
      this.$el.append(entryCollectionView.render().el);
      return this;
    }
  });

  return MicroblogView;

});
