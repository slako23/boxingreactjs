import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class NoLimitNav extends Component {
    render() {

        const listFighter = this.props.fighter.map( item => (
            <div>{item.fighterName}</div>
          ));


        
      return (
            <nav class="navbar navbar-expand-lg" id="entireNav" role="navigation">
               
                <a id="mainnavlink" class="navbar-brand" href="index.html">No Limit Boxing</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span>See more</span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a id="mainnavlink" class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Fighters
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" target="_blank" href="https://boxrec.com/en/proboxer/629465">{listFighter[0]}</a>
                                <a class="dropdown-item" target="_blank" href="https://boxrec.com/en/proboxer/673141">{listFighter[1]}</a>
                                <a class="dropdown-item" target="_blank" href="https://boxrec.com/en/proboxer/659461">{listFighter[2]}</a>
                                <a class="dropdown-item" target="_blank" href="https://boxrec.com/en/proboxer/790719">{listFighter[3]}</a>
                                <a class="dropdown-item" target="_blank" href="https://boxrec.com/en/proboxer/659771">{listFighter[4]}</a>
                            </div>
                        </li>        
                    </ul>
                </div>
               
            </nav>

      );
    }
  }
  
  export default NoLimitNav;