import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import ExtraComment from './ExtraComment';
class Edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            topic:'',
            id:'',
            comment:''
        }
    }

    componentDidMount() {
        this.props.allTopic.data.map(e => {
            if(e.id == this.props.match.params.id){
                this.setState({topic:e.topic,id:e.id })
            }
        })
    }
    handleInput = (e) => {
        this.setState({comment:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.comment);
        
    }
    
    render() {
       // console.log(this.props);
       console.log(this.props.allTopic.data);
        
        return (
            <React.Fragment>
            <div className="container mt-5">
               <div className="row">
                   <div className="col-2">
                       <h1 class="text-primary">My Post</h1>
                            <div class="card">                    
                            <div class="card-body">
                               <h5 class="card-title">{this.state.topic}</h5>
                               
                            </div>
                        </div> 
                  </div>
               </div>
           </div>
           
         <ExtraComment id={this.state.id}/>
       </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       allTopic: state.allData
    }
}

export default connect(mapStateToProps) (Edit);