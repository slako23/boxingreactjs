import React, { Component } from 'react';



class Gyminfo extends Component {
    render() {
        
      return (
            
        <div>

<div className="container" id="gymhours">
                        <div className="row">
                                <div className="col-md-8">
                                    <img src="images/homegym.jpg" alt="boxing-gym"></img>
                                </div>
                                <div className="col-md-4">
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
                        <div className="row">
                                <div className="col">
                                    <span><h3>Memberships</h3></span>
                                    <h6>Drop in</h6>
                                    <ul>
                                        <li>
                                            $20 per className
                                        </li>
                                        <li>
                                            10 className pass - $175
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
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
                        <div className="row">
                            <div className="col" id="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.8131636667877!2d-113.51483678460652!3d53.54325016764582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02236c8e9cc9f%3A0x24eeccc55726af70!2sPanther%20Gym!5e0!3m2!1sen!2sca!4v1577229593904!5m2!1sen!2sca" width="600" height="450" frameborder="0"  allowfullscreen=""></iframe>
                            </div> 
                        </div>                
                </div>

        </div>

      );
    }
  }
  
  export default Gyminfo;