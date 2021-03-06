import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios'
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMoviesData)
    yield takeEvery('FETCH_GENRES', fetchGenres)
    yield takeEvery('ADD_MOVIE', postMovie)
}

// generator reducers 
// get all the movies in the db
function* fetchMoviesData() {
    try {
        let response = yield axios.get('/api/movie');
        yield console.log(response.data);
        // call another reducer to sore the data
        yield put({ type: 'SET_MOVIES', payload: response.data })
    } catch (error) {
        console.log(error, 'in get movies')
    }
}

// collects all the genre data for the specific movie
function* fetchGenres(action) {
    console.log(action.payload.id)
    try {
        yield console.log(action.payload.id)
        let response = yield axios.get(`/api/genre/${action.payload.id}`);
        yield console.log(response.data);

        // save the clicked movie in a reducer
        yield put({ type: 'CLICK_MOVIE', payload: action.payload })

        // call another reducer to sore the data
        yield put({ type: 'SET_GENRES', payload: response.data })

    } catch (error) {
        console.log(error, 'in get Genres')
    }
}

// listening for when you submit a new movie
function* postMovie(action) {
    console.log(action.payload)
    try {
        yield console.log(action.payload)
        yield axios.post('/api/movie', action.payload);
        // call another reducer to get all the movie data from the db
        yield put({ type: 'FETCH_MOVIES' })

    } catch (error) {
        console.log('Error in postMovie', error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const clickedMovie = (state = [], action) => {
    switch (action.type) {
        case 'CLICK_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        clickedMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
