const Pizzas = [{
    "id": 1,
    "name": "Margherita",
    "veg": true,
    "price": 3,
    "description": "Cheese",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.7d3b623ceb66e87fc7247fa81c6cfdc1.1.jpg?width=800",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 3
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 5
      }],
      "mediumstuffedcrustvegkebab": [{
        "price": 8
      }],
    }],
  },
  {
    "id": 2,
    "name": "Tandoori Paneer",
    "veg": true,
    "price": 7,
    "description": "Spiced paneeer, Onion,Green Capsicum & Red Paprika in Tandoori Sauce",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.954d93452557209bebe0b7f49e776ba2.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 7
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 9
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 12
      }],
    }],
  },
  {
    "id": 3,
    "name": "Veggie Supreme",
    "veg": true,
    "price": 8,
    "description": "Black Olives,Green Capsicum, Mushroom, Onion,Red Paprika, Sweet Corn",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.403f5e6cf9abb29247a97732c8aae860.1.jpg?width=800",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 8
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 9
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 10
      }],
    }],
  },
  {
    "id": 4,
    "name": "Double Paneer Supreme",
    "veg": true,
    "price": 6,
    "description": "Spiced Paneer, Herbed Onion&Green Capsicum, Red Paprika",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.9d215eb865735ce44225317997153b73.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 6
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 7
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 9
      }],
    }],
  },
  {
    "id": 4,
    "name": "Veggie Kebab Surprise",
    "veg": true,
    "price": 4,
    "description": "Veg Kebab,Onion,Green Capsicum,Tomato & Sweet Corn in Tandoori Sauce",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veg-kebab-surprise.6895b792bfdd274d1bb822ff8dc1a69b.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 5
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 6
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 8
      }],
    }],
  },
  {
    "id": 5,
    "name": "Chicken Supreme",
    "veg": false,
    "price":7,
    "description": "Herbed Chicken,Schezwan Chicken Meatball,Chicken Tikka",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.f29fa58b7f2a3ec307b6c0b44411f900.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 7
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 9
      }],
      "mediumstuffedcrustchickenseekhkebab": [{
        "price": 12
      }],
    }],
  },
  {
    id: 6,
    "name": "Chicken Tikka Supreme",
    "veg": false,
    "price": 6,
    "description": "Chicken Tikka,Chicken Malai Tikka,Onion,Red Paprika",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka-supreme.d118fcb7a45549b90fc6313f8b45a9cf.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 7
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 9
      }],
      "mediumstuffedcrustchickenseekhkebab": [{
        "price": 11
      }],
    }],
  },
  {
    "id": 7,
    "name": "Triple Chicken Feast",
    "veg": false,
    "price": 8,
    "description": "Schezwan Chicken Meatball Herbed Chicken,Chicken Sausage,Geen Capsicum, Onion,Red Paprika",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.21e57422a5579843b4722a067fbda8ca.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 8
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 10
      }],
      "mediumstuffedcrustchickenseekhkebab": [{
        "price": 13
      }],
    }],
  },
  {
    "id": 8,
    "name": "Chicken Tikka",
    "veg": false,
    "price": 7,
    "description": "Chicken Tikka, Onion, Tomato",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka.4e3ef28838886936da1a2280543cfae8.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 7
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 8
      }],
      "mediumstuffedcrustchickenseekhkebab": [{
        "price": 9
      }],
    }],
  },
  {
    "id": 9,
    "name": "Double Chicken Sausage",
    "veg": false,
    "price": 5,
    "description": "Chicken Sausage",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-chicken-sausage.27693ba787c68a763bb3f0e397de0019.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 5
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 6
      }],
      "mediumstuffedcrustchickenseekhkebab": [{
        "price": 7
      }],
    }],
  },
  {
    "id": 10,
    "name": "Spiced Chicken Meatballs",
    "veg": false,
    "price": 4,
    "description": "Schezwan Chicken Meatball Onion",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/spiced-chicken-meatballs.fcb515f6af388d6e30df81ca2968798c.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 4
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 5
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 6
      }],
    }],
  },
  {
    "id": 11,
    "name": "Double Cheese",
    "veg": true,
    "price": 3,
    "description": "Extra Cheese on Cheese",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.f8ac8046d97de45670aa7d41b5cf8db6.1.jpg?width=522",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 3
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 5
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 7
      }],
    }],
  },
  {
    "id": 12,
    "name": "Chicken Pepper Crunch",
    "veg": false,
    "price": 5,
    "description": "Herbed Chicken, Onion, Green Capsicum, Red Capsicum ",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-pepper-crunch.ad90bc84672d7cd34351745f4b77fe9c.1.jpg",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 5
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 6
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 7
      }],
    }],
  },
  {
    "id": 13,
    "name": "Italian Chicken Feast",
    "veg": false,
    "price": 6,
    "description": "Herbed Chicken, Onion, Green Capsicum, Red Capsicum ",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-chicken-feast.1ccf57b605633e47ca4c6455340a5d2e.1.jpg",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 6
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 7
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 9
      }],
    }],
  },
  {
    "id": 14,
    "name": "Corn & Cheese",
    "veg": true,
    "price": 5,
    "description": "Cheese ,Sweet Corn",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.4f5188ab4391cb45d4a4ed9e849f1e32.1.jpg",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 5
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 7
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 9
      }],
    }],
  },
  {
    "id": 15,
    "name": "Tandoori Onion",
    "veg": true,
    "price": 6,
    "description": "Cheese & Onion in Tandoori sause",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-onion.27d62d7a89f3fd2bb2eb2b9f91d6223b.1.jpg",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 7
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 9
      }],
      "medium stuffed crust kebab": [{
        "price": 11
      }],
    }],
  },
  {
    "id": 16,
    "name": "Chicken Pepperoni",
    "veg": false,
    "price": 5,
    "description": "Cheese ,Chicken pepperoni",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-pepperoni.59a23d539b3675012fadb9e98b043216.1.jpg",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 6
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 9
      }],

    }],
  },
  {
    "id": 17,
    "name": "Chicken N Corn Delight",
    "veg": false,
    "price": 9,
    "description": "Cheese ,Chicken pepperoni",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-n-corn-delight.bc0460bc62d23a77e9db087010bcf00a.1.jpg",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 9

      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 11
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 12
      }],
    }],
  },
  {
    "id": 18,
    "name": "Farmers Pick",
    "veg": true,
    "price": 29,
    "description": "Onion Herbed & Green Capsicum, Red Capsicum, Mushroom, Baby Corn",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/farmers-pick.fcd8cacee43fb94e173e5f04fdf2c2b5.1.jpg",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 5
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 6
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 8
      }],
    }],
  },
  {
    "id": 19,
    "name": "Classic Corn",
    "veg": true,
    "price": 5,
    "description": "Pizza topped with our Classic Pan sauce, sweet corn and cheesy dressing. An all-time favorite.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-corn-pan-personal.7c80196383b32e2ad5715646c1b12df8.1.png?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 5
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 7
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 9
      }],
    }],
  },
  {
    "id": 20,
    "name": "Classic Onion Capsicum",
    "veg": true,
    "price": 4,
    "description": "Pizza topped with our Classic Pan sauce, crunchy onion & capsicum and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-onion-capsicum-pan-personal.dad788ecbd3fcc57366462827e31ee05.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 4
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 5
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 7
      }],
    }],
  },
  {
    "id": 21,
    "name": "Italian Onion Tomato",
    "veg": true,
    "price": 8,
    "description": "Pizza topped with our Chef's Special Italian sauce, crunchy onion, juicy tomatoes and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-onion-tomato-pan-personal.cb37b0766ef3ba8844fa69b2d073c215.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 8
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 10
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 12
      }],
    }],
  },
  {
    "id": 22,
    "name": "Tandoori Mushroom & Sweet Corn",
    "veg": true,
    "price": 5,
    "description": "Pizza topped with our signature tandoori sauce, juicy mushroom, sweet corn and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-mushroom-&-sweet-corn-pan-personal.49a1287d1cece07781c106e552979fa2.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 5
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 6
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 7
      }],
    }],
  },
  {
    "id": 23,
    "name": "Schezwan Corn & Capsicum",
    "veg": true,
    "price": 6,
    "description": "Pizza topped with Spicy Schezwan sauce, sweet corn & crunchy capsicum and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/schezwan-corn-&-capsicum-pan-personal.23c83846270110a536b40ec74529e907.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 6
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 7
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 8
      }],
    }],
  },
  {
    "id": 24,
    "name": "Only Cheesy",
    "veg": true,
    "price": 40,
    "description": "Pizza topped with cheesy dressing and mozzarella cheese for that extraaa cheesy flavor.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/only-cheesy-pan-personal.951dbe6ee07dafc48e04fe9a1bbe4ddb.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 40
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 45
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 50
      }],
    }],
  },
  {
    "id": 25,
    "name": "Classic Sausage",
    "veg": false,
    "price": 8,
    "description": "Pizza topped with our Classic Pan sauce, flavorful chicken sausage and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-sausage-pan-personal.fbbfbce57f62a8d8b366db5f66798704.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 8
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 9
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 11
      }],
    }],
  },
  {
    "id": 26,
    "name": "Classic Paneer Capsicum & Onion",
    "veg": true,
    "price": 6,
    "description": "Pizza topped with our Classic Pan sauce, flavorful paneer, crunchy onion & capsicum and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-paneer-capsicum-&-onion-pan-personal.ae2c5f3e3e5881af1f31e65cb9526289.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 6
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 7
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 9
      }],
    }],
  },
  {
    "id": 27,
    "name": "Italian Pepperoni & Onion",
    "veg": false,
    "price": 5,
    "description": "Pizza topped with our Chef's Special Italian sauce, crunchy onion, chicken pepperoni and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-pepperoni-&-onion-pan-personal.b6c0c99c9241f2fce14493773f625dd3.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 5
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 6
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 7
      }],
    }],
  },
  {
    "id": 28,
    "name": "Schezwan Meatball & Capsicum",
    "veg": false,
    "price": 10,
    "description": "Pizza topped with Spicy Schezwan sauce, crunchy capsicum, Schezwan meatballs and cheesy dressing making it spice lovers paradise.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/schezwan-meatball-&-capsicum-pan-personal.e27dd4520db7e81fbebeec8428a925bf.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 12
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 15
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 18
      }],
    }],
  },
  {
    "id": 29,
    "name": "Tandoori Tikka & Onion",
    "veg": false,
    "price": 5,
    "description": "Pizza topped with our signature tandoori sauce, crunchy onion, flavorful chicken tikka and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-tikka-&-onion-pan-personal.e47a58535b3ef920e00d559d79defad4.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price":6
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 7
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 9
      }],
    }],
  },
  {
    "id": 30,
    "name": "Classic Loaded Chicken Delight",
    "veg": false,
    "price": 9,
    "description": "Pizza topped with our Classic Pan sauce, herbed chicken, flavorful sausages, juicy tomato and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-loaded-chicken-delight-pan-personal.8d0b6cb6bc34a734679ac40004edba10.1.jpg?width=550",
    "sizeandcrust": [{
      "mediumPan": [{
        "price": 9
      }],
      "mediumstuffedcrustcheesemax": [{
        "price": 11
      }],
      "medium stuffed crust-veg kebab": [{
        "price": 13
      }],
    }],
  },
];


