import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/error.middleware";
import AuthRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: `${process.env.FRONT_ORIGIN_HOST}`,
  credentials:true
}));


app.use("/auth", AuthRoutes);


app.get("/", (req, res) => {
  res.send("Servidor activo");
});

app.use(errorHandler)


app.listen(4000, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:4000`);
});