import mongoose from "mongoose";

export const Connection = async (DB_USERNAME, DB_PASSWORD) => {
  const URL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ac-uizjfxz-shard-00-00.ix8bjym.mongodb.net:27017,ac-uizjfxz-shard-00-01.ix8bjym.mongodb.net:27017,ac-uizjfxz-shard-00-02.ix8bjym.mongodb.net:27017/?ssl=true&replicaSet=atlas-9d6a81-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};
