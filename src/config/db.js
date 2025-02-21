const mysql = require('mysql2/promise');
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

const pool = mysql.createPool({
    host: process.env.HOST || 'localhost', //cd_mysql_docker
    user: process.env.ROOT || 'root',
    password: process.env.PASSWORD ||'', //123456
    database: process.env.NAME ||'',
    port: process.env.PORT||3306,//3306
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0
})

// Verificar la conexión al inicio
async function verificarConexion() {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a la base de datos establecida correctamente');
        connection.release(); // Liberar la conexión de vuelta al pool
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        process.exit(1); // Finalizar la aplicación si no puede conectarse a la base de datos
    }
}

// Llamar a la función para verificar la conexión
verificarConexion();

//exporto el modulo pool
module.exports = pool;