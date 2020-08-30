import React, {Component} from 'react'
import {connect} from 'react-redux'
import { actionChannel } from 'redux-saga/effects'
import Button from '@material-ui/core/Button';


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
        this.setState({
            title: event.target.value
        })
    }

    posterChange= (event) => {
        this.setState({
            poster:event.target.value
        })
    }
    
    descriptionChange= (event) => {
        this.setState({
            description:event.target.value
        })
    }

    genreChange= (event) => {
        this.setState({
            genre_id: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.dispatch({type: 'ADD_MOVIE', payload: this.state})
    }

    render () {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <h2>Add a new Movie!</h2>
                <input placeholder="title" onChange={this.titleChange}/>
                <input placeholder="poster url" onChange={this.posterChange}/>
                <textarea placeholder="description" onChange={this.descriptionChange}/>
                <label>Choose a genre:</label>
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
                <Button onClick={this.goToHome}>Save</Button>

            </form>

            <Button onClick={this.handleSubmit}>Cancel</Button>

            </>

        )
    }
};

const mapStateToProps = reduxState => ({
    reduxState,
  });
  
  export default connect(mapStateToProps)(MovieForm)