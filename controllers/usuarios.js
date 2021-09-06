// controller usuarios

const { response } = require('express');

 // GET 
const usuariosGet = (req, res = response)=>{

    const {nombre, apellido,
        edad, ingresos,
        cedula = "00116084765", // default
        apikey} = req.query;
    
    res.status(200).json({
        "ok": true,
        "msg": 'get API - controlador',
        "nombre": nombre + apellido,
        "edad" : edad,
        "ingresos-mensuales": ingresos,
        "cedula": cedula,
        "apikey" : apikey
    });
}

// POST
const usuariosPost = (req, res = response)=>{
    const body1 = req.body;
    const {nombre, ingresos} = body1; // parece buena pratica segura
    console.log('es el post');
    res.status(201).json({
        "ok": true,
        "msg": 'POST API - controller',
        "nombre": nombre,
        "ganancias": ingresos,
        "datos": body1
        
    });
}// usuariosPost



// PUT

const usuariosPut = (req, res= response)=>{
    const codigo = req.params.codigo;
    console.log('el codigoes: ', codigo );
    res.status(400).json({
        "ok": true,
        "msg": 'PUT API - CONTROLLER',
        "p1": 'datadatadatadatadatadatadatadatadatadata',
        "p2": 'datadatadatadatadatadatadatadatadatadata',
        "p3": 'datadatadatadatadatadatadatadatadatadata',
        "p4": 'datadatadatadatadatadatadatadatadatadata',
        "codigo-usuario": codigo
    });
}// usuariosPut



// DELETE
const usuariosDelete = (req, res = response)=>{
    res.status(200).json({
        "ok": true,
        "msg": 'delete API - controlador',
        "from": 'userjs'
    });
}// usuariosDelete

const usuariosPatch = (req, res = response)=>{
    res.status(202).json({
        "ok": true,
        "msg": 'PATCH API - controlador'
    });
} // usuariosPatch


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}