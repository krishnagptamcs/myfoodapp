const express = require("express");
const app = express();
const database = require("./config/database");
const userRoutes = require("./routes/user");
const passportConnect = require("./utils/provider");
const session = require("express-session");

const dotenv = require("dotenv");
const passport = require("passport");
dotenv.config();

const secret_key = process.env.SESSION_SECRET

// using middleware

app.use(
  session({
    secret: secret_key,
    saveUninitialized: true,
    resave: false,
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());



passportConnect.connectPassport();

const PORT = process.env.PORT || 5000;

// database connection
database.connectDB();

// routes
app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello i am working now</h1>");
});
