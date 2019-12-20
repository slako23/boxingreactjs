import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class Promotion extends Component {


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






                <div class="container">
                    <div class="wintickets">
                        <div class="row">
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
                            <h2>ENTER FOR TICKETS TO SEE JOSHUA VS RUIZ 2</h2>
                            <img src="images/joshuavsruiz.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>



                


                        <table class="table" id="fightertable">
                            <thead>
                                <p>
                                Edmonton-based No Limit Boxing Club was established in 2005 by amateur boxer Stan Lako, the first african to own a gym with multiple World Champions. No Limit is one of boxing’s most active and respected gyms, presenting shows in packed venues around the world.
                                </p>
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



                <section class="fighthighlights">
                    <div>
                        <h4>Lomachenko vs Russel Jr</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Z55XXdpn4xE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div>
                        <h4>Stevenson vs Gonzalez</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ucaCm2kd3C4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div>
                        <h4>Spence vs Porter</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/cKizQI8F7Cw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     </div>
                </section>

                

                <div class="container" id="gymhours">
                    <div class="row">
                        <div class="col-md-8">
                            <img src="images/homegym.jpg" alt="boxing-gym"></img>
                        </div>
                        <div class="col-md-4">
                        <table id="gymhourstable">
                            <thead>
                                <tr>
                                    <th colspan="2">Gym Hours</th>
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
                                    <td>Wednesday:</td>
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

                        
                
                </div>



                
            </div>

      );
    }
  } 
  
  export default Promotion;