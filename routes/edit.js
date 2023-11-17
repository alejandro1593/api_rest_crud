const express= require('express')
const router=express.Router();
const conexion=require('../database/db');

const crud=require('../controllers/crud')

//RUTA PARA MODIFICAR REGISTRO

router.get('/edit/:id',(req,res)=>{
    const id=req.params.id;

    conexion.query('SELECT * FROM producto WHERE id=?', [id], (err,result)=>{
        if(err){
            throw err;

        }else{
            res.render('../views/edit.ejs', {result:result[0]})
        }
    })
})

router.post('/Update',(crud.Update))

//RUTA PARA BORRAR UN REGISTRO
router.get('/delete/:id',(req,res)=>{
    const id=req.params.id;
    conexion.query('DELETE FROM producto WHERE id= ?',id, (err,result)=>{
        if(err){
           throw err;
  
        }else{
           res.redirect('/');
        }
     })

})




module.exports=router;