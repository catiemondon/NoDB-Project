import React from 'react'

const CardioOfTheDay=(props)=>{
    return(
        <div>
            <h3>Today's Cardio:</h3>
            {props.exercises}
        </div>
    )
}

export default CardioOfTheDay
