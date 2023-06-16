var express = require('express');
var router = express.Router();
const connection = require('../conexion/conexion');

  /* GET crear editar page. */
  router.get('/editar/:ID',(req,res)=>{
    const id =req.params.ID;
    connection.query('SELECT * FROM tbProductos WHERE ID=?',[id],(error,results)=>{
        if(error){
            throw error;
          }else{
            res.render('/editar');
          }
    })
  })

module.exports = router;