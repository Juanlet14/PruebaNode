const validation = (req,res,next) => {
if(typeof req.params.lastname === "number") {
    return res.send("Error")

    
}
next()

}
        
  
    
    
    
    

    

    


module.exports = validation;