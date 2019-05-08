import React, { Component } from 'react'
import axios from 'axios'

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

    render(){
        const weights= this.state.weights.map((weight)=>{
            return(
                <li key={weight.id}><h4>{weight.name}</h4></li>
            )
        })
        return(
            <div>
                <h2>Weights</h2>
                {weights}
              <form onSubmit={this.handleAddWeight}>
              <input placeholder="Add new weight" name="weightName"></input>

              //YOU LEFT OFF HERE. USE ADDEVENT.JS to set up your button and you need to handle the Input and add weight
                <button></button>

              </form>
                
            </div>
        )
    }
}

export default AddWeight