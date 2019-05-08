//Weights data and CRUD functions

let weights= [
    {name: "Curls", id: 1},
    {name: "Squats", id: 2},
    {name: "Deadlifts", id:3}
]

module.exports={
    getAllWeights: (req, res)=>{
        res.status(200).send(weights)
    },

    getWeightById: (req,res)=>{
        const weight= weights.filter((weight)=>{
            return weight.id === +req.params.id
        })
        res.status(200).send(weight[0])
    },

    addWeight:(req, res)=>{
        let id= weights[weights.length-1].id +1
        const newWeight={
            name: req.body.name,
            id: id
        }
        weights=[...weights, newWeight]
        res.status(200).send(newWeight)
    },

    
}