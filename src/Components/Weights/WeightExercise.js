import React, { Component } from "react"

class WeightExercise extends Component{
    constructor(){
        super()
        this.state={
            input: '',
            edit: false
        }
    }

    handleEdit=()=>{
        this.setState({edit: !this.state.edit})
    }

    handleInputChange=(e)=>{
        this.setState({input: e.target.value})
    }

    handleSave=()=>{
        this.props.editWeight(this.state.input, this.props.exercise.id)
        this.setState({
            edit: !this.state.edit
        })
    }

    handleDelete=()=>{
        this.props.deleteWeight(this.props.exercise.id)
       
    }

    render(){

        return(
            <div>
            <li>

                <h4>
                    {this.props.exercise.name}
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </h4>
                    {
                        this.state.edit ?
                        <div>
                            <input type="text" onChange={this.handleInputChange}/>
                            <button onClick={this.handleSave}>Save</button>
                        </div>
                        :
                        null
                    }
                  
                  
            </li>  
            </div>
        )
    }
}

export default WeightExercise