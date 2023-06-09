import User from '../models/User.js';

export const addUser=async(req,res)=>{

console.log(req.body);

try{
let exist=await User.findOne({sub:req.body.sub})

if(exist){
   return res.status(200).json({msg:'user already exist'});
    // return;
}

const newUser=new User(req.body);
await newUser.save();
res.status(200).json(newUser);
}catch(error){
res.status(500).json(error.message);
}

}

export const getUsers=async(req,res)=>{
    try{
       const users=await User.find({});
       return res.status(200).json(users);
    }catch(error){
        return res.status(500).json(error.message);
    }
}