const mysql = require ('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tienda'
}); 

connection.connect((error) =>{
if (error){
    console.error("Hay un error de conexion: " + error)
    return
}
console.log("La conexion a sido exitosa.");
});


module.exports=connection;
