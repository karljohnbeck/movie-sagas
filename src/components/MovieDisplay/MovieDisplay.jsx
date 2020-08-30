import React, {Component} from 'react'
import {connect} from 'react-redux'
import { actionChannel } from 'redux-saga/effects'

class MovieDisplay extends Component {

    // when you click a movie, save its information in redux, 
    // then go to the page that displays that
    goToDetails = (movie) => {
        this.props.dispatch({type: 'FETCH_GENRES', payload: movie})
        this.props.history.push('/details')
    }

    render () {
        return (
            <>
            <h4>Click a poster for more details.</h4>

            <div className='container'>
                {/* loop over all the movies stored in redux */}
            {this.props.reduxState.movies.map((movie, i) => {
                return(
                    <div onClick={() => this.goToDetails(movie)} className='item' key={movie.id}>
                        <img src={movie.poster} alt={movie.title}/>
                    </div>
                )
            })}
            </ div>
            </>
                )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
  });
  
  export default connect(mapStateToProps)(MovieDisplay)