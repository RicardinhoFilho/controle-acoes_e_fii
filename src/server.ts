import express from "express";
import cors from "cors";
import "reflect-metadata";
import "./Database/connect";

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.listen(3336, () => console.log("Server started at http://localhost:3336"));
