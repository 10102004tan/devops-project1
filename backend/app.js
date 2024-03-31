const express = require('express'); // npm install express
const cors = require('cors'); // npm install cors
const app = express();
const port = process.env.PORT || 3000;

const CORS_WHITELIST = [
    "http://localhost:3000",
    "http://localhost:3002",
    "http://localhost:3006",
];

const corsOptions = {
    origin: "*", // Accept all origins => Development
    // origin: CORS_WHITELIST, // Accept origins in whitelist => Production
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));



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

app.get('/contacts', (req, res) => {
  const contact = [
      {
          title: "Văn Dư",
          detail: "Tôi là ai, ai là tôi :B",
          image: "images/du2.png"
      },
      {
          title: "Chả Cá",
          detail: "Mời mọi người đến khóa học của iem",
          image: "images/AnhThu.png"
      },
      {
          title: "Dăn Dư",
          detail: "Đẹp trai chính là toy",
          image: "images/Vandu.png"
      }
  ];
  res.send(contact);
});



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