import dotenv from "dotenv";
import express from "express";
import path from "path";
import users from "./routes/users";
import logger from "./middleware/logger";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/../src/views");
app.use(express.static(__dirname + "/../public"));
app.use(logger);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/redirect", (req, res) => {
  res.redirect("/redirected");
});

app.get("/redirected", (req, res) => {
  res.send("You've been redirected");
});

app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
