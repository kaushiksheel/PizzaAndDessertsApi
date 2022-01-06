const dotenv=require('dotenv')
const express=require('express')
const app=express()
const cors=require('cors')


dotenv.config({path:'./.env'})
app.use(express.json())
app.use(cors())
const Pizzas = [
    {
      "id": 1,
      " name": "Margherita",
      " veg": true,
      "price": 449,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.7d3b623ceb66e87fc7247fa81c6cfdc1.1.jpg?width=800",
      "size and crust": {
        "medium Pan": [{ "price": 279 }],
        "medium stuffed crust-cheese max": [{ "price": 375 }],
        "medium stuffed crust-veg kebab": [{ "price": 375 }],
      },
    },
    {
      "id": 2,
      " name": "Tandoori Paneer",
      " veg": true,
      "price": 529,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.954d93452557209bebe0b7f49e776ba2.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 529 }],
        "medium stuffed crust-cheese max": [{ "price": 625 }],
        "medium stuffed crust-veg kebab": [{ "price": 625 }],
      },
    },
    {
      "id": 3,
      " name": "Veggie Supreme",
      " veg": true,
      "price": 569,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.403f5e6cf9abb29247a97732c8aae860.1.jpg?width=800",
      "size and crust": {
        "medium Pan": [{ "price": 569 }],
        "medium stuffed crust-cheese max": [{ "price": 665 }],
        "medium stuffed crust-veg kebab": [{ "price": 665 }],
      },
    },
    {
      "id": 4,
      " name": "Dobule Paneer Supreme",
      " veg": true,
      "price": 569,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.9d215eb865735ce44225317997153b73.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 569 }],
        "medium stuffed crust-cheese max": [{ "price": 665 }],
        "medium stuffed crust-veg kebab": [{ "price": 665 }],
      },
    },
    {
      "id": 5,
      " name": "Veggie Kebab Surprise",
      " veg": true,
      "price": 529,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veg-kebab-surprise.6895b792bfdd274d1bb822ff8dc1a69b.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 529 }],
        "medium stuffed crust-cheese max": [{ "price": 625 }],
        "medium stuffed crust-veg kebab": [{ "price": 625 }],
      },
    },
    {
      "id": 6,
      " name": "Chicken Supreme",
      " veg": false,
      "price": 629,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.f29fa58b7f2a3ec307b6c0b44411f900.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 725 }],
        "medium stuffed crust-cheese max": [{ "price": 625 }],
        "medium stuffed crust- chicken seekh kebab": [{ "price": 725 }],
      },
    },
    {
      id: 7,
      " name": "Chicken Tikka Supreme",
      " veg": false,
      "price": 629,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka-supreme.d118fcb7a45549b90fc6313f8b45a9cf.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 725 }],
        "medium stuffed crust-cheese max": [{ "price": 625 }],
        "medium stuffed crust- chicken seekh kebab": [{ "price": 725 }],
      },
    },
    {
      "id": 8,
      " name": "Triple Chicken Feast",
      " veg": false,
      "price": 629,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.21e57422a5579843b4722a067fbda8ca.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 629 }],
        "medium stuffed crust-cheese max": [{ "price": 725 }],
        "medium stuffed crust- chicken seekh kebab": [{ "price": 725 }],
      },
    },
    {
      "id": 9,
      " name": "Chicken Tikka",
      " veg": false,
      "price": 569,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka.4e3ef28838886936da1a2280543cfae8.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 569 }],
        "medium stuffed crust-cheese max": [{ "price": 665 }],
        "medium stuffed crust- chicken seekh kebab": [{ "price": 665 }],
      },
    },
    {
      "id": 10,
      " name": "Double Chicken Sausage",
      " veg": false,
      "price": 529,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-chicken-sausage.27693ba787c68a763bb3f0e397de0019.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 529 }],
        "medium stuffed crust-cheese max": [{ "price": 625 }],
        "medium stuffed crust- chicken seekh kebab": [{ "price": 625 }],
      },
    },
    {
     " id": 11,
      " name": "Spiced Chicken Meatballs",
      " veg": false,
      "price": 469,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/spiced-chicken-meatballs.fcb515f6af388d6e30df81ca2968798c.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 469 }],
        "medium stuffed crust-cheese max": [{ "price": 565 }],
        "medium stuffed crust-veg kebab": [{ "price": 565 }],
      },
    },
    {
      "id": 12,
      " name": "Double Cheese",
      " veg": true,
      "price": 419,
      "   quantity": 1,
      " img":
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.f8ac8046d97de45670aa7d41b5cf8db6.1.jpg?width=522",
      "size and crust": {
        "medium Pan": [{ "price": 419 }],
        "medium stuffed crust-cheese max": [{ "price": 515 }],
        "medium stuffed crust-veg kebab": [{ "price": 515 }],
      },
    },
  ];
  

const Desserts=[
    {
        "id":1,
        "name":"Choco Sundae",
        "price":29,
        "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-sundae.e0d29fd156012e251c099c2771219d18.1.jpg?width=800",
        "quantity":1
    },
    {
        "id":2,
        "name":"Cornetto Double Chocolate",
        "price":38,
        "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/cornetto-double-chocolate.acc21849ac732f2f85998ad73e532d40.1.jpg?width=522",
        "quantity":1
    },
    {
        "id":3,
        "name":"Magnum Truffle",
        "price":76,
        "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/magnum-truffle.e300005ba1d8c15aafe824c1fa3b41ea.1.jpg?width=522",
        "quantity":1
    },
    {
        "id":4,
        "name":"Divine Chocolate(Tub)",
        "price":209,
        "img":"https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/divine-chocolate-tub.1df6b11e6e5d510cd11ae0d6e475686d.1.jpg?width=522",
        "quantity":1
    },
    {
        "id":5,
        "name":"Choco Volcano Cake",
        "price":99,
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