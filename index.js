import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/tasks", taskRoutes);

app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`))
