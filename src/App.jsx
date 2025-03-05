import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import './App.css'
// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

// console.log(import.meta.env.VITE_OMDB_API_KEY)



const randomMovieList = ["Singing in the Rain", "The Princess Bride", "Heroes", "Fantastic Planet", "But I'm a Cheerleader", "Tromeo and Juliet"]

const grabRandomMovie = randomMovieList[ Math.floor(Math.random() * randomMovieList.length)]
console.log(grabRandomMovie);

export default function App() {

// State to hold movie data
const [movie, setMovie] = useState(null);

// Function to get movies
const getMovie = async(searchTerm) => {
  try {
  // Make fetch request and store the response
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}&type=movie`
  );
  // Parse JSON response into a JavaScript object
  const data = await response.json();
  // Set the Movie state to the received data
  setMovie(data);
} catch(e) {
  console.error(e)
}
};

// This will run on the first render but not on subsquent renders
useEffect(() => {
  // getMovie("Clueless");
  getMovie(grabRandomMovie);
}, []);

// We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
     {/* <h1>Movie Search</h1> */}
     <Form moviesearch={getMovie} />
     
     <MovieDisplay movie={movie} />
    </div>
  );
}