//Cardio data and CRUD functions

let cardios=[
    {name: "Stairmaster", id: 1},
    {name: "Treadmill", id: 2},
    {name: "Hiking", id:3}
]

let id= 1;
module.exports={

    getAllCardio: (req, res)=>{
        res.status(200).send(cardios)
    },

    getCardioById: (req, res)=>{
        const cardio= cardios.filter((cardio)=>{
            return cardio.id === +req.params.id
        })
        res.status(200).send(cardio[0])
    },

    addCardio: (req, res)=>{
        let id= cardios[cardios.length -1].id +1
        const newCardio= {
            name: req.body.name,
            id: id
        }
        cardios=[...cardios, newCardio]
        res.status(200).send(cardios)
    },

    editCardio: (req, res)=>{
        
        let {name}= req.body
        let {id}= req.params
        
        for(var i=0; i<cardios.length; i++){
            if(cardios[i].id === +id){
                cardios[i].name= name
            }
        }
       
        res.status(200).send(cardios)
    },

    deleteCardio: (req, res)=>{
        
        let {id}= req.params
        for(let i=0; i<cardios.length; i++){
            if(cardios[i].id === +id){
                cardios.splice([i],1)
            }
        }
        res.status(200).send(cardios)
    }


}