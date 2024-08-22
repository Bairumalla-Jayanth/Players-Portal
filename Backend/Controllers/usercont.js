let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const usermod = require("../Model/model"); 


let add = async (req, res) => {
    try {
        let data = await usermod.findById(req.body._id);  
        if (data) {
            res.status(400).json({ "msg": "User with the given ID already exists" });
        } else {
            let hash = await bcrypt.hash(req.body.pwd, 10);
            let user = new usermod({ ...req.body, "pwd": hash });
            await user.save();
            res.status(201).json({ "msg": "Registration done" });
        }
    } catch (err) {
        console.error("Error adding user:", err);  
        res.status(500).json({ "msg": "Error adding user" });  
    }
};


let login = async (req, res) => {
    try {
        let data = await usermod.findById(req.body._id);  
        if (data) {
            let isPasswordValid = await bcrypt.compare(req.body.pwd, data.pwd);
            if (isPasswordValid) {
                let token = jwt.sign({ "_id": data._id }, "fsd4"); 
                res.json({ "token": token, "name": data.name, "_id": data._id });
            } else {
                res.status(400).json({ "msg": "Incorrect password" });
            }
        } else {
            res.status(404).json({ "msg": "User not found" });
        }
    } catch (err) {
        console.error("Error logging in:", err);  
        res.status(500).json({ "msg": "Error logging in" });  
    }
};

module.exports = { add, login };