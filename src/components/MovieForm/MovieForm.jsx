import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import swal from '@sweetalert/with-react';

class MovieForm extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genre_id: 0
    }

    goToHome = () => {
        this.props.history.push('/')
    }

    // state storing functions, I could have made 1 function 
    // but forgot when I started and 4 did not seem too bad
    titleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    posterChange = (event) => {
        this.setState({
            poster: event.target.value
        })
    }

    descriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    genreChange = (event) => {
        this.setState({
            genre_id: event.target.value
        })
    }

    // on submit
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        // if a field is not filled, alert user
        if (this.state.title === '' ||
            this.state.poster === '' ||
            this.state.description === '' ||
            this.state.genre_id === 0) {
            swal('Incomplete step', 'Fill out all fields.');
        }
        // else, send data to redux to handle the data storage
        else {
            this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state })
            swal("Movie Submitted!", "Your movie has been saved!", "success");

            this.props.history.push('/')
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add a new Movie!</h2>
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        m={0.5}
                    >
                        <TextField onChange={this.titleChange} id="filled-basic" label="title" variant="filled" />
                        <TextField onChange={this.posterChange} id="filled-basic" label="Poster Url" variant="filled" />
                        <textarea placeholder="Description" onChange={this.descriptionChange} />
                    </Grid>
                    {/* I tried to use the material ui select feature but 
                    did not really work out so I scrapped it.  */}
                    <div className="selector">
                        <label>Genre:</label>
                        <select name="category" id="category" onChange={this.genreChange}>
                            <option value="1">Adventure</option>
                            <option value="2">Animated</option>
                            <option value="3">Biography</option>
                            <option value="4">Comedy</option>
                            <option value="5">Disaster</option>
                            <option value="6">Drama</option>
                            <option value="7">Epic</option>
                            <option value="8">Fantasy</option>
                            <option value="9">Musical</option>
                            <option value="10">Romantic</option>
                            <option value="11">Science Fiction</option>
                            <option value="12">Disaster</option>
                            <option value="13">Superhero</option>
                        </select>
                    </div>
                    <Grid
                        item
                        space={4}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center">
                        <Button variant="contained" onClick={this.handleSubmit}>Save</Button>
                    </Grid>
                </form>
                <Button variant="contained" onClick={this.goToHome}>Cancel</Button>
            </>
        )
    }
};

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieForm)