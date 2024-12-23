import mongoose from "mongoose";


const CrudSchema = new mongoose.Schema({
    email:String,
    pass:String,
})


const UserModel = mongoose.models.Crudoperation || mongoose.model('Crudoperation',CrudSchema)

export default UserModel