const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/user.models");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
// mongoose.connect('mongodb+srv://kalepiyush02:<password>@cluster0.9msle7h.mongodb.net/users')
mongoose
  .connect(
    "mongodb+srv://kalepiyush02:Metal1234@cluster0.9msle7h.mongodb.net/users",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


// app.post("/api/register", async (req, res) => {
//   console.log(req.body);
//   try {
//     const user = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     res.json({ status: "ok" });
//   } catch (err) {
//     console.log(err);
//     res.json({ status: "error", error: 'Duplicate email or username' });
//   }
// });

app.post("/api/register", async (req, res) => {
    console.log(req.body);  // Log the request body to inspect its contents
  
    try {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      res.json({ status: "ok" });
    } catch (err) {
      console.log(err);
      res.json({ status: "error", error: 'Duplicate email or username' });
    }
  });
  

app.post("/api/Login", async (req, res) => {
  
    const user = await User.findOne({ 
        email: req.body.email, 
        password: req.body.password
     });

    

    if (user){
        const token = jwt.sign({
            username: user.username,
             email: user.email
         }, "secret123");

        return res.json({ status: "ok",  token});
     }else{
        return res.json({ status: "ok", user: false });
     }
  
});




app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
