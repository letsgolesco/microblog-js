'use strict';

define([
    'backbone'
], function (Backbone) {
    var EntryModel = Backbone.Model.extend({
        //microblog_id: 'microblog_id',
        image: 'image',
        text: 'text',
        idAttribute: '_id'
    });

    return EntryModel;
});
