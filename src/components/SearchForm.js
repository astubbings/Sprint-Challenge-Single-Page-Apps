import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function SearchForm() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const results = response.data.results.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
        setSearchResults(results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });

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
        <form>
          {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
          {/* Two-way binding just means that:
        When properties in the model get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the model. */}
          <label htmlFor="name">Search:</label>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <div className="character-list">
          {searchResults.map((item, index) => (
            <CharacterCard char={item} key={index} />
          ))}
        </div>

      </section>
    </>
  );
}

