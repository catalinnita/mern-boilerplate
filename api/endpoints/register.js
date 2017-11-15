import User from '../../db/models/user'
import jwt from 'jsonwebtoken'
import config from '../../config'

const apiRegister = (req, res) => {

      var r = req.body;

      // create user
      var user = new User({

        'email'           : r['email'],
        'password'        : r['password'],
        'admin'           : true

      });

      // save event
      user.save(function(err) {

        if (err) throw err;

        console.log('User saved successfully');
        // if user is created successfully
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


      }); 
}

export default apiRegister;