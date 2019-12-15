import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class Promotion extends Component {
    render() {

        
      return (
            <div>

                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                         <h1 class="display-4 websitetitle">NO LIMIT BOXING</h1>
                            <p class="lead">
                                Our mission is to make the most feared fighters in the world & turn them into Champions. At No Limit we are passionate about achievement. For us our athletes come first. We will do all within our power to provide them with the environment that will make a difference & help them excel. This is our legacy, this is what we stand for. This will never change.
                            </p>
                    </div>
                </div>


                <section class="fighthighlights">
                    <div>
                        <h4>Charlo vs Campfort</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YMpPmKwii8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div>
                        <h4>Julian Williams Knockout</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/IlljudxYWYY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>

                    <div>
                        <h4>Spence vs Garcia</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/bH9eP0uWu6k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </section>

            </div>

      );
    }
  } 
  
  export default Promotion;