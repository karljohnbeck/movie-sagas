import React, { Component } from 'react'
import { connect } from 'react-redux'

class MovieDescription extends Component {

    goToHome = () => {
        this.props.history.push('/')
    }


    render() {
        const movie = this.props.reduxState.clickedMovie
        return (
            <div className='container'>

                <div>
                    <h3>{movie.title}</h3>
                    <img src={movie.poster} alt={movie.title} />
                    <p>{movie.description}</p>
                    <button onClick={this.goToHome}>Back</button>
                </div>


            </ div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieDescription)