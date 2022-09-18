require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5050;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost";

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/users");
const parksRoute = require("./routes/parks");

app.use("/users", userRoute);
app.use("/parks", parksRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running at ${BACKEND_URL}:${PORT}`);
});
