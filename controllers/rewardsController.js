import { StatusCodes } from 'http-status-codes';
import Rewards from '../models/Rewards.js';
// Get Rewards
export const getRewards = async (req, res) => {
    const { walletAddress } = req.params;
    const winner = await Rewards.find({ winners: walletAddress }).select('name link');
    return res
        .status(StatusCodes.OK)
        .json({ walletAddress: walletAddress, rewardsWon: winner });
};
export const createReward = async (req, res) => {
    const { name, winners } = req.body;
    const reward = await Rewards.create({ name, winners });
    return res
        .status(StatusCodes.CREATED)
        .json({ message: 'Successfully created reward', reward: reward });
};
