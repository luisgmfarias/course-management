import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://mongo:27017/course_management";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running in http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Mongo Connection error", error);
  });
