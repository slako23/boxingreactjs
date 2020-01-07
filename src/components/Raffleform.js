import React, { Component } from 'react';



class Raffleform extends Component {


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
        
      return (
            
        <div>

                <div className="container">
                    <div className="wintickets">
                        <div className="row">
                        <h2>ENTER FOR TICKETS TO SEE JOSHUA VS RUIZ 2</h2>
                            <div className="col-md-6">
                            <form role="form">
                                <div className="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input value={this.state.name} onChange={this.formNameChange} className="form-control" id="exampleFormControlInput1"></input>
                                </div>
                                <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input value={this.state.email} onChange={this.formEmailChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                </div>
                                <div className="form-group">
                                <label for="exampleFormControlInput1">Phone Number</label>
                                <input value={this.state.phonenumber} onChange={this.formPhoneNumberChange} type="phone" className="form-control" id="exampleFormControlInput1"></input>
                                </div>
                                <button type="submit" id="formsubmit" className="btn btn-primary">Submit</button>
                            </form>
                            </div>
                            <div className="col-md-6">
                            <img src="images/joshuavsruiz.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

      );
    }
  }
  
  export default Raffleform;