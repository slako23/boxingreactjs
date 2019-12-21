import React, { Component } from 'react';
import '../css/App.css';

import NoLimitNav from './NoLimitNav';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  
  
  constructor() {
    super();
    this.state = {

      myName:"Amadi",
      nlmbBoxers: [],
      ticketSubmission:[]

    };
    this.ticketLottery = this.ticketLottery.bind(this);
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



  ticketLottery(ticket) {
    let formSubmit = this.state.ticketSubmission;
    
    formSubmit.unshift(ticket);
    this.setState({
      ticketSubmission: formSubmit
    });
  }

  render() {

    

    return (
      <div>
        
        <NoLimitNav
        fighter = {this.state.nlmbBoxers}
        />
        <Content 
          winTickets = {this.ticketLottery}
          fighterTable = {this.state.nlmbBoxers}
        />
        <Footer/>
         
      </div>
    );
  }
}

export default App;