const Desserts = [{
    "id": 1,
    "name": "Choco Sundae",
    "price": 2,
    "description": "Choco Sundae Cup (100 ml)",
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-sundae.e0d29fd156012e251c099c2771219d18.1.jpg?width=800",
    "quantity": 1
  },
  {
    "id": 2,
    "name": "Cornetto Double Chocolate",
    "price": 2,
    "description": "Cornetto Double Chocolate Cone (105 ml)",
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/cornetto-double-chocolate.acc21849ac732f2f85998ad73e532d40.1.jpg?width=522",
    "quantity": 1
  },
  {
    "id": 3,
    "name": "Magnum Truffle",
    "price": 4,
    "description": "Magnum Truffle (80 ml)",
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/magnum-truffle.e300005ba1d8c15aafe824c1fa3b41ea.1.jpg?width=522",
    "quantity": 1
  },
  {
    "id": 4,
    "name": "Divine Chocolate(Tub)",
    "price": 6,
    "description": "Divine Chocolate (700 ml)",
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/divine-chocolate-tub.1df6b11e6e5d510cd11ae0d6e475686d.1.jpg?width=522",
    "quantity": 1
  },
  {
    "id": 5,
    "name": "Choco Volcano Cake",
    "price": 6,
    "description": "Choco Delight With A Gooey Chocolate Volcano Centre",
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.dd9f24941b09268c73c073494d54480d.1.jpg?width=522",
    "quantity": 1
  },
]


module.exports={Pizzas,Desserts}