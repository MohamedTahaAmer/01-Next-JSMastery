import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_snippets", 
      // - this will be the name of the database, and the schemas will be the name of the collections
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // - if in the same server instance we connected to the db once, then if we wanna access the db again we don't reconnect, as db connection is time consuming
    // - bu if the server was instance clossed, then we will need to reconnect again, as the "@utils/database.js" will be reexecuted agian which will reset the isConnected back to false
    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
