import express, { Response } from "express";
import cors from "cors";
import apiRoutes from "./routes/api.routes.js";
import PORT from "./config/env.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.use((res: Response) => {
  res.status(404).json({ error: "Not Found" });
});

app.use((err: any, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
