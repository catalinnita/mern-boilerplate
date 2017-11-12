import User from '../../db/models/user'

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
        res.json({ success: true });

      }); 
}

export default apiRegister;