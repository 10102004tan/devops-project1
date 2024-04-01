const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const app = express()
const port  = process.env.port || '3001'

const CORS_WHITELIST = [
  "http://localhost:3000",
  "http://localhost:3002",
]

app.get('/', (req, res) => {
  res.send({
    messenger : "welcome to my api"
  })
})

const corsOptions = {
  origin: CORS_WHITELIST, // Corrected origin URL format
  optionsSuccessStatus: 200
};
//
app.use(cors(corsOptions))


app.get('/health', (req, res) => {
  res.send({
    status : "OK",
    messenger : "Hello"
  })
})

app.get('/banners',(req,res)=>{
  const banners = [
    {
      title:"Makeup Kit 1",
      description:"Lorem asdk ;lasda; lad; asdl ;asdl;sad las",
      image:"/images/banner-img.png"
    },
    {
      title:"Makeup Kit 2",
      description:"Lorem asdk ;lasda; lad; asdl ;asdl;sad las",
      image:"/images/banner-img.png"
    },
    {
      title:"Makeup Kit 3",
      description:"Lorem asdk ;lasda; lad; asdl ;asdl;sad las",
      image:"/images/banner-img.png"
    }
  ]
  res.send(banners)
})





app.get('/get-data', async (req, res) => {
  try {
      const response = await fetch('https://gateway.chotot.com/v1/public/ad-listing?limit=10&protection_entitlement=true&job_urgent_recruit_enabled=1&page=2&cg=13010&st=s,k&key_param_included=true');
      if (response.ok) {
          const data = await response.json();
          // res.json(data)
          res.send(data)
      } else {
          res.status(response.status).json({ error: 'Failed to fetch data from API' });
      }
  } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})