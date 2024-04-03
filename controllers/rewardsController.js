import { StatusCodes } from 'http-status-codes';
import Rewards from '../models/Rewards.js';
// Get Rewards
export const getRewards = async (req, res) => {
  const { walletAddress } = req.params;
  const winner = await Rewards.find({ winners: walletAddress }).select(
    'name link'
  );
  return res
    .status(StatusCodes.OK)
    .json({ walletAddress: walletAddress, rewardsWon: winner });
};
export const getReward = async (req, res) => {
  const { id } = req.params;
  const reward = await Rewards.findById(id);
  return res.status(StatusCodes.OK).json({ reward });
};
export const createReward = async (req, res) => {
  const { name, winners, link } = req.body;
  const reward = await Rewards.create({ name, winners, link });
  return res
    .status(StatusCodes.CREATED)
    .json({ message: 'Successfully created reward', reward: reward });
};
export const updateReward = async (req, res) => {
  const { id } = req.params;
  const reward = await Rewards.findByIdAndUpdate(id, req.body, { new: true });
  return res
    .status(StatusCodes.CREATED)
    .json({ message: 'Successfully updated reward', reward: reward });
};
export const deleteReward = async (req, res) => {
  const { id } = req.params;
  const reward = await Rewards.findByIdAndDelete(id);
  return res
    .status(StatusCodes.CREATED)
    .json({ message: 'Successfully deleted reward', reward: reward });
};
