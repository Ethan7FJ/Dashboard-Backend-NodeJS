import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { JwtPayload } from "../payload/jwtPayload";
import { AuthService } from "../services/auth.services";
import { AxiosError } from "axios";

dotenv.config();

const SECRET = process.env.JWT_SECRET as string;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(" ")[1]

    if (!token) {
        return res.status(403).json({ error: "Token Requerido" })
    }

    try {
        const decoded = AuthService.verifyToken(token);
        req.user = decoded
        next()
    } catch (err) {
        const error = err as AxiosError<{ error?: string }>
        next(error)
    }
}