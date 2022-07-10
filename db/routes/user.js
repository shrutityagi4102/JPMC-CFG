const express = require("express");
const router = express.Router();
const User = require("./../models/User");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const twilio = require('twilio'); 

const {OAuth2Client}=require("google-auth-library");

//recives from frontend
const client = new OAuth2Client(process.env.CLIENT_ID);


//twilio SMS API
const accountSid = 'AC46fc24b74f8fe81adaca88ffe2467c3b'
const authToken = '285af5bbf5fbadd7a7411ece21b54933'

const twclient = new twilio(accountSid, authToken)
var salt = bcrypt.genSaltSync(10);
require("../auth/passport");

const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

router.post("/register", async (req, res, next) => {
  await User.findOne({email: req.body.email })
    .then((user) => {
      if (user) {
        console.log(user);
        res.setHeader("Content-Type", "Application/JSON");
        res.status(400).json({
          message: "The following user is already registered",
          email: req.body.email,
        });
      }
      var hash = bcrypt.hashSync(req.body.password, salt);
      console.log(hash);
      new User({
        username: req.body.username,
        password: hash,
        email: req.body.email
    
      })
        .save()
        .then((user) => {
          const token=jwt.sign(
            { email: user.email, password: user.password, _id: user._id },
            "your_jwt_secret"
          );
          res.setHeader("Content-Type", "Application/JSON");
          res.json({ user: user,token:token, message: "Successfully registered" });
          console.log(user);
        })
        .catch((err) => {
          res.status(400).json({ message: "Unexpected server error" });
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

/*twilio SMS API ROUTE */
router.get('/send-sms', (res,req)=>{
 //Welcome Message
 req.send('your ration delivered')

 //_GET Variables
  const textmessage = 'Hello World!';

 //Send Text
 //loop through the number array

  twclient.messages.create({
      body: textmessage,
      to:  '+919100491460', //number[i],  // Text this number
      from: '+16622626864', // From a valid Twilio number
  }).then((message) => console.log(message.body));

})


/* POST login. */
router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {

      return res.status(400).json({
        message: "Something is not right",
        user: user
      });
    }
    req.login(user, { session: false }, (err) => {
      
      if (err) {
        console.log(err)
        res.send(err);
      }

      const token = jwt.sign(user, "your_jwt_secret");
      console.log(token)

      return res.json({ user, token });
    });
  })(req, res);
});

router.post('/googleLogin', async (req, res, next) => {
    const {tokenId} = req.body;
    // recieved from frontend

    client.verifyIdToken({idToken: tokenId , requiredAudience: process.env.CLIENT_ID}).then(response => {
      const {email_verified, name, email} = response.payload;
      console.log(response.payload);
      if(email_verified){
        User.findOne({email}).exec((err, user) => {
          if(err){
            return res.status(400).json({
              error: "Something Went Wrong"
            })
          }
          else{
            if(user){
                //exists in database
                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '10d'});
                const {_id, email, name} = user;

                res.json({
                  token,
                  user : {_id, email, name}
                })
            }
            else{
              let password = email+process.env.JWT_SECRET;
              //does not exist in database
               let newUser= new User(
                {
                  email :email,
                  username : name,
                  password : password
                }

               );

                newUser.save((err, user) => {
                  if(err){
                    console.log(err);
                    return res.status(400).json({
                      error: "Something Went Wrong"
                    })

                  }
                  else{
                    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '10d'});
                    const {_id, email, name} = user;
                    res.json({
                      token,
                      user : {_id, email, name}
                    })
                  }
                })
            }
          }
        })
      }
    })
    console.log()
})


module.exports = router;