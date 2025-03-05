// export default function MovieDisplay(props) {
//     // The component must return some JSX
//     return <h1>The MovieDisplay Component</h1>;
//   };

// You can also destructure your props directly from the parameter list
export default function MovieDisplay({ movie }) {
  // Function to return loaded JSX
  const loaded = () => {

  return (
    <div className="movieBox">
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img 
      src={movie.Poster} 
      alt={movie.Title} 
      className="moviePoster"
      />
      <h2>{movie.Year}</h2>
    </div>
  );
};
// Function to return loading JSX
const loading = () => {
  return <h1>No Movie to Display</h1>;
};

// Ternary operator will determine which functions JSX we will return
return movie ? loaded() : loading();
}
