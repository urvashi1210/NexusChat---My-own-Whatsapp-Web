import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    iss:{
        type:String
    },
    ndf:{
        type:String
    },
    aud:{
        type:String
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    email:{
        type:String
    },
    email_verified:{
        type:Boolean
    },
    azp:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    given_name:{
        type:String
    },
    iat:{
        type:Number
    },
    exp:{
        type:Number
    },
    jti:{
        type:String
    }
})

const user=mongoose.model('user',userSchema);
//the first parameter of mongoose.model is user and second is Schema
export default user;