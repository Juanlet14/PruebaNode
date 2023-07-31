function validation(req,res,next) {
    if(typeof req.params.lastName === Number)  {
        return "Error";
    } else {
        return "Bienvenido";
    }
    next()

    console.log(req.params.lastName)
}
    


module.exports = validation;