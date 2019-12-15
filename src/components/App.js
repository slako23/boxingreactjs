import React, { Component } from 'react';
import '../css/App.css';

import NoLimitNav from './NoLimitNav';
import Promotion from './Promotion';
import { findIndex, without } from 'lodash';

class App extends Component {
  
  
  constructor() {
    super();
    this.state = {

      myName:"Amadi",
      nlmbBoxers: []
    };
    
  }

// item.fighterId = this.state.lastIndex;
// this.setState({ lastIndex: this.state.lastIndex + 1 });


componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const boxer = result.map(item => {
          return item;
        });
        this.setState({
          nlmbBoxers: boxer
        });
      });
  }

  render() {

    

    return (
      <div>
        
        <NoLimitNav
        fighter = {this.state.nlmbBoxers}
        />
        <Promotion />
         
      </div>
    );
  }
}

export default App;