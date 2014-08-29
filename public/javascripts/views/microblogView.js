'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'views/entryCollectionView',
    'models/entryModel'
], function ($, _, Backbone, Handlebars, EntryCollectionView, Entry) {

    var MicroblogView = Backbone.View.extend({

        className: 'microblog-container',

        events: {
            'click .post-entry': 'postEntry',
            'change input.entry-image': 'encodeFile'
        },

        encodeFile: function(event) {
            var file = event.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                console.log(e.target.result);
                this.newEntry.set({
                    image: e.target.result
                });
            }.bind(this);
            reader.onerror = function() {
                console.log('error', arguments);
            };
            reader.readAsDataURL(file);
        },

        postEntry: function(e) {
            e.preventDefault();
            var that = this;
            this.newEntry.set({ text: $('.entry-text').val() });
            this.newEntry.set({ microblog: this.model.id });
//            newEntry.set({ image: $('.entry-image').val() });
            this.model.entries.create(this.newEntry, {
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
            this.newEntry = new Entry();
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
