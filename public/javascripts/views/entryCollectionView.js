'use strict';

define([
    'backbone',
    'views/entryListItemView'
], function (Backbone, EntryListItemView) {

    var EntryCollectionView = Backbone.View.extend({

        initialize: function() {
            this.listenTo(this.collection, 'destroy', this.render);
        },

        tagName: 'ul',

        className: 'entries',

        render: function () {
            this.$el.html('');
            this.collection.each(function (entry) {
                var entryListItemView = new EntryListItemView({ model: entry });
                this.$el.append(entryListItemView.render().el);
            }, this);
            return this;
        }
    });

    return EntryCollectionView;

});
