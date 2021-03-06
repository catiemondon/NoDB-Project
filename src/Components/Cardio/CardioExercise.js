import React, { Component } from "react"
import  './Cardio.css'

class CardioExercise extends Component{
    constructor(){
        super()
        this.state={
            input: '',
            timeInput: '',
            edit: false
        }
    }

    handleEdit=()=>{
        this.setState({edit:!this.state.edit})
    }

    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSave=()=>{
        this.props.editCardio(this.state.input, this.state.timeInput, this.props.exercise.id)
        this.setState({
            edit: !this.state.edit
        })
    }

  handleDelete=()=>{
      this.props.deleteCardio(this.props.exercise.id)
  }
 


    render(){
        
        return(
            <div>
                <li>
                    <h4>
                    {`${this.props.exercise.name} Time: ${this.props.exercise.time} minutes`}


                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete </button>
                </h4>
                    {
                        this.state.edit ?
                        <div>
                            <input type="text" placeholder="Cardio Exercise" name="input" onChange={this.handleInputChange}/>
                            <input type="text" placeholder="Cardio time" name="timeInput" onChange={this.handleInputChange}></input>
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

export default CardioExercise