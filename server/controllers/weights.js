//Weights data and CRUD functions

let weights= [
    {name: "Curls", reps:12,  id: 1},
    {name: "Squats", reps: 10, id: 2},
    {name: "Deadlifts", reps:8, id:3}
]
let id= 1;

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
            reps: req.body.reps,
            id: id,

        }
        weights=[...weights, newWeight]
        res.status(200).send(weights)
        console.log(newWeight)
    },

    editWeight:(req, res)=>{
        
        let {name}= req.body
        let {id}= req.params
        
        for(var i=0; i<weights.length; i++){
            if(weights[i].id=== +id){
                weights[i].name = name
            }
        }
        res.status(200).send(weights)
    },

    deleteCardio: (req, res)=>{
        let {id}= req.params
        for(let i=0; i<weights.length; i++){
            if(weights[i].id === +id){
                weights.splice([i],1)
            }
        }
        res.status(200).send(weights)
    }
    
}