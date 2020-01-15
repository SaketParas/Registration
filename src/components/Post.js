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
 console.log(this.props.allTopic);
        let show_user = this.props.allTopic.data.map(e => {
            return (
                <div>
                    <div class="card col-6 m-5">
                        <div class="card-body">
                        <h3>{e.userName}</h3>
                        <h4>{e.topic}</h4>
                        <Link to={`/edit/${e.id}`} className="btn btn-outline-danger mt-2">Comment</Link>
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
        allTopic: state.allData
    }
}

export default connect(mapStateToProps)(Post)