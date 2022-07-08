import express from "express";
import cors from "cors";
import "reflect-metadata";
import "./Database/connect";
import userRoutes from "./Routes/usuario.routes";
import segmentoRoutes from "./Routes/segmentio.routes";
import empresaRoutes from "./Routes/empresa.routes";
import loteRoutes from "./Routes/lote.routes";
import vendaRoutes from "./Routes/venda.routes";
import cotacoesRoutes from "./Routes/cotacoes.routes";
const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(userRoutes);
app.use(segmentoRoutes);
app.use(empresaRoutes);
app.use(loteRoutes);
app.use(vendaRoutes);
app.use(cotacoesRoutes);
app.listen(3336, () => console.log("Server started at http://localhost:3336"));
