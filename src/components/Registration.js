import React, {Component} from "react";
import pic from '../assets/undraw_remotely_2j6y.svg';
import {Link} from 'react-router-dom';

class Registration extends Component {

    registration(e){
        e.preventDefault();
        console.log("state", this.state);
    }

    render(){
        return (
            <div className="content">
                    <div className="row">
                            <div className="col-md-6">
                            <img src={pic} className="img-fluid" />
                            </div>
                        <div className="col-md-6 contents">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                            <div className="mb-4">
                            <h3>Sign Up</h3>
                            </div>
                            <form>
                            <div className="form-group first">
                                <label>Email</label>
                                <input type="email"
                                onChange={(e)=>{this.setState({email:e.target.value})}}
                                className="form-control"
                                id="email"/>

                            </div>
                            <div className="form-group first">
                                <label>Username</label>
                                <input type="text"
                                onChange={(e)=>{this.setState({username:e.target.value})}}
                                className="form-control"
                                id="username"/>

                            </div>
                            <div className="form-group last mb-4">
                                <label>Password</label>
                                <input type="password"
                                onChange={(e)=>{this.setState({password:e.target.value})}}
                                 className="form-control"
                                  id="password" />
                            </div>
                        
                            <input type="submit"
                            value="Register"
                             onClick={(e)=>this.registration(e)}
                              className="btn btn-block btn-primary" />

                              <br />
                                <Link to="/">
                                Already have an account ? Sign in here 
                                </Link>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        );
    }
}

export default Registration;

