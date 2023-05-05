const mongoose = require("mongoose");

const dataschema = new mongoose.Schema({

    District:{
        type:String,
        required:true
     },
     CollegeName:{
        type:String,
        required:true
     },

     CollegeCodeId:{
        type:String,
        required:true
     }
});

module.exports = mongoose.model("data",dataschema);