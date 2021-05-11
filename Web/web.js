const deleteUser = require("../App/http/deleteUser")
const homeController = require("../App/http/HomeController")
const postController = require('../App/http/PostController')
const updateUser = require("../App/http/updateUser")

module.exports = function web(app){
    app.get('/getData',homeController().index)


    app.post('/post',postController().index)


    app.get('/editUser/:id',updateUser().index)
    app.post('/editUser/:id',updateUser().update)

    app.get('/delUser/:id',deleteUser().index)
}