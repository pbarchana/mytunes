// AppView.js - Defines a backbone view class for the whole music app.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new MyTunes.Views.PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new MyTunes.Views.LibraryView({collection: this.model.get('library')});
    this.songQueueView = new MyTunes.Views.SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    var that = this;
    this.playerView.$el.on("ended", function(){
     that.model.get("songQueue").at(0).play();
     that.model.get("currentSong").trigger('ended');
     // that.model.get('songQueue').shift();
    });
    // this.model.on('ended:currentSong', function(model){
    //   this.playerView.setSong(this.libraryView.collection.at(0));
    // }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
