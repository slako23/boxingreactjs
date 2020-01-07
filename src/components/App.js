import React, { Component } from 'react';
// import '../css/App.css';

import NoLimitNav from './NoLimitNav';
import Jumbotronandslider from './Jumbotronandslider';
import Gyminfo from './Gyminfo';
import Raffleform from './Raffleform';
import Boxertable from './Boxertable';
import Fighthighlights from './Fighthighlights';
import Footer from './Footer';

class App extends Component {
  
  
  constructor() {
    super();
    this.state = {

      nlmbBoxers: [],
      ticketSubmission:[]

    };
    this.ticketLottery = this.ticketLottery.bind(this);
  }


// Load list of fighters
componentDidMount() {
    fetch('./fighter.json')
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


// Form for ticket raffle
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
        <Jumbotronandslider/>
        <Gyminfo/>
        <Raffleform
          winTickets = {this.ticketLottery}
        />
        <Boxertable 
          fighterTable = {this.state.nlmbBoxers}
        />
        <Fighthighlights/>
        <Footer/>
         
      </div>
    );
  }
}

export default App;