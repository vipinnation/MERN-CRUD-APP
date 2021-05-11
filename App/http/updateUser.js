const Data = require('../model/Data')


module.exports = function updateUser(){

    return{
        index(req,res){
            const id = req.params.id;
            Data.findById(id, (err,data)=>{
                if(err) throw err; 
                res.send(data)
            })
        },

        update(req,res){
            const id = req.params.id;
            console.log(req.body)

            const updateData = new Data({
                name:req.body.name,
                state:req.body.state
            })

            Data.findByIdAndUpdate(id ,req.body, (err,data)=>{
                if(err) throw err;
                if(data){
                    return res.status(200).send("Data Updated")
                }
                else{
                    return res.status(200).send("Something Went Wrong")
                }
            })
        }
    }
}