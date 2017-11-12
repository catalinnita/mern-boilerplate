import User from '../../db/models/user'
import jwt from 'jsonwebtoken'
import config from '../../config'

const apiLogin = (req, res) => {

  console.log(req.body);

  // search for user
  User.findOne({

    name: req.body.api_key
  
  }, function(err, user) {

    if (err) throw err;

    // no user 
    if (!user) {

      res.json({ success: false, message: 'Authentication failed. User not found.' });
      
    // there is a user 
    } else if (user) {

      // password doesn't match
      if (user.password != req.body.password) {
          
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        
      // password matches  
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user.toJSON(), config.super_secret, {
          expiresIn: 60*60*24 // expires in 24 hours -> set this to a config
        });

        // return the information including token as JSON
        res.json({
          success : true,
          message : 'Enjoy your token!',
          token   : token
        });
      }

    }

  });

}

export default apiLogin;