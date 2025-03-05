import {useState, useEffect} from "react";

export default function Form(props){
    // The component must return some JSX
  //   return <h1>The Form Component</h1>;
  // };

// State to hold the data of our form
const [formData, setFormData] = useState({
  searchterm: "",
});

// handleChange - updates formData when we type into form
const handleChange = (event) => {
  // Use the event object to detect key, and value to update
  setFormData({ ...formData, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
  // Prevent page from refreshing on form submission
  event.preventDefault();
  // Pass the search term to moviesearch prop, which is App's getMovie function
  props.moviesearch(formData.searchterm);
};

  return (
    <div>
      <form 
      onSubmit={handleSubmit}
      className="searchForm"
      >
      {/* <input type="radio" value="Movie" /> Movie
        <input type="radio" value="episode" /> Episode
        <input type="radio" value="series"/> Series */}

        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    
    </div>
  );
}