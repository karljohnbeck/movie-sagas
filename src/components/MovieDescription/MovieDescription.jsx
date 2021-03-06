import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import './movieDesc.css'


class MovieDescription extends Component {

    // return to main page
    goToHome = () => {
        this.props.history.push('/')
    }

    render() {
        const movie = this.props.reduxState.clickedMovie
        return (
            <div className='container description'>

                <div>
                    <h2>{movie.title}</h2>
                    <h4>Genres</h4>
                    {/* loop over the genre data */}
                    {this.props.reduxState.genres.map((genre, i) => {
                        return (
                            <h5>{genre.name}</h5>
                        )
                    })}
                    <img src={movie.poster} alt={movie.title} />
                    <div className="desc_text">
                        <p >{movie.description}</p>
                    </div>
                    <Button className="btn" variant="contained" onClick={this.goToHome}>Back</Button>
                </div>
            </ div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieDescription)