import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';


class Footer extends Component {
    render() {
        
      return (
            
        <footer class="footer">
            <div class="container container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <ul>
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Memberships
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Fighters
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                    <ul>
                            <li>
                                <a href="#">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                    <h3> &copy; No Limit Boxing Club</h3>
                    </div>
                </div>
            </div>
        </footer>

      );
    }
  }
  
  export default Footer;