function validation(req,res,next) {
    if(typeof req.params.lastName === Number) {
        return "Error";
    } else {
        return "Bienvenido";
    }
    next()
}
        
  
    
    
    
    

    

    


module.exports = validation;