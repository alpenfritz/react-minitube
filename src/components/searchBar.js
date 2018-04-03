import React, { Component } from 'react';

class SearchBar extends Component {
  render () {
    // 2. pass eventHandler to element using prop (ie. onChange)
    return <input onChange={this.onInputChange} />;
  }

  // 1. create eventHandler (naming convention: on + Element + Event: eg. onInputChange)
  onInputChange (event) {
    console.log(event.target.value);
  }
};

export default SearchBar;