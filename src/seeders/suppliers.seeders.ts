import { db } from "../config/db";

(async () => {
    try {
        await db.query(`
            INSERT INTO proveedor (nombre_proveedor,numero_contacto,email)
            VALUES
            ('Equipo SAS', '2142142141', 'e@gmail.com'),
            ('Tecnolgia SAS', '421412412', 'tec@gmail.com'),
            ('Tecno Meca SAS', '41232131541', 'msl@gmail.com'),
            ('MundoTec', '65121231', 'mt@gmail.com'),
            ('Drikns SAS', '71252131', 'ds@gmail.com'),
            ('Raid SA', '9102311', 'rs@gmail.com')
    `);
        console.log("✅ Datos insertados correctamente");
    } catch (error) {
        console.error("❌ Error insertando datos:", error);
    } finally {
        await db.end();
    }
})();