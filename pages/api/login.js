import connectDb from "../../middleware/mongoose"
import Register from "../../models/signupmodel"
import CryptoJS from "crypto-js"
const jwt = require('jsonwebtoken')

const userdata = async (req,res)=>{

  connectDb()
  try{
    console.log(req.body)
  const response =  await Register.findOne({'username':req.body.username})
  if(response){
    let passbody = CryptoJS.AES.decrypt(response.password,'secret123').toString(CryptoJS.enc.Utf8)
  if(passbody == req.body.password){
    var token = jwt.sign({username:req.body.username,password:passbody},'secretjwt')
    // localStorage.setItem('token',token)
    res.json({token})    
  }else{
    res.json('invalid username or password')
  }
  }
else{
  res.json(response)
}
  }
  catch(err){
    console.log(err)
  }
  
}
export default userdata
