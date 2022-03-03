const express = require('express');
const Contenedor = require('./main.js');
const fs= require('fs')

const app= express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en puerto ${server.address().port}`)
});


var data = new Contenedor('./productos.txt');
//let productos = data.getAll();
var productos = data.getAll();


app.get('/', (req, res)=>{
    
    res.send(`<h1 style='color:blue'>Bienvenido al Servidor Express </h1>`)
});



app.get('/productos',(req,res) => {
    try{          
      function getProducts(){
        const contenido = fs.readFileSync('./productos.txt', 'utf-8')
        const json = JSON.parse(contenido.split(","))
        return json          }        
    }
    catch(err) {        
        console.log("contenido no leido",err)      
    } 
    res.send({products:getProducts()})
                              })


app.get('/productoRandom', (req, res)=>{
    try{          
        function getProducts(){
          const contenido = fs.readFileSync('./productos.txt', 'utf-8')
          const json = JSON.parse(contenido.split(","))
          let rand = Math.floor(Math.random()*json.length);
          var rValue = json[rand];
          return rValue          }        
      }
      catch(err) {        
          console.log("contenido no leido",err)      
      } 
      res.send({products:getProducts()})      
      
})

