import React, { Component } from 'react'
import axios from 'axios'
import WeightExercise from './WeightExercise'
import WeightOfTheDay from './WeightOfTheDay'
class AddWeight extends Component{
    constructor(){
        super()
        this.state={
            weights: [],
            weightName: ''
        }
    }

    componentDidMount=()=>{
        axios.get('/api/weights').then((res)=>{
            this.setState({
                weights: res.data
            })
        })
    }

    handleUpdateInput=(e)=>{
        this.setState({

            [e.target.name]: e.target.value
        })
    }

    handleAddWeight=(e)=>{
        e.preventDefault()
        axios.post('/api/addWeight', {name:this.state.weightName}).then((res)=>{
            console.log(res)
            this.setState({
                weights: res.data
            })
        })
    }

    handleUpdateWeight=(input, id)=>{
        axios.put(`/api/editWeight/${id}`, {name:input})
        .then(res =>{
            this.setState({
                weights: res.data
            })
        })
    }

    handleDeleteWeight=(id)=>{
        axios.delete(`/api/deleteWeight/${id}`)
        .then(res=>{
            this.setState({
                weights: res.data
            })
        })
    }

    render(){
        const weights= this.state.weights.map((weight, i)=>{
            return(
                <WeightExercise key={i} exercise={weight} editWeight={this.handleUpdateWeight} deleteWeight={this.handleDeleteWeight} />
            )
        })
        return(
            <div>
                <h2>Weights</h2>
                {weights}
              <form onSubmit={this.handleAddWeight}>
              <input placeholder="Weight Exercise" name="weightName" onChange={this.handleUpdateInput}></input>

            
                <button>Add Weight Exercise</button>

              </form>
                <WeightOfTheDay exercises={weights}/>
            </div>
        )
    }
}

export default AddWeight