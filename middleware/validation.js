function validation(req,res,next) {
    if(req.params.lastName = Number) {
        return "Error";
    } else {
        return "Bienvenido";
    }
    next()
}
    


module.exports = validation;