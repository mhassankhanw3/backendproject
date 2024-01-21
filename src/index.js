import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("application not able to talk to database", err);
      throw err;
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server listening on port: ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed: " + err);
  });

// import express from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
// app.on("error", (err) => {
//   console.log("application not able to talk to database", err);
//   throw err;
// });
//     app.listen(process.env.PORT, () => {
//       console.log(`listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("error --->>>>>", error);
//     throw error;
//   }
// })();
