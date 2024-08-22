let multer=require("multer")
const pm = require("../Model/playermodel")
let {v4:uuid}=require("uuid")
let fs=require("fs")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './playerimgs')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
})
  
  const upload = multer({ storage: storage })

  let addplayer=async(req,res)=>{
    try{
        if(['jpg','jpeg','png'].includes(req.file.mimetype.split("/")[1]))
        {
        let data=await pm({...req.body,"pimg":req.file.filename,"_id":uuid()})
        await data.save()
        res.json({"msg":"player added"})
        }
        else{
            fs.rm(`./playerimgs/${req.file.filename}`,()=>{})
            res.json({"msg":"only jpg,jpeg or png files are allowed"})
        }
    }
    catch(err)
    {
        console.log("error ading player",err)
    }

  }
  let getplayer=async(req,res)=>{
    try
    {
       let data=await pm.find({})
       res.json(data)

    }
    catch(err)
    {
        console.log("error getting player",err)
    }
  }
  module.exports={upload,addplayer,getplayer}