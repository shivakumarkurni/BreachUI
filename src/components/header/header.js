import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from './../../action/action';
import Login from '../login/login';
// import Register from '../register/register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RaiseIncidents from '../raiseIncidents/raiseincidents';
// import Incidents from '../incidents/incidents';
// import IncidentSummary from '../incidentSummary/incidentSummary';
// import Graph from '../graph/graph';
import './header.css';

// const ProtectedRoute = ({ component: Comp, loggedIn, path }) => {
//     console.log(loggedIn);
//     return (
//         <Route path={path} render={(props) => {
//             return loggedIn ? (<Comp {...props} />) : (<Redirect to={{ pathname: "/" }} />);
//         }
//         } />
//     );
// };

class Header extends Component {
    // componentDidMount() {
    //     const userDetails = {
    //         username: 'initialState',
    //         role: 'initialState',
    //         accNo: '0000000'
    //     }
    //     sessionStorage.clear();
    //     this.props.actions.getloginUser(userDetails);
    // }
    // logoutHandler = () => {
    //     const userDetails = {
    //         username: 'initialState',
    //         role: 'initialState',
    //         accNo: '0000000'
    //     }
    //     this.props.actions.getloginUser(userDetails);
    //     toast("Logged out!", {
    //         position: toast.POSITION.BOTTOM_CENTER
    //     });
    //     setTimeout(
    //         function () {
    //             <Redirect to="/logout" />
    //         }
    //             .bind(this),
    //         1500
    //     );
    // }
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <NavLink className="navbar-brand non-active" to='/'>Breach Application</NavLink>
                        </div>
                        <ul className="nav navbar-nav">
                            {this.props.userDetails.role === 'initialState' ? <li><NavLink activeClassName="nav-item nav-link text-center active" className="nav-item nav-link text-center" to='/register'>Sign Up</NavLink></li> : ""}
                            {(this.props.userDetails.role === 'admin1' || this.props.userDetails.role === 'admin2' || this.props.userDetails.role === 'admin3') ? <li><NavLink activeClassName="nav-item nav-link text-center active" className="nav-item nav-link" to='/incidents'>Incidents</NavLink></li> : ""}

                            {(this.props.userDetails.role === 'admin1' || this.props.userDetails.role === 'admin2' || this.props.userDetails.role === 'admin3') ? <li><NavLink activeClassName="nav-item nav-link text-center active" className="nav-item nav-link" to='/graph'>Graphical Representation</NavLink></li> : ""}

                            {this.props.userDetails.role === 'user' ? <li><NavLink activeClassName="nav-item nav-link text-center active" className="nav-item nav-link" to='/raiseIncidents'>Raise Incidents</NavLink></li> : ""}
                            {this.props.userDetails.role === 'user' ? <li><NavLink activeClassName="nav-item nav-link text-center active" className="nav-item nav-link" to='/incidentSummary'>Incident Summary</NavLink></li> : ""}

                        </ul>
                        <ul className="nav navbar-nav pull-right">
                            {(this.props.userDetails.role === 'user' || this.props.userDetails.role === 'admin1' || this.props.userDetails.role === 'admin2' || this.props.userDetails.role === 'admin3') ? <li><NavLink className="nav-item nav-link pull-right" to='/logout' onClick={this.logoutHandler}>Logout</NavLink></li> : ""}
                        </ul>
                    </div>
                </nav> */}

                <Switch>
                    <Route exact path="/" component={Login} />
                    {/* <Route exact path="/register" component={Register} /> */}
                    <Route exact path="/logout" component={Login} />
                    {/* <ProtectedRoute exact path="/incidentSummary" loggedIn={this.props.userDetails.role == 'user'} component={IncidentSummary} />
                    <ProtectedRoute exact path="/raiseIncidents" loggedIn={this.props.userDetails.role == 'user'} component={RaiseIncidents} />
                    <ProtectedRoute exact path="/incidents" loggedIn={this.props.userDetails.role === 'admin1' || this.props.userDetails.role === 'admin2' || this.props.userDetails.role === 'admin3'} component={Incidents} />
                    <ProtectedRoute exact path="/graph" loggedIn={this.props.userDetails.role === 'admin1' || this.props.userDetails.role === 'admin2' || this.props.userDetails.role === 'admin3'} component={Graph} /> */}

                    
                    {/* <Route exact path="/incidentSummary" component={IncidentSummary} /> */}
                    <Route exact path="/raiseIncidents" component={RaiseIncidents} />
                    {/* <Route exact path="/incidents" component={Incidents} />
                    <Route exact path="/graph" component={Graph} /> */}


                </Switch>

                <ToastContainer />
            </div>
        );
    }
}

const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
        userDetails: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
