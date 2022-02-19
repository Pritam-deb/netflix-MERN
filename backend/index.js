const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, () =>
  console.log("connected to DB!!")
);

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.get("/", (req, res) => {
  res.send("Netflix API here!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
