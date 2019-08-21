import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../action/action';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                password: ''
            }
        }
    }
    // componentDidMount(){
    //     sessionStorage.clear();
    // }
    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.get('http://localhost:3001/users?userName=' + this.state.formData.userName)
            .then(resp => {
                if ((this.state.formData.userName === resp.data[0].userName) && (this.state.formData.password === resp.data[0].password)) {
                    const userDetails = {
                        username: resp.data[0].firstName,
                        role: resp.data[0].userType,
                        accNo: resp.data[0].accountNumber
                    }
                    sessionStorage.setItem("username", resp.data[0].firstName);
                    this.props.actions.getloginUser(userDetails);
                    if (resp.data[0].userType === 'user') {
                        toast("Logged in!", {
                            position: toast.POSITION.BOTTOM_CENTER
                        });
                        setTimeout(
                            function () {
                                this.props.history.push('/raiseIncidents')
                            }
                                .bind(this),
                            1500
                        );
                    }

                    if (resp.data[0].userType === 'admin1'||resp.data[0].userType === 'admin2'||resp.data[0].userType === 'admin3') {
                        toast("Logged in!", {
                            position: toast.POSITION.BOTTOM_CENTER
                        });
                        setTimeout(
                            function () {
                                this.props.history.push('/incidents')
                            }
                                .bind(this),
                            1500
                        );
                    }
                }
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <h1 className="text-center login-title">Sign in to raise a breach!</h1>
                        <div className="account-wall">
                            <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                alt="" />
                            <form className="form-signin">
                                <input type="text" name="userName" className="form-control userName" placeholder="Username" onChange={this.handleChange} required autoFocus />
                                <input type="password" name="password" className="form-control password" onChange={this.handleChange} placeholder="Password" required />
                                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                                    Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Login);
