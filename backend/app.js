const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const port = process.env.port || "3000";
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '3306';
const dbUser = process.env.DB_USER || 'admin';
const dbPass = process.env.DB_PASS || 'admin';
const dbName = process.env.DB_NAME || 'tdc-devops';

const db = require('mysql2');
const CORS_WHITELIST = ["http://localhost:3000", "http://localhost:3002"];
const connection = db.createConnection({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPass,
  database: dbName
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("DB Connected!")
});
app.get("/", (req, res) => {
  res.send({
    messenger: "welcome to my api",
  });
});

const corsOptions = {
  origin: CORS_WHITELIST, // Corrected origin URL format
  optionsSuccessStatus: 200,
};
//
app.use(cors(corsOptions));

app.get("/health", (req, res) => {
  res.send({
    status: "OK",
    messenger: "Hello",
  });
});

app.get('/banners', (req, res) => {
  connection.query('SELECT * FROM banners', (err, rows) => {
      if (err) throw err;
      // Mapping dữ liệu trả về từ DB table => Response model
      const banners = rows.map(row => {
          return {
              title: row.title,
              description: row.description,
              image: row.image
          };
      });
      res.send(banners);
  });
});

app.get("/get-data", async (req, res) => {
  try {
    const response = await fetch(
      "https://gateway.chotot.com/v1/public/ad-listing?limit=10&protection_entitlement=true&job_urgent_recruit_enabled=1&page=2&cg=13010&st=s,k&key_param_included=true"
    );
    if (response.ok) {
      const data = await response.json();
      // res.json(data)
      res.send(data);
    } else {
      res
        .status(response.status)
        .json({ error: "Failed to fetch data from API" });
    }
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
