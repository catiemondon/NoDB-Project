import React, { Component } from 'react'
import axios from 'axios'
import CardioOfTheDay from './CardioOfTheDay'

import CardioExercise from './CardioExercise'

class AddCardio extends Component{
    constructor(){
        super()
        this.state={
            cardios: [],
            cardioName: ''
        }
    }

    componentDidMount=()=>{
        axios.get('/api/cardio').then((res)=>{
            this.setState({
                cardios: res.data
            })
        })
    }

    handleUpdateInput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddCardio=(e)=>{
        e.preventDefault()
        axios.post('/api/addCardio', {name:this.state.cardioName}).then((res)=>{
            
            this.setState({
                cardios: res.data
            })
        })
    }

    handleUpdateCardio=(input, id)=>{
        
        axios.put(`/api/editCardio/${id}`, {name: input})
        .then(res =>{
           
            this.setState({
                cardios: res.data
            })
        })
    }

    //write delete functionality here

    handleDeleteCardio=(id)=>{
        axios.delete(`/api/deleteCardio/${id}`).then(res=>{
            this.setState({
                cardios: res.data
            })
        })
    }

    render(){
        const cardios=this.state.cardios.map((cardio, i)=>{
            return(
               <CardioExercise key={i} exercise={cardio} editCardio={this.handleUpdateCardio} deleteCardio={this.handleDeleteCardio}
                />
                //Add prop key for delete function
            )
        })

        return(
            <div>
                <h2>Cardio</h2>
                {cardios}
           
            <form onSubmit={this.handleAddCardio}>
            <input placeholder="Cardio Exercise" name="cardioName" onChange={this.handleUpdateInput} />
            <button>Add Cardio Exercise</button>
            
            </form>
            <CardioOfTheDay exercises={cardios} />
            </div>
        )
    }
}

export default AddCardio