import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch {
    (err) => {
      console.log("MONGODB connection Failed @ DB Connection: ", err);
      process.exit(1);
    };
  }
};

export default connectDB;
