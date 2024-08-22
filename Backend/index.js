let express=require("express")
let cors = require("cors")
let mongoose=require("mongoose")
const route = require("./Routes/route")

let app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/demob").then(()=>{
    console.log("ok")
})
app.use("/",route)
app.use('/imgs', express.static('playerimgs'));
app.listen(5000)
