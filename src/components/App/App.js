import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux'
//components
import MovieDisplay from '../MovieDisplay/MovieDisplay'
import MovieDescription from '../MovieDescription/MovieDescription'
import MovieForm from '../MovieForm/MovieForm'

import './App.css';

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
      this.props.dispatch({type: 'FETCH_MOVIES'})
  }
  render() {
    return (
      <div className="App">        
      <Router>

        <header>
        <h1>Movies!</h1>
          <nav>
            <button><Link to='/form'>Add a movie</Link></button>
          </nav>

          </header>
          <Route exact path='/details' component={MovieDescription}/>
          <Route exact path='/form' component={MovieForm}/>
          <Route exact path='/' component={MovieDisplay}/>

        </Router>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
