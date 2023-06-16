var express = require('express');
var router = express.Router();
const connection = require('../conexion/conexion');

  /* GET eliminar  page. */
  router.get('/editar/:ID',(req,res)=>{
    const id =req.params.ID;
    connection.query('DELETE FROM tbProductos WHERE ID=?',[id],(error,results)=>{
        if(error){
            throw error;
          }else{
            res.render('/admin');
          }
    })
  })



module.exports = router;