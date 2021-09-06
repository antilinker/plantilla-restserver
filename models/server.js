require('dotenv').config();
const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.port = process.env.PORT;
        this.app = express();

        this.usuariosPath = '/api/usuarios';


        // middlewares
        this.middlewares();


        // rutas 
        this.routes();
         
    } // constructor

    middlewares(){
        // si no uso una ruta relativa, 
        // como sabe node donde esta la carpeta public ???
        this.app.use(express.static('public'));

        // lectura y parseo del body
        this.app.use(express.json());
        // lectura y parseo del body

        // CORS
        this.app.use(cors());
    } // middlewares


    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }// routes

    escuchar(){
        this.app.listen(this.port, ()=>{console.log('escucha en ', this.port)});
    }

} // Server


module.exports = Server;