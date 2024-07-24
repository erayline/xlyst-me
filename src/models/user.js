import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true,default:"hi"},
    age: { type: String, required: true },
    bio: { type: String, default: "my bio" }
})

export const User = mongoose.models?.User || mongoose.model("User", userSchema);