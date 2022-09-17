const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost";

app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server running at ${BACKEND_URL}:${PORT}`);
});
