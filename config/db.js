const mongoose=require('mongoose');
const colors=require('colors');
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected to the database ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`error to connecting with mongodb ${error}`);
    }
}
module.exports=connectDB