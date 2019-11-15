import React from "react";
import Header from "./components/Header.js";

import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';


// the following is the BASIC data request to see data structure and console log it
// import axios from "axios";
// import WelcomePage from "./components/WelcomePage.js";
// import CharacterList from "./components/CharacterList.js";

// axios
//   .get(`https://rickandmortyapi.com/api/character/?page=10`)
//   .then(response => {
//     console.log(response);
//     console.log(response.data);
//     console.log(response.data.results);
    
//   })
//   .catch(error => {
//     console.log("rick and morty API error", error);
//   });

 // END the BASIC data request  



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' component={CharacterList} />
      <Route       path='/search' component={SearchForm} />

      
    </main>
  );
}
