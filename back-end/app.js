const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors');

const CORS_WHITELIST = [
  'http://localhost:3000',
  'http://localhost:3002',
  'http://localhost:3004'
];

var corsOptions = {
  // origin: * Accept all origins => Development
  origin: CORS_WHITELIST, // Accept origins in whitelist => Product
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/admin', (req, res) => {
  res.send({
    status: "OK",
    message: "R u ok?"
  })
})

app.get('/banners', (req, res)=> {
  const banners = [
    {
      title: "Makup <br/> Kit 1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati reiciendis vero, molestiae aut esse rerum eveniet iste? Minus sit, non, excepturi distinctio aliquid velit corrupti molestias ipsam perferendis doloremque reprehenderit."
    },
    {
      title: "Makup <br/> Kit 1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati reiciendis vero, molestiae aut esse rerum eveniet iste? Minus sit, non, excepturi distinctio aliquid velit corrupti molestias ipsam perferendis doloremque reprehenderit."
    },
    {
      title: "Makup <br/> Kit 1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati reiciendis vero, molestiae aut esse rerum eveniet iste? Minus sit, non, excepturi distinctio aliquid velit corrupti molestias ipsam perferendis doloremque reprehenderit."
    }
  ]
  res.send(banners)
});

app.get('/products', (req, res) => {
    const products = [
      {
        name: "Beauty Brush",
        description: "Lorem",
        image: '/images/img-1.png',
        price: '13'
      }
    ]
    res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})