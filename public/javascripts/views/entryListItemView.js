'use strict';

define([
    'backbone',
    'jquery',
    'handlebars'
], function (Backbone, $, Handlebars) {

    var EntryListItemView = Backbone.View.extend({

        events: {
            'click .delete-entry': 'deleteEntry'
        },

        tagName: 'li',

        className: 'entry-item',

        encodeFile: function(file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                console.log(e.target.result);
                this.model.set({
                    image: e.target.result
                });
            }.bind(this);
            reader.onerror = function() {
                console.log('error', arguments);
            };
            reader.readAsDataURL(file);
        },

        render: function () {
            console.log(this.model.attributes.image);
            if (this.model.attributes.image.indexOf('image') === -1) {
                console.log('encoding...');
                var file = new Blob(this.model.attributes.image, { type: 'image/png' });
                console.log(file);
                this.encodeFile(file);
            }
            console.log(this.model.attributes.image);
            var template = $('#entryListItemTemplate').html();
            var compiled = Handlebars.compile(template);
            var html = compiled(this.model.attributes);
            this.$el.html(html);
            return this;
        },

        deleteEntry: function (e) {
            e.preventDefault();
            this.model.destroy();
        }
    });

    return EntryListItemView;

});
