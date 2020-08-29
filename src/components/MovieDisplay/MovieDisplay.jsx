import React, {Component} from 'react'
import {connect} from 'react-redux'

class MovieDisplay extends Component {
    render () {
        return (
            <div className='container'>
            {this.props.reduxState.movies.map((movie, i) => {
                return(
                    <div className='item' key={movie.id}>
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