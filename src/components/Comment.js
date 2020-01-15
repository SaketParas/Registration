// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addComment } from './../redux/CommentAction';
// import { Link } from 'react-router-dom';

// class Comment extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }
//     input_change = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }
//     input_submit = (e) => {
//         e.preventDefault()
//         console.log(this.state);
//         let random_number = Math.floor(Math.random(2000) * 1000);
//         let data = {
//             comment: this.state.comment,
//             // id: random_number
//         }
//         console.log(data);
//         this.props.start_comment(data);
//         //this.props.history.push('/View')
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <div className="col-6 mt-5">
//                     <form onSubmit={this.input_submit}>
//                         Comment :<textarea class="form-control" aria-label="With textarea" placeholder="Make Comment" name="comment" value={this.state.comment} onChange={this.input_change}></textarea>
//                         <button type="submit" class="btn btn-outline-success mt-2">Comment</button>
//                     </form>
//                     <Link to="/Post" class="btn btn-outline-danger mt-3">Cancle </Link>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         start_comment: (data) => dispatch(addComment(data))
//     }
// }
// export default connect(null, mapDispatchToProps)(Comment)  