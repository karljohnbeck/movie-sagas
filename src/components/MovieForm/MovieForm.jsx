import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
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

    titleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            title: event.target.value
        })
    }

    posterChange= (event) => {
        console.log(event.target.value)

        this.setState({
            poster:event.target.value
        })
    }
    
    descriptionChange= (event) => {
        console.log(event.target.value)

        this.setState({
            description:event.target.value
        })
    }

    genreChange= (event) => {
        console.log(event.target.value)

        this.setState({
            genre_id: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.dispatch({type: 'ADD_MOVIE', payload: this.state})
        this.props.history.push('/')

    }

    render () {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <h2>Add a new Movie!</h2>
                <TextField  onChange={this.titleChange} id="filled-basic" label="title" variant="filled" />
                <TextField  id="filled-basic" label="Poster Url" variant="filled" />
                <textarea placeholder="description" onChange={this.descriptionChange}/>
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
                <Button variant="contained" onClick={this.handleSubmit}>Save</Button>

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