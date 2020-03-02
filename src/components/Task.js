import React, {Component} from 'react'

class Task extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                {this.props.task}
            </div>
        )
    }
}
export default Task


