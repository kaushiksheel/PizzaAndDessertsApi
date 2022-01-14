const dotenv=require('dotenv')
const express=require('express')
const app=express()
const cors=require('cors')


dotenv.config({path:'./.env'})
app.use(express.json())
app.use(cors())

const id=  Math.floor(Math.random()*9999)

const Pizzas = [
    {
      "id":id,
      "name":"Margherita",
      "veg":true,
      "price":449,
      "description":"Cheese",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.7d3b623ceb66e87fc7247fa81c6cfdc1.1.jpg?width=800",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 279 }],
        "mediumstuffedcrustcheesemax":[{ "price": 375 }],
        "mediumstuffedcrustvegkebab":[{ "price": 375 }],
      }],
    },
    {
      "id":id,
      "name":"Tandoori Paneer",
      "veg":true,
      "price":529,
      "description":"Spiced paneeer, Onion,Green Capsicum & Red Paprika in Tandoori Sauce",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.954d93452557209bebe0b7f49e776ba2.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 529 }],
        "mediumstuffedcrustcheesemax":[{ "price": 625 }],
        "medium stuffed crust-veg kebab":[{ "price": 625 }],
      }],
    },
    {
      "id":id,
      "name":"Veggie Supreme",
      "veg":true,
      "price":569,
      "description":"Black Olives,Green Capsicum, Mushroom, Onion,Red Paprika, Sweet Corn",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.403f5e6cf9abb29247a97732c8aae860.1.jpg?width=800",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 569 }],
        "mediumstuffedcrustcheesemax":[{ "price": 665 }],
        "medium stuffed crust-veg kebab":[{ "price": 665 }],
      }],
    },
    {
      "id":id,
      "name":"Double Paneer Supreme",
      "veg":true,
      "price":569,
      "description":"Spiced Paneer, Herbed Onion&Green Capsicum, Red Paprika",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.9d215eb865735ce44225317997153b73.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 569 }],
        "mediumstuffedcrustcheesemax":[{ "price": 665 }],
        "medium stuffed crust-veg kebab":[{ "price": 665 }],
      }],
    },
    {
      "id":id,
      "name":"Veggie Kebab Surprise",
      "veg":true,
      "price":529,
      "description":"Veg Kebab,Onion,Green Capsicum,Tomato & Sweet Corn in Tandoori Sauce",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veg-kebab-surprise.6895b792bfdd274d1bb822ff8dc1a69b.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 529 }],
        "mediumstuffedcrustcheesemax":[{ "price": 625 }],
        "medium stuffed crust-veg kebab":[{ "price": 625 }],
      }],
    },
    {
      "id":id,
      "name":"Chicken Supreme",
      "veg":false,
      "price":629,
      "description":"Herbed Chicken,Schezwan Chicken Meatball,Chicken Tikka",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.f29fa58b7f2a3ec307b6c0b44411f900.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 725 }],
        "mediumstuffedcrustcheesemax":[{ "price": 625 }],
        "mediumstuffedcrustchickenseekhkebab":[{ "price": 725 }],
      }],
    },
    {
      id: 7,
      "name":"Chicken Tikka Supreme",
      "veg":false,
      "price":629,
      "description":"Chicken Tikka,Chicken Malai Tikka,Onion,Red Paprika",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka-supreme.d118fcb7a45549b90fc6313f8b45a9cf.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 725 }],
        "mediumstuffedcrustcheesemax":[{ "price": 625 }],
        "mediumstuffedcrustchickenseekhkebab":[{ "price": 725 }],
      }],
    },
    {
      "id":id,
      "name":"Triple Chicken Feast",
      "veg":false,
      "price":629,
      "description":"Schezwan Chicken Meatball Herbed Chicken,Chicken Sausage,Geen Capsicum, Onion,Red Paprika",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.21e57422a5579843b4722a067fbda8ca.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 629 }],
        "mediumstuffedcrustcheesemax":[{ "price": 725 }],
        "mediumstuffedcrustchickenseekhkebab":[{ "price": 725 }],
      }],
    },
    {
      "id":id,
      "name":"Chicken Tikka",
      "veg":false,
      "price":569,
      "description":"Chicken Tikka, Onion, Tomato",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka.4e3ef28838886936da1a2280543cfae8.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 569 }],
        "mediumstuffedcrustcheesemax":[{ "price": 665 }],
        "mediumstuffedcrustchickenseekhkebab":[{ "price": 665 }],
      }],
    },
    {
      "id":id,
      "name":"Double Chicken Sausage",
      "veg":false,
      "price":529,
      "description":"Chicken Sausage",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-chicken-sausage.27693ba787c68a763bb3f0e397de0019.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 529 }],
        "mediumstuffedcrustcheesemax":[{ "price": 625 }],
        "mediumstuffedcrustchickenseekhkebab":[{ "price": 625 }],
      }],
    },
    {
     "id":id,
      "name":"Spiced Chicken Meatballs",
      "veg":false,
      "price":469,
      "description":"Schezwan Chicken Meatball Onion",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/spiced-chicken-meatballs.fcb515f6af388d6e30df81ca2968798c.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 469 }],
        "mediumstuffedcrustcheesemax":[{ "price": 565 }],
        "medium stuffed crust-veg kebab":[{ "price": 565 }],
      }],
    },
    {
      "id":id,
      "name":"Double Cheese",
      "veg":true,
      "price":419,
      "description":"Extra Cheese on Cheese",
      "quantity":1,
      "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.f8ac8046d97de45670aa7d41b5cf8db6.1.jpg?width=522",
      "sizeandcrust":[{
        "mediumPan":[{ "price": 419 }],
        "mediumstuffedcrustcheesemax":[{ "price": 515 }],
        "medium stuffed crust-veg kebab":[{ "price": 515 }],
      }],
    },
  ];
  

const Desserts=[
    {
        "id":id,
        "name":"Choco Sundae",
        "price":29,
        "description":"Choco Sundae Cup (100 ml)",
        "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-sundae.e0d29fd156012e251c099c2771219d18.1.jpg?width=800",
        "quantity":1
    },
    {
        "id":id,
        "name":"Cornetto Double Chocolate",
        "price":38,
        "description":"Cornetto Double Chocolate Cone (105 ml)",
        "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/cornetto-double-chocolate.acc21849ac732f2f85998ad73e532d40.1.jpg?width=522",
        "quantity":1
    },
    {
        "id":id,
        "name":"Magnum Truffle",
        "price":76,
        "description":"Magnum Truffle (80 ml)",
        "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/magnum-truffle.e300005ba1d8c15aafe824c1fa3b41ea.1.jpg?width=522",
        "quantity":1
    },
    {
        "id":id,
        "name":"Divine Chocolate(Tub)",
        "price":209,
        "description":"Divine Chocolate (700 ml)",
        "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/divine-chocolate-tub.1df6b11e6e5d510cd11ae0d6e475686d.1.jpg?width=522",
        "quantity":1
    },
    {
        "id":id,
        "name":"Choco Volcano Cake",
        "price":99,
        "description":"Choco Delight With A Gooey Chocolate Volcano Centre",
        "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.dd9f24941b09268c73c073494d54480d.1.jpg?width=522",
        "quantity":1
    },
]


app.get('/',(req,res)=>{
    res.status(200).send('search pizzas or desserts by parameter..')
})

app.get('/pizzas',(req,res)=>{
    res.status(200).send(Pizzas)
})
app.get('/desserts',(req,res)=>{
    res.status(200).send(Desserts)
})

const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`Listening on port${port}`)
})
