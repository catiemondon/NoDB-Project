import React, { Component } from 'react'
import axios from 'axios'
import CardioOfTheDay from './CardioOfTheDay'

import CardioExercise from './CardioExercise'

class AddCardio extends Component{
    constructor(){
        super()
        this.state={
            cardios: [],
            cardioName: '',
            cardioTime: null
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
        axios.post('/api/addCardio', {name:this.state.cardioName, time: this.state.cardioTime}).then((res)=>{
            
            this.setState({
                cardios: res.data
            })
        })
    }

    handleUpdateCardio=(input, timeInput, id)=>{
        
        axios.put(`/api/editCardio/${id}`, {name: input, time: timeInput})
        .then(res =>{
           
            this.setState({
                cardios: res.data
            })
        }).catch(console.log('error'))
    }

    //write delete functionality here

    handleDeleteCardio=(id)=>{
        axios.delete(`/api/deleteCardio/${id}`).then(res=>{
            
            this.setState({
                
                cardios: res.data
            })
        
        }).catch(console.log('error'))
    }

    // handleClearInput=()=>{
    //    this.setState({
    //     cardioName: '',
    //     cardioTime: null
    //    })
    // }

    render(){
        
        const cardios=this.state.cardios.map((cardio, i)=>{
            return(
                <CardioExercise key={i} exercise={cardio} editCardio={this.handleUpdateCardio} deleteCardio={this.handleDeleteCardio} />
              
                //Add prop key for delete function
            )
        })
        const cardiosname=this.state.cardios.map((cardio, i)=>{
            return(
                <CardioOfTheDay exercisename={cardio.name} cardiotime={cardio.time}key={i}
                />
                
            )
        })
        

        return(
            

            <div>
                
                <div className="TodayCardio">
                <h3>Today's Cardio:</h3>
                <li>
                <div>
                
                {cardiosname}
                
                </div>
                </li>
                
            </div>
            
            
                <div className="CardioList">
                <h2 className="cardio">Cardio</h2>
                {cardios}
           
            <form onSubmit={this.handleAddCardio} className="AddCardioList">
            <input id="cardioInput" placeholder="Input Cardio Exercise" name="cardioName" onChange={this.handleUpdateInput} />
            <input id="cardioInputTime" placeholder ="Cardio time" name="cardioTime" type="reset"  onChange={this.handleUpdateInput} />
            <button>Add Cardio Exercise</button>
            
            </form>
            </div>
            </div>
            
        )
    }
}

export default AddCardio