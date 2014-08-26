'use strict';

define([
    'backbone',
    'collections/entryCollection'
], function (Backbone, EntryCollection) {
    var MicroblogModel = Backbone.Model.extend({
        initialize: function () {
            this.entries = new EntryCollection();
            this.entries.url = '/blogs/' + this.id + '/entries'
            this.entries.fetch();
        },

        //name: 'name',

        idAttribute: '_id'
    });

    return MicroblogModel;

});
