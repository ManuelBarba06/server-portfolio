import mongoose from "mongoose";
import dotenv, { config } from 'dotenv'

const db = async () => {
    
    const config = dotenv.config().parsed
    
    try{
        //Set strictquery in mongoose
        mongoose.set('strictQuery',true)
        
        //Connection db
        await mongoose.connect(
            `mongodb+srv://${config?.USER_DB}:${config?.PASSWORD_DB}@cluster0.mig6xrs.mongodb.net/${config?.NAME_DB}`
        )
        
        console.log('Database online')
        
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

export default db