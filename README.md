# Project Name: Movie Sagas

## Description

_Duration: 1 weekend_

This project was to create an application that could show a user a selection of movies and information about them. This application was build to be a single page app. The Moan page would display all the movies on the site. A user can click on any of the posters displayed which will load a new component showing that movies name, genres, and description. to go back home the user may click the back button below the information of use the home button on the top of the page. A user can also add a movie to the page by clicking the add movie button on the header. When clicked the user is brought to a form where, if all the inputs are filled out add a film to the site and it will then be displayed on the main page when visited again. 

## Screen Shot

_Below is an image of the home page._
![sample home page](/sample/main.png)

_Below is an image one of the movie detials pages._

![sample input page](/sample/detail.png)

_Below is an image of the form page._

![sample review page](/sample/form.png)



## Usage

- To open the app:

1. Create a database using the command lines in the database.sql file (I used postico to talk with PostgreSQL).
2. Turn on the server with 'npm run server' in the terminal.
3. In a new terminal window, turn on the client with 'npm run client'.
4. Go to localhost:3000 in your browser.

- App use: 

-- View movie details -- 
1. Click any poster displayed on the page to view more information of it. 
2. Click either "home" at the top of the page or "back at the bottom".

-- Add a movie to the site -- 
1. Click the "add a movie" button a the top of the page.
2. fill out all the fields on the page and select a genre from the dropdown that best describes the move.
3. When finished, click the "Save" button, this will save the movie and redirect you to the home page.
4. If you want to leave the page, either click the "home" button at the top or the "cancel" button at the bottom.

## Built With

- JavaScript
- Bootstrap
- React
- CSS
- PostgreSQL
- Axios
- Pg
- Sweet alerts
- Redux
- Sagas
- Material-UI



## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [karljohnbeck@gmail.com]