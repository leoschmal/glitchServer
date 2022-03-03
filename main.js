
const fs =require('fs');

class Contenedor {
    constructor (nombreArchivo){
        this.archivo=nombreArchivo;
        
    }
    //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado
    save(data){
        let products;
        fs.promises.readFile(this.archivo, 'utf-8')
        .then(contenido =>{             
                //console.log(JSON.parse(contenido))   
                products = JSON.parse(contenido); 
                //console.log(products)        
                
        })
        .then(()=>{
            data.id =(products.length + 1).toString();
            products.push(data)
            console.log('Products', products)
        })
        .then(()=>{
            fs.writeFile(this.archivo, JSON.stringify(products), error =>{
                if(error){
                    console.log('error')
                }else{
                    console.log('ok')
                }
            })
        })
    }
    //Recibe un id y devuelve el objeto con ese id, o null si no está.
    getById(id){
        let products;
        let encontrado;
        fs.promises.readFile(this.archivo, 'utf-8')
        .then(contenido =>{             
                //console.log(JSON.parse(contenido))   
                products = JSON.parse(contenido); 
                //console.log(products)        
                
        })
        .then(()=>{       
            //busco el objeto con el id pasado
            encontrado = products.find(item => item.id === id)
            console.log('encontrado', encontrado)
        })
        .catch(()=>{
            console.log('Ocurrió un error')
        })
    }
    //Devuelve un array con los objetos presentes en el archivo.
    getAll(){
        var products;
        fs.promises.readFile(this.archivo, 'utf-8')
        .then(contenido =>{             
                //console.log(JSON.parse(contenido))   
                products = JSON.parse(contenido); 
                console.log('desde console.log de la fcion', products)                               
                return products;
        })      
        .catch(error =>{
            console.log('error al leer el archivo')
        })              
    }

    //Elimina del archivo el objeto con el id buscado.
    deleteById(id){
        let products;
        let encontrado;
        fs.promises.readFile(this.archivo, 'utf-8')
        .then(contenido =>{             
                //console.log(JSON.parse(contenido))   
                products = JSON.parse(contenido); 
                //console.log(products)        
                
        })
        .then(()=>{       
            //busco el objeto con el id pasado
            encontrado = products.find(item => item.id === id)
            console.log('a eliminar', encontrado)
            products.splice(id-1, 1)
            console.log(products)
        })
        .then(()=>{
            fs.writeFile(this.archivo, JSON.stringify(products), error =>{
                if(error){
                    console.log('error')
                }else{
                    console.log('ok')
                }
            })
        })
        .catch(()=>{
            console.log('Ocurrió un error')
        })

    }
    //Elimina todos los objetos presentes en el archivo.
    deleteAll(){
        fs.promises.writeFile(this.archivo, '')
        .then(contenido =>{            
                console.log('Productos Eliminados')
        })
        .catch(error =>{
            console.log('error al leer el archivo')
        }) 
    }
}
module.exports = Contenedor;
//export default Contenedor;

//Creo un objeto Contenedor llamado Data
//const Data= new Contenedor('./productos.txt');

//let productos = Data.getAll();
//const Producto = {title:'automovil', price:'1234', thumbnail:'www.google.com'}

//Data.save(Producto)
//Data.getById('3')
//Data.deleteById('2')
//Data.deleteAll();

