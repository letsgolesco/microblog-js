'use strict';

define([
    'backbone',
    'views/microblogListItemView'
], function (Backbone, MicroblogListItemView) {

    var MicroblogCollectionView = Backbone.View.extend({

        initialize: function () {
            this.listenTo(this.collection, 'reset', this.render);
        },

        tagName: 'ul',

        className: 'microblogs',

        render: function () {
            this.$el.html('');
            this.collection.each(function (microblog) {
                var microblogListItemView = new MicroblogListItemView({ model: microblog });
                this.$el.append(microblogListItemView.render().el);
            }, this);
            return this;
        }
    });

    return MicroblogCollectionView;

});
