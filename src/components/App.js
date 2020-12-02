import React, {useReducer, useEffect, useState } from 'react';
import '../App.css';
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
//import { BrowserRouter as Router, Route } from 'react-router-dom'

/*
http://www.omdbapi.com/?apikey=90baaab3&s=TITLE
http://www.omdbapi.com/?apikey=90baaab3&s=batman
*/

const API_KEY = `http://www.omdbapi.com/?apikey=90baaab3`;

class App extends React.Component {
constructor() {
  super();
  this.state = {
    keyword: '' ,
    movies: [],
    plot: []
  }
}

keywordChanged = event =>(
 this.setState({keyword: event.target.value})
 )

 renderMovies = (response) => 
 ///console.log(movies);
 this.setState({
   movies: response.Search,
   //plot: response.Search
 } )


//http://www.omdbapi.com/?apikey=90baaab3&t=${this.state.keyword}&plot=full
//http://www.omdbapi.com/?apikey=90baaab3&s=${this.state.keyword}
searchMovie = () =>
fetch(`http://www.omdbapi.com/?apikey=90baaab3&s=${this.state.keyword}`)
.then(response => response.json())
.then(this.renderMovies)
//  .then(this.renderMovies)

//http://www.omdbapi.com/?apikey=90baaab3&&i=tt2975590&plot=full
//http://www.omdbapi.com/?apikey=90baaab3&&i=tt2975590&plot=full
renderDetails = () =>{
  fetch(`http://www.omdbapi.com/?apikey=90baaab3&t=${this.state.keyword}&plot=full`)
  .then(response => response.json())
  .then(this.renderPlot)
 }

 renderPlot = (response) => {
this.setState({
  plot: response.Search
})
 }
 
/*
//http://www.omdbapi.com/?apikey=90baaab3&t=batman&plot=full
plot = () =>
fetch(`http://www.omdbapi.com/?apikey=90baaab3&t=${this.state.keyword}&plot=full`)
.then(response => response.json())
.then(this.renderMovies)
//  .then(this.renderMovies)
*/

    render() {
        return (

            <div className = "container">
            
            <div className = "menu"><div className= "title">Search Movies</div>
                  <br/>
                  <div className = "input">
                  <input
                  value = {this.state.keyboard}
                  onChange = {this.keywordChanged}
                  className = "form"
                  placeholder = "keyword"/>
                  <button className = "click"
                  onClick = {this.searchMovie}
                  
                  >
                  Search
                  </button>
                  </div>
               </div>

              <br/>
              <ul>
               {
               this.state.movies.map(
                  (movie, index) =>
                 <li key = {index} 
                 className = 'list-item-movie'>

                 <a target = "_blank" href = {`https://www.imdb.com/title/${movie.imdbID}`} >
                 <div className = "img-effect"><img src = {movie.Poster}>
                 </img></div></a><br/>
            
                 <p className = "year">({movie.Year})</p>
                 
                 <div className = "li-title"><a target = "_blank" 
                 href= {`https://www.imdb.com/title/${movie.imdbID}/plotsummary`} >{movie.Title}</a></div> <br/>
                 
                
                 
                 </li>)
                 //{`https://www.imdb.com/title/${movie.imdbID}`}
                 // {`https://www.imdb.com/title/${movie.imdbID}/plotsummary`}
               //map( movie => movie.Title)
//https://www.imdb.com/title/

               }
               

               </ul>


               <p>
        
             
               </p>

<footer>Created From:<br/><a href = "http://www.omdbapi.com">OMDb API - The Open Movie Database</a></footer>
            </div>
        );
    }
}
export default App;
