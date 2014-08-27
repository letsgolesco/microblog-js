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

        render: function () {
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
