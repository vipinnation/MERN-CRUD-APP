const data = require('../model/Data')

module.exports = function homeController(){
    return{
        index(req,res){
             
            data.find((err,data)=>{
                if(err) throw err;
                if(data){
                    console.log("url opened")
                   return res.status(200).send(data)
                }
                  

            })
        }
    }

}