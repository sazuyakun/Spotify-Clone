import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello urvi")
})

app.listen(port, () => {
    console.log(`The server is running on server ${port}`)
})