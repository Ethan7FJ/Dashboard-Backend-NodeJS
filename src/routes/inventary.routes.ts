import { Router } from "express";
import { DeleteProducts, ShowProducts } from "../controllers/inventary.controllers";

import { verifyToken } from "../middlewares/auth.middleware";

const InventaryRoutes = Router();

InventaryRoutes.get("/productos", verifyToken, ShowProducts);
InventaryRoutes.delete("/productos/delete/:id", verifyToken, DeleteProducts);

export default InventaryRoutes;
