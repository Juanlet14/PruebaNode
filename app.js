const express = require("express");
const app = express();
const port = 3000;
const searchLastName = require("./data/alumns");
const validation = require("./middleware/validation");

app.get("/:lastName", validation, (req, res) => {

    /**
     * todo este codigo que hay desde la linea 9 hacia abajo, se ejecuta solo si en el validation
     * se ejecuta el next(),
     */

    console.log(req.params.lastName);

    /**
     * declaramos una constante que se llama response, que es la que va a recibir 
     * lo que devuelve al funcion searchLastName()
     */
    const response = searchLastName(req.params.lastName);


    /**
     *  comprobamos con un if, si la response es ok, y de ser asi devolvemos esta misma response,
     * si algo ha salido mal, devolvemos un error
     */
    if (response) {
        // 200 devuelve ok en la llamada
        res.status(200).json({ response });
    } else {
        // 400 devuelve error en la llamada
        res.status(400).json({ error: 'Error' });
    }

})


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})