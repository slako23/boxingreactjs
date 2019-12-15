import React, { Component } from 'react';
import '../css/App.css';

import NoLimitNav from './NoLimitNav';
import { findIndex, without } from 'lodash';

class App extends Component {
  
  
  constructor() {
    super();
    this.state = {
      nlmbBoxers: [],
      
    };
    
  }

  getBoxers() {
    fetch('./fighter.json')
      .then(response => response.json())
      .then(result => {
        const fighters = result.map(boxer => {
          boxer.fighterId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return boxer;
        });
        this.setState({
          nlmbBoxers: fighters
        });
      });
  }

  render() {

    return (
      <div>
        <NoLimitNav
        fighters={this.getBoxers}
        />
      </div>
    );
  }
}

export default App;