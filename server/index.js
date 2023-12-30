const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'afksfnask1241esd';
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

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

// app.post("/api/register", async (req, res) => {
//     console.log(req.body);  // Log the request body to inspect its contents
  
//     try {
//       const user = await User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//       });
  
//       res.json({ status: "ok" });
//     } catch (err) {
//       console.log(err);
//       res.json({ status: "error", error: 'Duplicate email or username' });
//     }
//   });

app.post("/api/register", async (req, res) => {
  const { username, password ,email } = req.body;
  try {
    const userDoc = await User.create({
        username,
        email,
        password:bcrypt.hashSync(password,salt),
      });
      res.json(userDoc);
    
  } catch (e) {
    res.status(400).json(e);
   
  } 
});
  

// app.post("/api/Login", async (req, res) => {
  
//     const user = await User.findOne({ 
//         email: req.body.email, 
//         password: req.body.password
//      });

    

//     if (user){
//         const token = jwt.sign({
//             username: user.username,
//              email: user.email
//          }, "secret123");

//         return res.json({ status: "ok",  token});
//      }else{
//         return res.json({ status: "ok", user: false });
//      }
  
// });


app.post('/api/login' , async (req, res) => {
  const {email , password} = req.body;
  const userDoc = await User.findOne({email});
  const passOk = bcrypt.compareSync(password , userDoc.password);
  if (passOk) {
      // logged in
      // res.json();
      jwt.sign({email, id:userDoc._id}, secret, {}, (err, token) => {
          if(err) throw err;
          res.cookie('token' , token).json("ok");
      } );
  }else{
      res.status(400).json('wrong credentials');
  }
});

app.get('/profile' , (req , res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  } )
  res.json(req.cookies);
});

app.post('/logout' , (req, res) => {
  res.cookie('token', '').json('ok');
})


app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
