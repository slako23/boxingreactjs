import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class Jumbotronandslider extends Component {


        
      

    render() {
        
        

          return (
            <div role="main">
                
                <div className="jumbotron jumbotron-fluid"  id="jumbotron" role="contentinfo">
                    <div className="container">
                         <h1 className="display-4 websitetitle">NO LIMIT BOXING</h1>
                            <p className="lead">
                                Founded in 2005, the No Limit Boxing Club is a non-profit organization for the practice of boxing in all its forms and at various levels. This Club is also home to many world champions. The Club has been ranked #1 since 2012 by the AIBA for the Development of the sport and is part of the Top 3 in the Excellence category, which highlights the performance of boxers in competition.
                            </p>
                    </div>
                </div>

               <div className="upcomingfight">
                    <h2>UPCOMING FIGHTS</h2>

                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                                <img className="d-block w-100" src="images/spencevsporter.jpg" alt="SpencevsPorter"></img>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="images/joshuavsruizlarge.jpg" alt="JoshuavsRuiz"></img>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="images/lomachenkovs.png" alt="Lomachenkovs"></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            </div>

      );
    }
  } 
  
  export default Jumbotronandslider;