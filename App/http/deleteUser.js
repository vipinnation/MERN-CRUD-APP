const Data = require('../model/Data')

module.exports = function delUser() {
    return {
        index(req, res) {
            const id = req.params.id;

            Data.findByIdAndRemove(id, (err,data)=>{
                if(err) throw err;
                
                console.log(data);
                
                res.send("data deleted")
            })
        }
    }
}