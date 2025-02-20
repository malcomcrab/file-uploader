require('dotenv').config();
const indexRouter = require("./routes/indexRouter")
const usersRouter = require("./routes/usersRouter")
const storageRouter = require("./routes/storageRouter")
const path = require("node:path");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/storage", storageRouter)


app.listen(3000, () => console.log("app listening on port 3000!"));

