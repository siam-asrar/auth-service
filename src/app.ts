import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

app.get("/", (req, res): void => {
    res.send("Hello World");
})

export default app;