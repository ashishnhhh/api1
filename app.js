require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require("./databse/mongo");
const data_routes = require("./route/data");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })

app.get("/", (req,res) =>{
    res.send("server is online")
});

app.use("/alldata", data_routes );
//app.use("./CollegeName",data_routes )

const start = async () => {
try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT ,() => {
        console.log(`server alive on the port:${PORT}`);
    });
} catch (error) {
    console.log(error);
}
} 
start();