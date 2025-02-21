const adminModel = require('../models/m_admin');

const obtenerPing = async (req, res) => {
    try {
        const admin = await adminModel.ping();
        res.render('v_admin', { admin });
        // res.json(admin); 
    } catch (error) {
        res.status(500).send('Error al obtener el ping');
    }
};

const guardar = async (req, res) => {
    try {
        const datos = req.body;
        const guardar = await adminModel.guardar(datos);
        res.send('Usuario Creado');
    } catch (error) {
        res.status(500).send('Error al realizar el login en c_admin');
    }
};





module.exports = {
    obtenerPing,
    guardar
};