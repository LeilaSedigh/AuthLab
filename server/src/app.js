import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to AuthLab API!")
})

export default app;