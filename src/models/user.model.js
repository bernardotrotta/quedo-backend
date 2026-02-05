import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    username: String,
    password: String,
})
const User = mongoose.model('User', userSchema)
export { User }
