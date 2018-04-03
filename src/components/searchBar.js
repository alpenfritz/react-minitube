import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = { term: '' };
  }

  render () {
    // by specifying VALUE prop in INPUT element, INPUT becomes a controlled component;
    // a controlled component has its value set by STATE: its VALUE changes when STATE changes
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
};

export default SearchBar;