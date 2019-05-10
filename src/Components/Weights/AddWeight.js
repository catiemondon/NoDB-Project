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

        const weightsname=this.state.weights.map(
            (weight,i)=>{
                return(
                    <WeightOfTheDay exercisename= {weight.name} key={i} />
                )
            }
        )

        return(
            <div>
                <div className="TodayWeights">
                <h3>Today's Weights</h3>
                <li>
                <div>

                {weightsname}

                </div>
                </li>
                </div>


                <div className="WeightsList">
                <h2>Weights</h2>
                {weights}
              <form onSubmit={this.handleAddWeight}>
              <input placeholder="Input Weight Exercise" name="weightName" onChange={this.handleUpdateInput}></input>

            
                <button>Add Weight Exercise</button>

              </form>
            </div>
            </div>
        )
    }
}

export default AddWeight