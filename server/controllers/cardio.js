let cardios=[
    {name: "Stairmaster", id: 1},
    {name: "Treadmill", id: 2}
]

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
        res.status(200).send(newCardio)
    }


}