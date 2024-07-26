import mongoose from "mongoose";
// uma alternativa para PostgreSQL pode ser o Sequelize

let isConnected = false; // track the connection

export const conectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompts",
      userNewUrlParser: true,
      useUnifiedTopology: true
    })
    
    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}