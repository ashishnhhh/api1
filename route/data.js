const express = require("express");
const router = express.Router();

const{getdata, getCollegeCodeId} = require("../controller/data");

router.route("/").get(getdata);
router.route("/getCollegeCodeId").get(getCollegeCodeId);

module.exports = router;