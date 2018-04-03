import React, { Component } from 'react';

class SearchBar extends Component {
  // STATE = a plaing javascript object that is used to record and react to user events
  // Whenever a component state is changed, the component immediately renders
  // and also forces all of its children to render
  constructor (props) {
    super(props);

    this.state = { terms: '' };
  }


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