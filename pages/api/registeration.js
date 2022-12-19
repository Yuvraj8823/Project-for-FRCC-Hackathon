import connectDb from "../../middleware/mongoose";
import Register from "../../models/signupmodel";
import CryptoJS from "crypto-js";

const addUser = async (req,res)=>{
    await connectDb()
    if(req.method == 'POST'){
    // if(req.body.cpassword != req.body.password){
    //     throw new Error('wrong password or confirm password')
    // }
    // else{
        let {email,username} = req.body;
        let test = new Register({email,username,password: CryptoJS.AES.encrypt(req.body.password,'secret123').toString()})
        test.save()
    res.json({test})
    // }
}
}
export default addUser