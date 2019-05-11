import React, { Component } from "react"
import './Weights.css'

class WeightExercise extends Component{
    constructor(){
        super()
        this.state={
            input: '',
            repInput: '',
            edit: false
        }
    }

    handleEdit=()=>{
        this.setState({edit: !this.state.edit})
    }

    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

   

    handleSave=()=>{
        this.props.editWeight(this.state.input, this.state.repInput,this.props.exercise.id)
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
                    {`${this.props.exercise.name} Reps: ${this.props.exercise.reps}`}
                    
                    
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </h4>
                    {
                        this.state.edit ?
                        <div>
                            <input type="text" placeholder="Weight Exercise" name="input" onChange={this.handleInputChange}/> <input type="text" name="repInput" onChange={this.handleInputChange}></input>
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