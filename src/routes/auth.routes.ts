import { Router } from "express";
import { AuthRegister, AuthLogin, AuthDashboard} from "../controllers/auth.controllers";

import { verifyToken } from "../middlewares/auth.middleware";

const AuthRoutes = Router();


AuthRoutes.post("/login", AuthLogin);
AuthRoutes.post("/register", AuthRegister);
AuthRoutes.get("/dashboard", verifyToken ,AuthDashboard);

export default AuthRoutes;