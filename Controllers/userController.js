import user from "../Model/user.js";
import bcrypt from "bcrypt"; // import bcrypt
import User from "../Model/user.js";



export function createUser(req,res){

  //Password Hashing Sector
   const newUserData = req.body
   // New user data wala thiyena password ek mean krnne *newUserData.password* kiyla. eka api = krnw  bcrypt hash sync ekt
   newUserData.password = bcrypt.hashSync(newUserData.password,10)

     
    const newUser = new user(newUserData);

    newUser.save().then(()=>{
        res.json({
            message : "User Create Successfully"
        })
    }).catch(err=>{
        res.statues(500).json({
            error: err.message
        });
    })
}

export function getAllUser(req,res){
    user.findAll().then(
        (userList)=>{
            res.json({
                list : userList 
            })
        }
    )
}

//Login Function

export function loginUser(req, res) {
    User.find({ email: req.body.email })
      .then((users) => {
        if (users.length === 0) {
          return res.json({
            message: "User not found!"
          });
        }
  
        const user = users[0];
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        
        if (isPasswordCorrect) {
          res.json({
            message: "User Login Successfully!"
          });
        } else {
          res.json({
            message: "Password Incorrect!"
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: "An error occurred",
          error: error
        });
      });
  }