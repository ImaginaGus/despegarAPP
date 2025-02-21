const express = require('express');
const router = express.Router();
const adminController = require('../controllers/c_admin');

router.get('/', adminController.obtenerPing);
router.post('/guardar', adminController.guardar);

// router.get('/', (req, res) => {
//     res.send('Hello World') 
//     res.json({message: 'Hola Mundo'})
// })

module.exports = router;
