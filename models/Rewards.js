import mongoose from 'mongoose';
const RewardsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
    },
    winners: {
        type: [String],
        trim: true,
        required: [true, 'Must provide winners'],
        validate: {
            validator: function (value) {
                return value.every((winner) => winner.length === 64);
            },
            message: "Each winner's wallet address must be 64 characters long",
        },
    },
    link: {
        type: String,
        validator: function (value) {
            const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
            return urlRegex.test(value);
        },
        message: 'Invalid URL format',
    },
}, { timestamps: true });
const Rewards = mongoose.model('Rewards', RewardsSchema);
export default Rewards;
