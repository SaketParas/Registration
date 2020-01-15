import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser, signoutUser } from "../redux/authAction";
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""


        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleClick = () => {
        console.log(this.props)
        this.props.loginUser(this.state);
        setTimeout(() => {
            if (!this.props.isAuth) {
                alert("oops !! Try Again");
            }
            if (this.props.isAuth) {
                this.props.history.push("/dashboard")

            }
        });
        this.setState({
            username: '',
            password: ''
        });

    }

    render() {

        console.log(this.props.currentUser)
        return (
            <React.Fragment>
                <div class="card mt-5 col-8 ml-5">
                    <div class="card-body">
                        <div className="container">
                            <div className=" mx-auto mt-5">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" placeholder="Enter Username" className="form-control" onChange={this.handleChange} value={this.state.username} name="username"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" placeholder="Enter Password" className="form-control" onChange={this.handleChange} value={this.state.password} name="password"></input>
                                </div>
                                <button className="btn btn-outline-success" onClick={this.handleClick}>Login</button>

                            </div>
                            <div className="mt-5">
                                Still not signUp ?  <Link to='/' className="btn btn-outline-danger mt-2">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth,
        currentUser: state.login.currentUser
    }

}
const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(loginUser(data)),
    signoutUser: () => dispatch(signoutUser())

})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
