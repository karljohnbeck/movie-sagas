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
                    <h2>{movie.title}</h2>
                    <h4>Genres</h4>
                    <ul>
                        {this.props.reduxState.genres.map((genre, i) => {
                            return(
                            <li>{genre.name}</li>
                            )
                        })}
                    </ul>
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