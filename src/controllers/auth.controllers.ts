import { Request, Response } from "express";
import { db } from "../config/db";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.JWT_SECRET as string;

/* LOGIN */
export const AuthLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {

        const [validar]: any = await db.query("SELECT * FROM usuario WHERE email = ?", [email]);

        if (validar.length === 0) {
            return res.status(401).json({ error: "El usuario no ha sido enontrado o no se encuentra registrado" })
        }

        const usuario = validar[0];

        const desCript = await bcrypt.compare(password, usuario.password);
        if (!desCript) {
            return res.status(401).json({ error: "La contraseña ingresada no es la correcta, Intente de nuevo" })
        }

        const token = jwt.sign(
            { id: usuario.id, nombre: usuario.nombre, email: usuario.email },
            SECRET,
            { expiresIn: "1h" }
        )

        res.json({ success: true, token })

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error en el servidor" });
    }
}


/* REGISTER */
export const AuthRegister = async (req: Request, res: Response) => {
    const { nombre, email, password } = req.body;

    try {
        const [encontrar]: any = await db.query("SELECT * FROM usuario WHERE nombre = ? AND email = ?", [nombre, email]);
        if (encontrar.length > 0) {
            return res.status(400).json({ error: "El usuario ya se encuentra registrado" })
        }

        const encriptarPassword = await bcrypt.hash(password, 10);

        await db.query("INSERT INTO usuario (nombre,email,password) VALUE(?,?,?)", [
            nombre,
            email,
            encriptarPassword
        ]);

        res.json({ success: true, mensaje: "Usuario registrado correctamente" })

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

/* VALIDACION DEL TOKEN PARA EL INGRESO AL DASHBOARD */
export const AuthDashboard = async (req: Request, res: Response) => {
    const usuario = req.user
    return res.json({
        success: true,
        usuario,
    })
}