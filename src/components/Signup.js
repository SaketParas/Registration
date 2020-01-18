import React, { Component } from 'react'
import { connect } from "react-redux"
import { signupUser } from "../redux/authAction";
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            id: Math.floor(Math.random() * 100000)
            // type: 'user'
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleClick = () => {
        this.props.signupUser(this.state);
        alert("Waoo Sucessfull");
        this.setState({
            username: '',
            password: '',
            // type: 'user'
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="ml-5 text-danger">Facebook  Clone</h2>
                <div class="card mt-2 col-8 ml-5 card-body p-3 mb-2 bg-info text-white">
                    <div class="card-body p-3 mb-2 bg-info text-white">
                        <div className="container">
                            <div className=" mx-auto mt-5">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" placeholder="Enter Username" className="form-control" id="username" value={this.state.username} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" placeholder="Enter Password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange}></input>
                                </div>

                                <button className="btn btn-outline-warning mt-2" onClick={this.handleClick} >Signup</button>
                            </div>
                            <div className="mt-5">
                                Alreardy signUp ?  <Link to='/Login' className="btn btn-outline-danger mt-2">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    credentials: state.loginData
});

const mapDispatchToProps = dispatch => ({
    signupUser: (data) => dispatch(signupUser(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

