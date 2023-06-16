var express = require('express');
var router = express.Router();
const connection = require('../conexion/conexion');

/* consulta */
/* GET admin page. */
router.get('/', function(req, res) {
  connection.query('SELECT * FROM  tbProductos',(error,results)=>{
    if(error){
      throw error;
    }else{
      res.render('admin',{title: 'Productos disponibles', results:results});
    }
  })
  });


module.exports = router;