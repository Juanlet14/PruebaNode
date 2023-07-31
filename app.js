const express = require("express");
const app = express();
const port = 3000;
const  searchLastName  = require("./data/alumns");
const validation = require("./middleware/validation");

app.get("/:lastName", (req, res) => {
    // recive datos del postman
    console.log(req.params.lastName);

    // aqui ahora tienes que usar la funcion searchLastName() pasarle el apellido y la respuesta devolverla en el res.send()
    
    searchLastName(req.params.lastName);

    


    

    // devuelve datos al postman
    res.send("Error");
})


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})