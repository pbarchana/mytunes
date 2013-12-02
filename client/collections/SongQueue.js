// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
      this.on('add', function() {
        if (this.length === 1) { this.playFirst(); }
      });

      this.on('ended', function(songModel) {
        this.shift();
        if (this.length > 0) { this.playFirst(); }
      });

      this.on('dequeue', function() {
         this.remove();
      });
  },

  playFirst: function() {
    this.at(0).play();
  }

  // remove: function() {

  // }


});
