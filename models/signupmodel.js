import {Schema,model,models} from "mongoose"
const validator = require('validator')

const registerSchema = new Schema({
    username:{
        type:String,
        required:[true,'Please Enter your user name'],
        unique:[true,'This username is already taken']
    },
    email:{
        type:String,
        required:[true,'Please Enter your email address'],
        unique:[true,'This email already have an acoount'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password:{
        type:String,
        required:[true,'Please enter a password'],
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error('Please Enter a strong password and minimum length must be 8')
            }
        }
    }
},{
    timestamps:true
})

const Register = models.Register || model('Register',registerSchema)
export default Register