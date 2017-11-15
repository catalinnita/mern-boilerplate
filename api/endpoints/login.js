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

      //var json = JSON.stringify({ success: false, message: 'Authentication failed. User not found.' });
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(json);
      
      
    // there is a user 
    } else if (user) {

      // password doesn't match
      if (user.password != req.body.password) {
          
        //var json = JSON.stringify({ success: false, message: 'Authentication failed. Wrong password.' });
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(json);
        
      // password matches  
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user.toJSON(), config.super_secret, {
          expiresIn: 60*60*24 // expires in 24 hours -> set this to a config
        });

        // return the information including token as JSON
        var json = JSON.stringify({
          success : true,
          message : 'Enjoy your token!',
          token   : token
        });
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(json);

      
      }

    }

  });

}

export default apiLogin;