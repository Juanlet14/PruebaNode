function validation(req,res,next) {
// buscar en google como puedo verificar que mi variable es de tipo number y añadirlo en el if
    if(req.params.lastName = Number) {
        return "Error";
    } else {
        return "Bienvenido";
    }
    next()
}
    


module.exports = validation;