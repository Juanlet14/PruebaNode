const express = require("express");
const app = express();
const port = 3000;
const  searchLastName  = require("./data/alumns");
const validation = require("./middleware/validation");

app.get("/:lastName",validation, (req, res) => {
    // recive datos del postman
    //console.log(req.params.lastName);

    // aqui ahora tienes que usar la funcion searchLastName() pasarle el apellido y la respuesta devolverla en el res.send()


    searchLastName(req.params.lastName);
    
   
    if(req.params.lastName === "number") {
        return res.status(401).send("Error")
    }else{
        res.status(200).send("Hola cliente")
    }

    
    
    
    //searchLastName(req.params.lastName);  

    

   
    
    //res.send("Bienvenido")

   


    
})




app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})