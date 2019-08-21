import React, { Component } from 'react';
import axios from 'axios';
import './register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                firstName: '',
                lastName: '',
                mobileNumber: '',
                email:'',
                userName: '',
                password:'',
                userType: 'user',

            }
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleClick = (event) => {
        event.preventDefault();
        const userData = this.state.formData;
        console.log(userData);
        axios.post('http://localhost:3001/users', userData)
            .then(resp => {
                toast("Request sent!", {
                    position: toast.POSITION.BOTTOM_CENTER
                  });
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
                        <form role="form">
                            <h2 className="text-center">Sign Up</h2>
                            <hr className="colorgraph" />
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="firstName" className="form-control input-lg first-name" placeholder="First Name" tabIndex="1" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="lastName" className="form-control input-lg last-name" placeholder="Last Name" tabIndex="2" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="mobileNumber" className="form-control input-lg mobile-number" placeholder="Mobile Number" tabIndex="1" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="email" className="form-control input-lg email" placeholder="Email" tabIndex="2" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="userName" className="form-control input-lg user-name" placeholder="User Name" tabIndex="1" onChange={this.handleChange} />
                                    </div>
                                </div>
                                {/* <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="accountNumber" className="form-control input-lg" placeholder="Account Number" tabIndex="2" onChange={this.handleChange} />
                                    </div>
                                </div> */}
                            </div>
                            <div className="row">
                                {/* <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="branch" className="form-control input-lg" placeholder="Branch" tabIndex="1" onChange={this.handleChange} />
                                    </div>
                                </div> */}
                                {/* <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="ifscCode" className="form-control input-lg" placeholder="IFSC Code" tabIndex="2" onChange={this.handleChange} />
                                    </div>
                                </div> */}
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control input-lg password" placeholder="Password" tabIndex="1" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="password" name="confirmPassword" className="form-control input-lg confirm-password" placeholder="Confirm Password" tabIndex="2" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>  
                            <hr className="colorgraph" />
                            <div className="row">
                                <div className="col-xs-12 col-md-12">
                                    <button className="btn btn-primary btn-block btn-lg" tabIndex="7" onClick={this.handleClick} type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default Register;
