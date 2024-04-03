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
      const name = 'Win 2500 $SWEAT (March 2024)';
      const link =
        'https://docs.google.com/spreadsheets/d/1w2BtuCENT0xKqVz6TxcS6vYk2vTP6vROMZWxGpCJzGI/edit#gid=272259016';
      await Rewards.create({
        name: name,
        winners,
        link: link,
      });
      console.log(`Success: ${name}`);
      console.log(`Winners: ${winners.length}`);
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error);
  });
