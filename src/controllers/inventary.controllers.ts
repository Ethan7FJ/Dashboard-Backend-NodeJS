import { Request, Response } from "express";
import { db } from "../config/db";
import bcrypt from "bcryptjs";

import dotenv from "dotenv";


dotenv.config();

/* GET PRODUCTS INVENTARY */
export const ShowProducts = async (req: Request, res: Response) => {
    try {
        const [productos] = await db.query('SELECT * FROM inventario');
        res.json({ success: true, productos: productos });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

/* POST PRODUCTS INVENTARY */
export const SetProducts = async (req: Request, res: Response) => {

}

/* DELETE PRODUCTS INVENTARY */
export const DeleteProducts = async (req: Request, res: Response) => {

}

/* UPDATE PRODUCTS INVENTARY */
export const UpdateProducts = async (req: Request, res: Response) => {

}