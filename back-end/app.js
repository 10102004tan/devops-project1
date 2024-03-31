const express = require('express'); // npm install express
const cors = require('cors'); // npm install cors
const app = express();
const port = process.env.PORT || 3000;

// const CORS_WHITELIST = [
//     "http://localhost:3000",
//     "http://localhost:3003",
//     "http://localhost:3006",
// ];

const corsOptions = {
    origin: "*", // Accept all origins => Development
    // origin: CORS_WHITELIST, // Accept origins in whitelist => Production
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send({
        message: "Welcome to my API"
    });
});

app.get('/health', (req, res) => {
    res.send({
        status: "OK",
        message: "And how are you?"
    });
});

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});