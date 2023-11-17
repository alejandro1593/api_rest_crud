const express = require('express')

const router= express.Router();

const conexion = require('../database/db') 


//RUTA PARA MOSTRAR TODO LO QUE HAY EN UNA BASE DE DATOS
router.get('/', (req,res) =>{
   conexion.query('SELECT * FROM producto', function (err,results){
      if(err){
        throw err;
      }else{
        
          res.render('index', {results : results});
//nota las interacions no se pueden validar aqui por que despues de enviar el render si tiene una interacion te saldra este error
// error Cannot set headers after they are sent to the client
      }
   })
  })


  module.exports= router;