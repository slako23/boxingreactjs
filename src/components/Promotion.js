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
            
        
        formSubmission(){
            document.getElementById('formsubmit').addEventListener('mouseup', function(){
                
                document.getElementsByClassName('wintickets').innerHTML = "<h2>" + "GOODLUCK" + "</h2>"
            
            });
        }

    render() {

        
      return (
            <div>
                
                

                <div class="jumbotron jumbotron-fluid">
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
                            <form onSubmit={this.formSubmission}>
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
                                <button id="formsubmit" class="btn btn-primary">Submit</button>
                            </form>
                            </div>
                            <div class="col-md-6">
                            <h2>ENTER FOR TICKETS TO SEE JOSHUA VS RUIZ 2</h2>
                            <img src="images/joshuavsruiz.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>



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

                

                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <img src="images/homegym.jpg"></img>
                        </div>
                        <div class="col-md-4">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">Gym Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>12:00pm-9:00pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>12:00pm-9:00pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>12:00pm-9:00pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>12:00pm-9:00pm</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
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