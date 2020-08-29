import React, {Component} from 'react'
import {connect} from 'react-redux'
import { actionChannel } from 'redux-saga/effects'

class MovieDisplay extends Component {

    goToDetails = (movie) => {
        this.props.dispatch({type: 'CLICK_MOVIE', payload: movie})
        this.props.history.push('/moviedescription')
    }

    render () {
        return (
            <div className='container'>
            {this.props.reduxState.movies.map((movie, i) => {
                return(
                    <div onClick={() => this.goToDetails(movie)} className='item' key={movie.id}>
                        <img src={movie.poster} alt={movie.title}/>
                    </div>
                )
            })}
            </ div>
                )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
  });
  
  export default connect(mapStateToProps)(MovieDisplay)