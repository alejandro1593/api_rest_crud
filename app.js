const express = require ('express')
const app= express()
const morgan= require('morgan')
const conexion= require ('./database/db');
const router= require('./routes');

const port=4000

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(morgan('dev'));


//esto se utiliza para cuando se va a capturar datos de formularios
app.use(express.urlencoded({extended:false}));
//ademas que obtegamos los datos en formato json
app.use(express(JSON));


app.use('/', require('./routes/index'));
app.use('/', require('./routes/create'));
app.use('/',require('./routes/edit'));

//escuchamos el servidor
app.listen(port, () =>{
    console.log(`El servidor esta escuchando por el Port ${port}`)
})
