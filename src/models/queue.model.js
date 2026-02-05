import mongoose from 'mongoose'
const queueModel = mongoose.Schema({
    users: [],
})
const Queue = mongoose.model('Queue', queueModel)
export { Queue }
