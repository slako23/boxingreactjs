import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class Content extends Component {


    constructor() {
        super();
        this.state = {
            name:'',
            email:'',
            phonenumber:''
          };
      }


        ticketFormSubmisson(e) {
            e.preventDefault();
            let tickForm = {
            name: this.state.name,
            email: this.state.email,
            phonenumber: this.state.phonenumber
         };
         this.props.winTickets(tickForm);

            this.setState({
                name:'',
                email:'',
                phonenumber:''
            });
        }

        formNameChange = (event) => {
            this.setState({
                name:event.target.value
            })

        }

        formEmailChange = (event) => {
            this.setState({
                email:event.target.value
            })

        }

        formPhoneNumberChange = (event) => {
            this.setState({
                phonenumber:event.target.value
            })

        }
      

        
      

    render() {
        
        const boxerName = this.props.fighterTable.map( boxer => (

            <div>{boxer.fighterName}</div>
          ));

          const boxerCountry = this.props.fighterTable.map( boxer => (

            <div>{boxer.fighterCountry}</div>
          ));

          const boxerWeightClass = this.props.fighterTable.map( boxer => (

            <div>{boxer.weightClass}</div>
          ));

          const boxerRecord = this.props.fighterTable.map( boxer => (

            <div>{boxer.fighterRecord}</div>
          ));

          return (
            <div role="main">
                
                

                <div class="jumbotron jumbotron-fluid"  id="jumbotron" role="contentinfo">
                    <div class="container">
                         <h1 class="display-4 websitetitle">NO LIMIT BOXING</h1>
                            <p class="lead">
                                Founded in 2005, the No Limit Boxing Club is a non-profit organization for the practice of boxing in all its forms and at various levels. This Club is also home to many world champions. The Club has been ranked #1 since 2012 by the AIBA for the Development of the sport and is part of the Top 3 in the Excellence category, which highlights the performance of boxers in competition.
                            </p>
                    </div>
                </div>

               

               <div class="upcomingfight">
                    <h2>UPCOMING FIGHTS</h2>

                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                                <img class="d-block w-100" src="images/spencevsporter.jpg" alt="SpencevsPorter"></img>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="images/joshuavsruizlarge.jpg" alt="JoshuavsRuiz"></img>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="images/lomachenkovs.png" alt="Lomachenkovs"></img>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                        

                    <div class="container" id="gymhours">
                        <div class="row">
                                <div class="col-md-8">
                                    <img src="images/homegym.jpg" alt="boxing-gym"></img>
                                </div>
                                <div class="col-md-4">
                                    <table id="gymhourstable">
                                        <thead>
                                            <tr>
                                                <h3>Gym Hours</h3>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Monday:</td>
                                                <td>12:00pm-9:00pm</td>
                                            </tr>
                                            <tr>
                                                <td>Tuesday:</td>
                                                <td>12:00pm-9:00pm</td>
                                            </tr>
                                            <tr>
                                                <td>Wednesday: </td>
                                                <td>12:00pm-9:00pm</td>
                                            </tr>
                                            <tr>
                                                <td>Thursday:</td>
                                                <td>12:00pm-9:00pm</td>
                                            </tr>
                                            <tr>
                                                <td>Friday:</td>
                                                <td>CLOSED</td>
                                            </tr>
                                       </tbody>
                                </table>
                             </div>
                        </div>
                        <div class="row">
                                <div class="col">
                                    <span><h3>Memberships</h3></span>
                                    <h6>Drop in</h6>
                                    <ul>
                                        <li>
                                            $20 per class
                                        </li>
                                        <li>
                                            10 class pass - $175
                                        </li>
                                    </ul>
                                </div>
                                <div class="col">
                                    <h6>Full Privellage Memberships</h6>
                                    <ul>
                                        <li>
                                            $100/month
                                        </li>
                                        <li>
                                            $399/3 months
                                        </li>
                                        <li>
                                            $1300/year
                                        </li>
                                    </ul>                                    
                                </div>                                                                                    
                        </div>
                        <div class="row">
                            <div class="col" id="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.8131636667877!2d-113.51483678460652!3d53.54325016764582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02236c8e9cc9f%3A0x24eeccc55726af70!2sPanther%20Gym!5e0!3m2!1sen!2sca!4v1577229593904!5m2!1sen!2sca" width="600" height="450" frameborder="0"  allowfullscreen=""></iframe>
                            </div> 
                        </div>     
                                 
                </div>

                <div class="container">
                    <div class="wintickets">
                        <div class="row">
                        <h2>ENTER FOR TICKETS TO SEE JOSHUA VS RUIZ 2</h2>
                            <div class="col-md-6">
                            <form role="form">
                                <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input value={this.state.name} onChange={this.formNameChange} class="form-control" id="exampleFormControlInput1"></input>
                                </div>
                                <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input value={this.state.email} onChange={this.formEmailChange} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                </div>
                                <div class="form-group">
                                <label for="exampleFormControlInput1">Phone Number</label>
                                <input value={this.state.phonenumber} onChange={this.formPhoneNumberChange} type="phone" class="form-control" id="exampleFormControlInput1"></input>
                                </div>
                                <button type="submit" id="formsubmit" class="btn btn-primary">Submit</button>
                            </form>
                            </div>
                            <div class="col-md-6">
                            <img src="images/joshuavsruiz.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 class="nolimitwarriors">NO LIMIT PROFESSIONAL FIGHTERS</h4>
                     <div class="container" id="fightertable">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">FIGHTER</th>
                                    <th scope="col">COUNTRY</th>
                                    <th scope="col">WEIGHTCLASS</th>
                                    <th scope="col">RECORD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{boxerName[0]}</td>
                                    <td>{boxerCountry[0]}</td>
                                    <td>{boxerWeightClass[0]}</td>
                                    <td>{boxerRecord[0]}</td>
                                </tr>
                                <tr>
                                    <td>{boxerName[1]}</td>
                                    <td>{boxerCountry[1]}</td>
                                    <td>{boxerWeightClass[1]}</td>
                                    <td>{boxerRecord[1]}</td>
                                </tr>
                                <tr>
                                    <td>{boxerName[2]}</td>
                                    <td>{boxerCountry[2]}</td>
                                    <td>{boxerWeightClass[2]}</td>
                                    <td>{boxerRecord[2]}</td>
                                </tr>
                                <tr>
                                    <td>{boxerName[3]}</td>
                                    <td>{boxerCountry[3]}</td>
                                    <td>{boxerWeightClass[3]}</td>
                                    <td>{boxerRecord[3]}</td>
                                </tr>
                                <tr>
                                    <td>{boxerName[4]}</td>
                                    <td>{boxerCountry[4]}</td>
                                    <td>{boxerWeightClass[4]}</td>
                                    <td>{boxerRecord[4]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                <div class="container" id="fighthighlights">
                <h3>FIGHT HIGHLIGHTS</h3>
                    <div class="row">
                        <div class="col">
                            <h4>Spence vs Porter</h4>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/cKizQI8F7Cw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="col">
                            <h4>Stevenson vs Gonzalez</h4>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/ucaCm2kd3C4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="col">
                            <h4>Lomachenko vs Russel Jr</h4>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/Z55XXdpn4xE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

               


            </div>

      );
    }
  } 
  
  export default Content;