import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addComment} from '../redux/CommentAction'
import ExtraView from './ExtraView';

class ExtraComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
             comment:''
        }
    }
    handleInput = (e) => {
        this.setState({comment:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        let randomNumber = Math.floor(Math.random(2000)*1000);
        let newComment = {
            tid: this.props.id,
            cid: randomNumber,
            comment:this.state.comment
        }
        
        this.props.addComment(newComment)

        
    }
    render() {
        console.log('test : ', this.props.id)
        return (
            <React.Fragment>
                       <div className="container">
                           <div className="row">
                               <div className="col-6">
                               <form onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <label class="text-danger">My Comment</label>
                                            <textarea class="form-control" name="comment" value={this.state.comment} onChange={this.handleInput}  rows="3"></textarea>
                                        </div>
                                        <button className="btn btn-outline-danger mt-2">Submit</button>
                                        {/* <Link to="/extraview" className="btn btn-primary">See</Link> */}
                                        
                                </form>
                               </div>
                           </div>
                       </div>
                       <ExtraView tid={this.props.id}/>
            </React.Fragment>
        );
    }
}

const dispatchStateToProps = (dispatch)  => {
    return {
        addComment: (send) => dispatch(addComment(send))
    }
}

export default connect(null, dispatchStateToProps) (ExtraComment);