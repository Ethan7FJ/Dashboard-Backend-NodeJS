import { db } from "../config/db";

(async () => {
    try {
        await db.query(`
            INSERT INTO estado (tipo_estado)
            VALUES
            ('Activo'),
            ('Desactivado'),
            ('Disponible'),
            ('No Disponible'),
            ('En Proceso'),
            ('Finalizado')
    `);
        console.log("✅ Datos insertados correctamente");
    } catch (error) {
        console.error("❌ Error insertando datos:", error);
    } finally {
        await db.end();
    }
})();