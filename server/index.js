const express= require('express')
const app= express()
const weights_ctrl= require('./controllers/weights')
const cardio_ctrl= require('./controllers/cardio')
app.use(express.json())


//Weight based CRUD operations
app.get('/api/weights', weights_ctrl.getAllWeights)

app.get('/api/weights/:id', weights_ctrl.getWeightById)

app.post('/api/addWeight', weights_ctrl.addWeight)



//Cardio based CRUD operations

app.get('/api/cardio', cardio_ctrl.getAllCardio)

app.get('/api/cardio/:id', cardio_ctrl.getCardioById)

app.post('/api/addCardio', cardio_ctrl.addCardio)

const port= 3333;
app.listen(port, ()=> console.log(`ten points to ${port}`))