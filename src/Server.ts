import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

import AuthRoutes from "./routes/auth.routes";
app.use("/auth", AuthRoutes);


app.listen(4000, () => {
    console.log("🚀 Servidor corriendo en http://localhost:4000");
});