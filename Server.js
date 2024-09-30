import morgan from "morgan";
import express from "express";
import Api from "./Api.js";
import cors from "cors";
import mongoose from "mongoose";
const app = express();


// body-parsel
app.use(express.json());
app.use(cors());

// app.use(express.static(dirname + '/public'));
app.use('/uploads', express.static('uploads'));
//H7JogfOn2nTrPYlX


// Collection
mongoose.connect("mongodb+srv://duraiessakimuthu:H7JogfOn2nTrPYlX@taskone.xfvat.mongodb.net/airdeal?retryWrites=true&w=majority&appName=taskone").then(() => {
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


app.listen(9999);


export default app;