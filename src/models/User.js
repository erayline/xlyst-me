import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String, default:"user"},
});

export const User = mongoose.models?.User || mongoose.model("User",userSchema);