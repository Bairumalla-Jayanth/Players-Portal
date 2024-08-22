let express = require("express")
const {add,login} = require("../Controllers/usercont")
const { upload, addplayer, getplayer} = require("../Controllers/playercont")
let route = new express.Router()
route.post("/reg",add)
route.post("/login",login)
route.post("/addplayer",upload.single("pimg"),addplayer)
route.get("/getplayer",getplayer)
module.exports = route