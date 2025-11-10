import { db } from "../config/db";

(async () => {
    try {
        await db.query(`
            INSERT INTO inventario (
                codigo,
                marca,
                modelo,
                descripcion,
                categoria_id,
                ubicacion,
                cantidad_almacenado,
                unidad_medida,
                precio,
                proveedor_id,
                estado_id,
                fecha_ingreso,
                usuario_responsable
            )

            VALUES
            ('4124124', 'Kaligo', 'K-lhg',"Sin descripcion",3,'Ospinal # 121-35',44,"KG",33.666,6,3,NOW(),1),
            ('98721313131', 'Ñ-Modelia', 'Ñ-231l',"Sin descripcion",3,'Caracas # 44-02',10,"KG",55.000,5,4,NOW(),2),
            ('21313131', 'Cajas', 'Sin modelo',"Sin descripcion",1,'Troncal # 555-8',100,"KG",10.000,3,1,NOW(),3)
    `);
        console.log("✅ Datos insertados correctamente");
    } catch (error) {
        console.error("❌ Error insertando datos:", error);
    } finally {
        await db.end();
    }
})();