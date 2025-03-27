import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    // require means that email must enter | unique means that email must be unique one cuz one user has one email access
    email:{
        require:true,
        unique : true,
        type : String
    },
    firstName:{
        require :true,
        type : String
    },
    lastName:{
        require : true,
        type: String
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    userType:{
         default : "Customer",
         type : String
    },
    profilePicture:{
        type: String,
        default :"https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1742660046~exp=1742663646~hmac=fa174f30fbb43c49eb876dbb71d019c22f38cc8bf083250fcfa0571d97c70d5e&w=826"
    }   
})

const User = mongoose.model("User",userSchema);

export default User;