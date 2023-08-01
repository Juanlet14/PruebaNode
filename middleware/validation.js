
function validation(req, res, next) {
    /**
     * aqui tienes que comprobar el tipo del lastname, que ya he visto en las fotos que esto lo habias conseguido
     */
    if (typeof req.params.lastName === 'number') {
        /**
         * en el caso de que sea un number, no devolvemos un simple string que diga "error", devolvemos 
         * devolvemos una respuesta real, ya que este middleware esta en: 
         * app.get("/:lastName", validation, (req, res) => {
         * y esto no esta esperando un string, espera una respuesta del servidor para devolver directamente a postman
         * o el next() para que entienda que puede seguir adelante con tu codigo.
         */

        return res.status(400).json({ error: 'The lastname should be a string type' });
    } else {
        /**
         * si todo esta bien ejecutamos el next() y el codigo sigue su curso
         */
        next();
    }
}



module.exports = validation;