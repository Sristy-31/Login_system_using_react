import React, {Component} from "react";
import pic from '../assets/undraw_remotely_2j6y.svg';

class Auth extends Component {

    login(e){
        e.preventDefault();
        console.warn("state", this.state);
        fetch('http://127.0.0.1:8000/api/login', {
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp)=>{console.log(resp)}
        )
        })
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
                            <h3>Sign In</h3>
                            </div>
                            <form>
                            <div className="form-group first">
                                <label>Username</label>
                                <input type="text"
                                onChange={(e)=>{this.setState({email:e.target.value})}}
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
                            <div className="d-flex mb-5 align-items-center">
                                <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                            </div>
                            <input type="submit"
                            value="Log In" 
                             onClick={(e)=>this.login(e)}
                              className="btn btn-block btn-primary" />
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        );
    }
}

export default Auth;

