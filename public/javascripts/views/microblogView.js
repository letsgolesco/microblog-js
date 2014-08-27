'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'views/entryCollectionView',
], function ($, _, Backbone, Handlebars, EntryCollectionView) {

    var MicroblogView = Backbone.View.extend({

        className: 'microblog-container',

        events: {
            'click .post-entry': 'postEntry'
        },

        postEntry: function(e) {
            var that = this;
            this.model.entries.create({
                text: $('.entry-text').val(),
                image: $('.entry-image').val(),
                microblog: this.model.id
            }, {
                success: function() {
                    that.render();
                    console.log('POST WORKED');
                },
                error: function() {
                    console.log('POST ERROR');
                }
            });
        },

        render: function () {
            this.$el.html('');
            var template = $('#blogDetailTemplate').html();
            var compiled = Handlebars.compile(template);
            var html = compiled(this.model.attributes);
            this.$el.append(html);
            var entryCollectionView = new EntryCollectionView({ collection: this.model.entries });
            this.$el.append(entryCollectionView.render().el);
            return this;
        }
    });

    return MicroblogView;

});
