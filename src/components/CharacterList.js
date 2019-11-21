import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const CharListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: auto;
`;

const CharacterList = () => {
  const [chars, setChars] = useState([])
  // TODO: Add useState to track data from useEffect
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios
        .get('https://rickandmortyapi.com/api/character/?page=12')
        .then(response => {
          setChars(response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });

  }, []);

// TODO: `array.map()` over your state here!

  return (

    <div>
    <Link to="/"><button>Go Home</button></Link>
    <Link to="/search"><button>Go Search</button></Link>
    <CharListDiv>
      {chars.map((item, index) => (        
        <CharacterCard  char={item} key={index}/>
      ))}
    </CharListDiv>
    </div>
  );
}

export default CharacterList;
