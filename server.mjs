import express from "express";
import cors from "cors";
import data from "./routes/data.mjs";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /data routes
app.use("/data", data);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

app.get("/", (req, res) => {
  res.send("<h2>Hello</h2>");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});