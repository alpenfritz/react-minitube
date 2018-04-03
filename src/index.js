import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import keys from '../config/keys';
import SearchBar from './components/searchBar';

const API_KEY = keys.youtubeAPI;

YTSearch({key: API_KEY, term: 'tennis'}, (data) => {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('.container'));
