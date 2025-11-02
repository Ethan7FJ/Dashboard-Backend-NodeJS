import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { JwtPayload } from "../payload/jwtPayload";
import dotenv from 'dotenv';
import { verify } from "crypto";
import { verifyToken } from "../middlewares/auth.middleware";

dotenv.config();

const SECRET = process.env.JWT_SECRET || "default_secret";

export const AuthService = {
    verifyToken(token: string): JwtPayload {
        try {
            return jwt.verify(token, SECRET) as JwtPayload;
        } catch (error) {
            throw new Error("Token invalido o expirado")
        }
    },

    generateToken(payload: object, expiresIn: SignOptions["expiresIn"] = "1h"): string {
        return jwt.sign(payload, SECRET, { expiresIn });
    }
}