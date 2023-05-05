require("dotenv").config();
const connectDB = require("./databse/mongo");
const data = require("./model/datas");
const copydatajson = require("./copydata.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await data.deleteMany();
        await data.create(copydatajson);

        console.log("In Mongo");
    } catch (error) {
        console.log(error);
    }
};

start();