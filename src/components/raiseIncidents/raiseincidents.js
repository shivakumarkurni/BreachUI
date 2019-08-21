import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import * as userAction from '../../action/action';
import '../register/register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class RaiseIncidents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                firstName: '',
                lastName: '',
                mobileNumber: '',
                email: '',
                userName: '',
                password: '',
            },
            franchise: [],
            businessArea: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/franchise/')
            .then(resp => {
                console.log(resp.data);
                this.setState({
                    franchise: resp.data
                });
            });
    }

    handleChange = (event) => {
        const { formData } = this.state;
        //console.log(event.target.value);
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
        console.log(this.state.formData);
    }


    onChangeHandler = (event) => {
        axios.get('http://localhost:3001/businessArea/' + event.target.value)
            .then(resp => {
                console.log(resp.data.data);
                this.setState({
                    businessArea: resp.data.data
                });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
                        <form role="form">
                            <h2 className="text-center">Raise Incidents</h2>
                            <hr className="colorgraph" />

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label>Your Franchise
                                        <select className="col-md-12" value={this.state.category} onChange={this.onChangeHandler} className="form-control">
                                                <option value="">Select a category</option>
                                                {this.state.franchise.map((item, index) => {
                                                    return <option value={item.value} key={index} >{item.name}</option>
                                                })}
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label>Your Business Area
                                            <select onChange={this.onChangeHandlerq} name="place" className="form-control">
                                                {this.state.businessArea.map((item, index) => {
                                                    return <option value={item.value} key={index} >{item.name}</option>
                                                })}                                            </select>
                                        </label>
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

const mapStateToProps = (state, nextProps) => {
    return {
        userDetails: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RaiseIncidents);