import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/Club";

export const createDbConn = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      autoIndex: false
    });

    mongoose.set("debug", true);
    console.log("Connected to DataBase");
  } catch (e) {
    console.log(e);
    throw new Error("Coundn't connect to Database");
  }
};
