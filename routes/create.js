const express = require('express')

const router= express.Router();

const conexion = require('../database/db') 


const crud=require('../controllers/crud');

//RUTA PARA CREAR REGISTRO
router.get('/create', (req,res) =>{
    res.render('../views/create.ejs')
  })


router.post('/save',(crud.save));
 





  module.exports= router;