// nodejs modules
const path = require("path");

//package requires
const express = require("express");
const app = express();
const mongoose = require("mongoose");
<<<<<<< HEAD
const server = require('http').Server(app);


=======
const session = require("express-session");
const MongoDbStore = require("connect-mongodb-session")(session);
>>>>>>> ab4681e9fad082d696c0acbf423cc7be50985239
//local requires
const publicRouter = require("./routes/public");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const publicApiRouter = require("./routes/api/public");
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
app.use(
  session({
    secret: "restaurant",
    resave: false,
    saveUninitialized: false,
    store: new MongoDbStore({
      uri: REMOTE_DB_URL,
      collection: "sessions",
    }),
  })
);

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
app.use("/admin", adminRouter);
app.use("/api", publicApiRouter);
console.log(REMOTE_DB_URL);

server.listen(PORT, () => {
  console.log(`Server started listening  port ${PORT}`);
});


//chati
const io = require('socket.io')(server)

io.on('connection', socket =>{
  console.log('new user');
  socket.emit('chat-message','Hello world');
  socket.on('send-chat-message', message =>{
    socket.broadcast.emit('chat-message', message)
  })
})