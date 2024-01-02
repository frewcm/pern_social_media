import express from "express";
import cors from "cors";
const app = express();

//route imports
import registerRoute from "./routes/Register.js";
import loginRoute from "./routes/Login.js";

// middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/", registerRoute);
app.use("/api/", loginRoute);

app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT:5000");
});
