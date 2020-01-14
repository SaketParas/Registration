import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props.add.stored_data);
        let show_user = this.props.add.stored_data.map(e => {
            return (
                <div>
                    <div class="card col-6 m-5">
                        <div class="card-body">
                        <p>{e.userName}</p>
                        <h4>{e.comment}</h4>
                        <Link to='/Comment' className="btn btn-outline-danger mt-2">Comment</Link>
                        </div>
                    </div>
                    
                </div>
            )
        })
        return (
            <div>
                <h2>post page</h2>
                {show_user}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state.post
    }
}

export default connect(mapStateToProps)(Post)