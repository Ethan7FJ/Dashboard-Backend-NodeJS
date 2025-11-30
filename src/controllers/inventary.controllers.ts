import { Request, Response } from "express";
import { db } from "../config/db";

import dotenv from "dotenv";


dotenv.config();

/* GET PRODUCTS INVENTARY */
export const ShowProducts = async (req: Request, res: Response) => {
    try {
        const [productos] = await db.query('SELECT a.* , p.nombre_proveedor AS proveedor, c.nombre_categoria AS categoria, k.tipo_estado, z.nombre FROM inventario a INNER JOIN categoria c ON a.categoria_id = c.id INNER JOIN proveedor p ON a.proveedor_id = p.id INNER JOIN estado k ON a.estado_id = k.id INNER JOIN usuario z ON a.usuario_responsable = z.id');
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
    const { id } = req.params;
    try {
        await db.query("DELETE FROM inventario WHERE id = ?", [id]);
        res.json({ success: true, message: "Producto eliminado correctamente" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

/* UPDATE PRODUCTS INVENTARY */
export const UpdateProducts = async (req: Request, res: Response) => {

}
