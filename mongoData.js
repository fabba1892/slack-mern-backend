import mongoose from 'mongoose'

const slackSchema = mongoose.Schema({
    channelName: String,
    conversation: [
        {
            message:String,
            timestamp: String,
            user: String,
            userImage: String
        }
    ]
})

export default mongoose.model('conversations', slackSchema)

// created mongodb and first api route 4 chanel create
