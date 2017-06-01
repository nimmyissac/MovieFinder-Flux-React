var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var MovieResults = require('./MovieResults.js');

class App extends React.Component {
   constructor(props) {
     super(props);
     
     this.state={
       movies: AppStore.getMovieResults()
     }
   }
   componentDidMount() {
    AppStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange.bind(this));
  }

   render() {
      console.log("movies are",this.state.movies);
      if(this.state.movies == '') {
         var movieResults = '';
      } else {
         var movieResults = <MovieResults movies={this.state.movies}/>
      }
      return (
         <div className="container">
           <SearchForm />
           {movieResults}
         </div>
      );
   }

   _onChange() {
      this.setState({movies: AppStore.getMovieResults()});
   }

}

module.exports = App;