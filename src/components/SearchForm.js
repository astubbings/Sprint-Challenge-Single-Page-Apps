import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';


export default function SearchForm() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    const getChars = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/?page=10')
        .then(response => {
          setChars(response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });

    }

    const results = characters.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
    );
    getchars(results);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
  };


  return (
    <>
    <Link to="/"><button>Go Home</button></Link>
    <Link to="/search"><button>Go Search</button></Link>
    <section className="search-form">
       // Add a search form here
      
    
    
    
    
    
    
    
    </section>
    </>
  );
}

