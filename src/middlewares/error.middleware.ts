import { Request, Response, NextFunction } from "express";
import { json } from "stream/consumers";

export const errorHandler = (err:any, req:Request, res:Response, next:NextFunction) =>{
    console.error(`[Error] ${err.message}`)
    const status = err.status || 500
    res.status(status).json({
        message: err.message || "Error interno del servidor",
    })
}