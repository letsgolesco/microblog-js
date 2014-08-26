define([
  'backbone',
  'jquery',
  'handlebars',
  'events'
], function(Backbone, $, Handlebars, Events) {

  var MicroblogListItemView = Backbone.View.extend({

    events: {
      'click .blog-link': 'singleBlogLink'
    },

    tagName: 'li',

    className: 'microblog-item',

    render: function() {
      var template = $('#blogListItemTemplate').html();
      var compiled = Handlebars.compile(template);
      var html = compiled(this.model.attributes);
      this.$el.html(html);
      return this;
    },

    singleBlogLink: function(e) {
      e.preventDefault();
      var id = this.model.get('_id');
      var url = 'blogs/' + id;
      Events.trigger('router:navigate', url);
    }
  });

  return MicroblogListItemView;

});
