let mongoose=require("mongoose")
let playersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pos":String,
    "pimg":String

})
let pm=new mongoose.model("player",playersch)
module.exports=pm