import mongoose from "mongoose";

const connectDB = async () =>{

    mongoose.connection.on('connected',()=>console.log('DB Connection Successful')
    )

    await mongoose.connect(`${process.env.MONGO_URL}/DEMO`)
}



export default connectDB;