var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie.js');

class MovieResults extends React.Component {
   render() {

      var getMovies = this.props.movies.map(function(movie, index) {
        return (
          <Movie movie={movie} key={index} />
        );
      }.bind(this));
      return (
         <div>
            <h3 className="text-center">Results</h3>
            {getMovies}
         </div>
      );
   }

}

module.exports = MovieResults;