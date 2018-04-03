import React from 'react';
import ReactDOM from 'react-dom';

import keys from '../config/keys';
import SearchBar from './components/searchBar';

const API_KEY = keys.youtubeAPI;

// Create component (this component produces some HTML)
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
