import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    // console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};
