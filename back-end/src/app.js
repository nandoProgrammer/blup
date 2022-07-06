import express from "express";
const app = express();

app.get('/hello', (req, res) => {
    return res.send("Hello!")
})

app.listen('3000');
