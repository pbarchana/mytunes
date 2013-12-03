// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  events: {
    'click .deleteButton': 'deleteFromQueue'
  },

  template: _.template($('.songQueueEntry').html()),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  deleteFromQueue: function () {
    this.model.dequeue();
  }

});
