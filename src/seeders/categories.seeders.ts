import { db } from "../config/db";

(async () => {
    try {
        await db.query(`
            INSERT INTO categoria (nombre_categoria)
            VALUES
            ('Materiales o Insumos'),
            ('Productos Terminados'),
            ('Herramientas y Equipos'),
            ('Tecnología'),
            ('Alimentos y Bebidas'),
            ('Limpieza y Aseo')
    `);
        console.log("✅ Datos insertados correctamente");
    } catch (error) {
        console.error("❌ Error insertando datos:", error);
    } finally {
        await db.end();
    }
})();