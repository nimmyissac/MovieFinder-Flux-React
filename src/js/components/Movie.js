var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

class Movie extends React.Component {
   render() {
      return (
         <div className="well">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-xs-12 containerImg">
                <img className="thumbnail" src={this.props.movie.poster}/>
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12">
                 <h4 className="text-center">{this.props.movie.show_title}</h4>
                 <ul >
                   <li className="list-group-item">Director: {this.props.movie.director}</li>
                   <li className="list-group-item">Year: {this.props.movie.release_year}</li>
                   <li className="list-group-item">Cast: {this.props.movie.show_cast}</li>
                   <li className="list-group-item">Plot: {this.props.movie.summary}</li>
                 </ul>
              </div>
            </div>
         </div>
      );
   }

}

module.exports = Movie;
