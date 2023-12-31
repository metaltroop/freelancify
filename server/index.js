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
    "mongodb+srv://kalepiyush02:Metal1234@cluster0.9msle7h.mongodb.net/users3",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));




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

// app.post("/api/register", async (req, res) => {
//   const { username, password, email } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const userDoc = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     });
//     res.json(userDoc);
//   } catch (e) {
//     res.status(400).json(e);
//   }
// });

  



// app.post('/api/login' , async (req, res) => {
//   const {email , password} = req.body;
//   const userDoc = await User.findOne({email});
//   const passOk = bcrypt.compareSync(password , userDoc.password);
//   if (passOk) {
//       // logged in
//       // res.json();
//       jwt.sign({email, id:userDoc._id}, secret, {}, (err, token) => {
//           if(err) throw err;
//           res.cookie('token' , token).json("ok");
//       } );
//   }else{
//       res.status(400).json('wrong credentials');
//   }
// });

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json("ok");
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  } else {
    res.status(400).json('user not found'); // Handle the case where the user is not found
  }
});




app.get('/profile', (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    res.json(info);
  });
});

// app.get('/dash' , (req ,res ) => {
//   const { token } = req.cookies;
//   jwt.verify(token, secret, {}, async (err, info) => {
//     if (err) throw err;
//     const postDoc = await Post.create({

//       bruh : info,
//     });
//     res.json(postDoc);
//   });
// })


app.post('/logout' , (req, res) => {
  res.cookie('token', '').json('ok');
})


app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
