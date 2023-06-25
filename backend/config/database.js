const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB CONNECTED SUCCESFULLY"))
    .catch((error) => {
      console.log("DB not connected ");
      console.log(error);
      process.exit(1);
    });
};
