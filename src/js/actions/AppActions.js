var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');


var AppActions = {
  searchMovies: function(movie) {
    AppDispatcher.handleViewAction({
       actionType: AppConstants.SEARCH_MOVIES,
       movie: movie
    });
  },
  receiveMovieResults: function(movies) {
   console.log("receive movie results in appActions ", movies);
    AppDispatcher.handleViewAction({
       actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
       movie: movies
    });
  }
}

module.exports = AppActions;