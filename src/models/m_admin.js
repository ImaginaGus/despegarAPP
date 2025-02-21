const pool = require('../config/db');

const adminModel = {
    ping: async () => {
        try {
            const [rows, fields] = await pool.query('SELECT NOW() AS data');
            return rows;
        } catch (error) {
            console.error('Error al realizar la consulta:', error.sql);
            res.status(500).send('Error al realizar la consulta');
        }
    },


    guardar: async (datos) => {
        try {
            const query = 'INSERT INTO usuario set ?';
            const param =[datos];
            const [result] = await pool.query(query, param);
            return result;
            // console.log('Datos SQL optenidos:',result);
        } catch (error) {
            console.error('Error al realizar la consulta:', error.sql);
            res.status(500).send('Error al realizar la consulta');
        }
    }
};

module.exports = adminModel;