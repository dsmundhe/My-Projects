const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/db");
const userRouter = require("./routes/userRoutes");

app.use(cors());
//dbConnection
dbConnect();

//access json data form body
app.use(express.json());

app.use("/user", userRouter);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("server started....");
});
