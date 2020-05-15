// nodejs modules
const path = require("path");

//package requires
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//local requires
const publicRouter = require("./routes/public");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
//load .env key-value pairs in PROCESS.ENV object
require("dotenv").config();
// constants
const PORT = process.env.PORT || 3000;
const REMOTE_DB_URL = `mongodb+srv://${process.env.MONGODB_HOST}:${process.env.MONGODB_PASSWORD}@cluster0-mnwwo.mongodb.net/test?retryWrites=true&w=majority
`;
//root path i faqes

// konfigurime te aplikactionit

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + "/public")));

//extract data coming from HTML FORM POST in req.body object
app.use(express.urlencoded({ extended: true }));

//get json data in req.body
app.use(express.json());
mongoose.connect(REMOTE_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(publicRouter);
app.use(userRouter);
app.use(adminRouter);
console.log(REMOTE_DB_URL);

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
