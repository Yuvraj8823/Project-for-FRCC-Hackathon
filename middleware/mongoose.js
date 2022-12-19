import mongoose from 'mongoose'

const connectDb = async ()=>{
    
    try{
        console.log('connecting to mongo')
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connetion successful')
    }
    catch(error){
        throw new Error('connection failed' + error)
    }
}

export default connectDb