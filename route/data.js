const express = require("express");
const router = express.Router();

const{getdata, getCollegeCodeId, getDistrict} = require("../controller/data");

router.route("/").get(getdata);
router.route("/getCollegeCodeId").get(getCollegeCodeId);
router.route("/getDistrict").get(getDistrict);

module.exports = router;