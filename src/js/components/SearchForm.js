var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

class SearchForm extends React.Component {
   render() {
      return (
         <div className="search-form">

           <div className="row">
             <div className="col-md-12">
               <h1 className="text-center">Search For An Actor/Actress</h1> 
             </div>
           </div>

           <div className="row">
             <div className="col-md-12">
               <form onSubmit={this.onSubmit.bind(this)}> 
                 <div className="form-group">
                   <input type="text" className="form-control" ref="title" placeholder="Enter name of the actor/actress here" />
                 </div>
                 <button className="btn btn-primary btn-block">
                   Search Movies
                 </button>
               </form>
             </div>
           </div>


         </div>
      );
   }

   onSubmit(e) {
     e.preventDefault();
     var movie = {
       title: this.refs.title.value
     }
     AppActions.searchMovies(movie);
   }

}

module.exports = SearchForm;