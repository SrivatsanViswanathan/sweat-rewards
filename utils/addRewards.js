import { createReadStream } from 'fs';
import csv from 'csv-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { config } from 'dotenv';
config({ path: '../.env' });
dotenv.config();

import Rewards from '../models/Rewards.js';

// Declare an empty array to store the winners
const winners = [];

// Path to your CSV file
const csvFilePath = './data.csv';

// Read the CSV file
createReadStream(csvFilePath)
  .pipe(csv({ headers: false }))
  .on('data', (row) => {
    // Extract the value from the CSV row
    const value = Object.values(row)[0]; // Access the first value of each row
    // Push the value into the winners array
    winners.push(value);
  })
  .on('end', async () => {
    console.log('CSV file successfully processed');
    console.log('Winners:', winners);
    try {
      await mongoose.connect(process.env.MONGO_URL);
      await Rewards.create({
        name: 'Test Reward For Duplicate (March 2023)',
        winners,
        link: 'https://docs.google.com/spreadsheets/d/16Z8JXITOxOhDX55-sCuHF0KDVqwHv2HhssIKCj3j4v4/edit#gid=517347639',
      });
      console.log('Success');
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error);
  });
