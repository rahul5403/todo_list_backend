import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true,
        minlen: 6
    }
},{timestamp: true})

export const User = new mongoose.model("user", userSchema);

