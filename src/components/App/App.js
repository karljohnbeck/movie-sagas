import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
//components
import MovieDisplay from '../MovieDisplay/MovieDisplay'
import MovieDescription from '../MovieDescription/MovieDescription'
import MovieForm from '../MovieForm/MovieForm'
// material-ui
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM

  // on league get the movies from the db
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <h1>Movies!</h1>
            <nav>
              <Button variant="contained"><Link to='/'>Home</Link></Button>
              <Button variant="contained"><Link to='/form'>Add a movie</Link></Button>
            </nav>
          </header>
          {/* routes to the other pages */}
          <Route exact path='/details' component={MovieDescription} />
          <Route exact path='/form' component={MovieForm} />
          <Route exact path='/' component={MovieDisplay} />

        </Router>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
