const conexion=require('../database/db')

exports.save=(req,res)=>{
   const nombre= req.body.nombre;
   const precio=req.body.precio;
 //para insertar algo en una tabla
 conexion.query('INSERT INTO producto SET ? ' , {nombre:nombre, precio:precio}, (err, result) =>{

    if(err) throw err;
  
   res.redirect('/');
   console.log("Se ha insertado exitosamete");
   })

}

exports.Update=(req,res)=>{
   const id=req.body.id;
   const nombre=req.body.nombre;
   const precio=req.body.precio;

   //para actulizar el registro despendiendo del id que quiero modificar
   conexion.query('UPDATE producto SET ? WHERE id = ?',[{nombre:nombre, precio:precio}, id],(err, result) =>{
      if(err) throw err;
    
      
      res.redirect('/')
     })
     
}
