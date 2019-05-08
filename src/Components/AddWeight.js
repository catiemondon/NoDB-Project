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
                <buton></buton>

              </form>
                
            </div>
        )
    }
}

export default AddWeight