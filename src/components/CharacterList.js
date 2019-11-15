import React, { useEffect, useState } from "react";

import axios from 'axios';

import CharacterCard from './CharacterCard';


const CharacterList = () => {
  const [chars, setChars] = useState([])
  // TODO: Add useState to track data from useEffect
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
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

    getChars();
  }, []);

// TODO: `array.map()` over your state here!

  return (
    <section className="character-list">      
      {chars.map((item, index) => (        
        <CharacterCard  char={item} key={index}/>
      ))}
    </section>
  );
}

export default CharacterList;
