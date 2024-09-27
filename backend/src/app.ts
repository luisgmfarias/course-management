import express from "express";
import cors from "cors";
import courseRoutes from "./routes/course";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);

export default app;
