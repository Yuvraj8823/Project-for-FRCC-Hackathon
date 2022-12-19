import connectDb from "../../middleware/mongoose";
import Register from "../../models/signupmodel";

const addUser = async (req,res)=>{
    await connectDb()
    if(req.method == 'POST'){
    // if(req.body.cpassword != req.body.password){
    //     throw new Error('wrong password or confirm password')
    // }
    // else{
        let user ={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
    let test = await Register.create(user)
    res.json({test})
    // }
}
}
export default addUser