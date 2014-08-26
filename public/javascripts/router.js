define([
  'backbone',
  'events',
  'collections/microblogCollection',
  'collections/entryCollection',
  'views/microblogCollectionView',
  'views/microblogView'
], function(Backbone, Events, MicroblogCollection, EntryCollection, MicroblogCollectionView, MicroblogView) {

  var Router = Backbone.Router.extend({

    initialize: function() {
      var self = this;
      this._setupCollection();
      Events.on('router:navigate', function(url) {
        self.navigate(url, { trigger: true });
      });
    },

    routes: {
      '': 'index',
      'blogs': 'index',
      'blogs/:id': 'singleBlog'
    },

    _setupCollection: function() {
      if (this.microblogCollection) return;
      var data = $('#initialContent').html();
      this.microblogCollection = new MicroblogCollection(JSON.parse(data));
    },

    _renderView: function(view) {
      $('.app').html(view.render().el);
    },

    index: function() {
      var view = new MicroblogCollectionView({ collection: this.microblogCollection });
      this._renderView(view);
    },

    singleBlog: function(id) {
      var microblog = this.microblogCollection.get(id);
      var view = new MicroblogView({ model: microblog });
      this._renderView(view);
    }

  });

  return Router;

});
