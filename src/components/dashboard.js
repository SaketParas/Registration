import React, { Component } from 'react'
import { connect } from "react-redux"

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            comment: "",
            sortId: Date.now()

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
        this.setState({
            arr: this.state.comment,
            id: this.state.id

        })
        let newComment = {
            id: this.props.data.login.currentUser.id,
            userName: this.props.data.login.currentUser.username,
            commentId: randomNumber,
            comment: this.state.comment,

            sortId: this.state.sortId

        }
        this.props.addingComment(newComment)
        //this.props.history.push('/allComment')
        console.log(this.state.arr)


    }
    render() {
        console.log(this.state.arr)
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"> Hi {this.props.data.login.currentUser.username} Welcome to facebook</a>

                    <button>Logout</button>
                </nav>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={this.handleSubmit}>
                                    <div class="form-group">
                                        <label>Start a discussion</label>
                                        <textarea class="form-control" rows="3" onChange={this.handleChange} name="comment"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-danger">Add Your Comment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state

    }
}

export default connect(mapStateToProps)(Dashboard)