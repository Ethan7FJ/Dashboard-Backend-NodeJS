import { Router } from "express";
import { ShowProducts } from "../controllers/inventary.controllers";

import { verifyToken } from "../middlewares/auth.middleware";

const InventaryRoutes = Router();

InventaryRoutes.get("/productos", verifyToken, ShowProducts);

export default InventaryRoutes;