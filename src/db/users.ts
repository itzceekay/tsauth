import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false},
        sessionToken: { type: String, select: false}
    },
});

export const userModel = mongoose.model('User', UserSchema);
export const getUsers = () => userModel.find();