var AppActions = require('../actions/AppActions');

module.exports = {
  searchMovies: function(movie) {
    
    $.ajax({
       url: 'http://netflixroulette.net/api/api.php?actor='+movie,
       dataType: 'json',
       cache: false,
       success: function(data) {
         console.log("search movies in app api ", data);
         AppActions.receiveMovieResults(data);
       }.bind(this),
       error: function(xhr, status, err) {
         alert(err);
       }.bind(this)
    });

  }
}