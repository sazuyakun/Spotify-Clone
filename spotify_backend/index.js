import express from "express";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
const app = express();
import 'dotenv/config'
const port = 3000;

//connecting mongodb to node app
MongoClient.connect("mongodb+srv://user2002:" +
 process.env.PASSWORD +
 "@cluster0.6hmrs4w.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
 .then((x) => {
    console.log("Connected to Mongo.")
 })
 .catch((err) => {
    console.log("Error while connecting to mongo")
 });

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`The server is running on server ${port}`)
})