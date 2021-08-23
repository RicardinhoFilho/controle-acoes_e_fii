
import express from "express";
import cors from "cors";


const app = express();

app.use(cors());

app.use(express.json({ limit: "10000kb" }));
app.use(
  express.urlencoded({
    extended: false,
    limit: "10000kb",
    parameterLimit: 1000000,
  })
);



app.listen(3335, () => console.log("Server started at http://localhost:3335"));