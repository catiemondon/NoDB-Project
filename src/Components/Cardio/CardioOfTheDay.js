import React from 'react'

const CardioOfTheDay=(props)=>{
    return(
            
        <div>
            <h4>
            {props.exercisename}
            <p> Time: {props.cardiotime} minutes</p>
            </h4>
        </div>
    )
}

export default CardioOfTheDay
