const data = require("../model/datas")


const getdata = async(req,res) => {

    const getdata = await data .find(req.query);

    var filData = getdata.filter(function (el){
        return el.CollegeName == "Chattrapati Shivaji Maharaja College";
    });

    console.log(filData[0].CollegeCodeId);

    res.status(200).json({ getdata})
};


const getCollegeCodeId =  async (req,res) =>{

    const getCollegeCodeId = await data.find(req.query);

    var filData = getCollegeCodeId.filter(function(el){
        return el.CollegeName == req.query.CollegeName;
    });

    console.log(filData[0].CollegeCodeId);
    res.status(200).json(filData[0].CollegeCodeId)
};

const getDistrict = async(req,res) => {

    const getDistrict = await data.find(req.query);

    var filData = getDistrict.filter(function(el){
        return el.CollegeName == req.query.CollegeName;
    });

    console.log(filData[0].District);
    res.status(200).json(filData[0].District)
    
};

const getCollegeName = async(req,res) => {

    const getCollegeName = await data.find(req.query);

    var filData = getCollegeName.filter(function(el){
        return el.District== req.query.District;
    });

    console.log(filData[0].CollegeName);
    res.status(200).json(filData[0].CollegeName)
};

module.exports = {getdata,getCollegeCodeId,getDistrict,getCollegeName};