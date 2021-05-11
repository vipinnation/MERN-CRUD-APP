const Data = require('../model/Data')

module.exports = function postController() {

    return {
        index(req, res) {
            const { name, state } = req.body
            console.log(name + ".......... " + state);

            if (!name || !state) {
                return res.status(201).send("All Field Required")
            }

            else {

                const dataInput = new Data({
                    name, state
                })


                dataInput.save((err, data) => {
                    if (err) throw err;
                    if (data) {
                        return res.status(200).send("Data Submitted Successfully")
                    }

                    else{
                        return res.status(200).send("Something Went Wrong")
                    }


                })
            }
        }
    }
}


