const dotenv = require('dotenv')
const express = require('express')
const app = express()
const cors = require('cors');
const data=require('./data')


dotenv.config({
  path: './.env'
})
app.use(express.json())
app.use(cors())






app.get('/pizzas', (req, res) => {
  res.status(200).send(data.Pizzas)
})

// find pizzas by id

app.get('/pizzas/:id',(req,res)=>{
  let pizza=data.Pizzas.find(pizza=>pizza.id===parseInt(req.params.id));
  if(!pizza){
    return res.status(404).send('no pizza found with the given id');
  }else{
    return res.status(200).json(pizza)
  }
})




app.get('/desserts', (req, res) => {
  res.status(200).send(data.Desserts)
})


// find desserts by id

app.get('/desserts/:id',(req,res)=>{
  let dessert=data.Desserts.find(dessert=>dessert.id===parseInt(req.params.id));
  if(!dessert){
    return res.status(404).send('no dessert found with the given id');
  }else{
    return res.status(200).json(dessert)
  }
})

// http://localhost:4000/?search=fds


let allData = [...data.Pizzas,...data.Desserts];

app.get('/search', (req, res) => {
  const query = req.query
  const {
    search
  } = query

  const queryTerm = search.toLowerCase().replace(/ /g, '')

  allData.filter((pizza) => {
    const pizzaName = pizza.name.toLowerCase().replace(/ /g, '')
    if (pizzaName === queryTerm) {
      res.status(200).json(pizza)
    }
  })
})








const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on port${port}`)
})