import express from "express";
import { authMiddleware } from "./middlewares/authMiddleware.js"; // adjust path as needed

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Use the middleware for a protected route
app.get("/protected", authMiddleware, (req, res) => {
  res.send("This is a protected route");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
