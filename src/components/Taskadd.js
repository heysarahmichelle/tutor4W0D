import React, {Component} from 'react';

export default class Taskadd extends Component{
    constructor(){
        super();
        this.state={
            name: ''
        }
    }

    handleClick = () => {
        this.props.addTasks(this.state.name)
        this.setState({name: ''})
    }

    render(){
        return(
            <div className="add-container">
                <input value={this.state.name} placeholder='Name' onChange={(e)=>{this.setState({name: e.target.value})}}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}
