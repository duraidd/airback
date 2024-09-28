import morgan from "morgan";
import express from "express";
import Api from "./Api.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const app = express();


// body-parsel
app.use(express.json());
app.use(cors());

// app.use(express.static(dirname + '/public'));
app.use('/uploads', express.static('uploads'));
//H7JogfOn2nTrPYlX


var whitelist = [ 
  'http://localhost:3000'
];

var corsOptions = {
  origin: function (origin, callback) {
    console.log("origin:", origin);

    // Allow undefined origins (for local development tools like Postman)
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// Collection
mongoose.connect(process.env.MONGOID, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });


// middleware - > router
app.use("/airdeal", Api);


// log
app.use(morgan("common"));


app.get("/", (req, res) => {
  res.json({ lol: "123" });
});


app.options("*", cors(corsOptions));

app.listen(9999);


export default app;