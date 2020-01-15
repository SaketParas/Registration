import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTopic } from './../redux/CommentAction';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            topic: "",

        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        let randomNumber = Math.floor(Math.random() * 10000);

        let newComment = {
            // id: this.props.data.login.currentUser.id,
            userName: this.props.data.login.currentUser.username,
            id: randomNumber,
            topic: this.state.topic,

        }
        console.log(newComment);

        this.props.addingComment(newComment)
        this.props.history.push('/Post')


    }
    render() {
        console.log(this.state.arr)
        return (
            <React.Fragment>
                <div class="card col-8 m-5">
                    <div class="card-body">
                        <div>
                            <div class="navbar navbar-expand-lg navbar-light bg-light">
                                <h3 class="navbar-brand text-primary" href="#"> Hi {this.props.data.login.currentUser.username} Welcome </h3>

                            </div>
                            <div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <form onSubmit={this.handleSubmit}>
                                                <div class="form-group">
                                                    <label>Start a discussion</label>
                                                    <textarea class="form-control" rows="3" onChange={this.handleChange} name="topic"></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-outline-danger">Post</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div >
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addingComment: (data) => dispatch(addTopic(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

