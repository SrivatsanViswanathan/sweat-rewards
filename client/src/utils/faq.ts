import { nanoid } from 'nanoid';

interface FAQProp {
  id: string;
  title: string;
  description: string;
}

export const faq: FAQProp[] = [
  {
    id: nanoid(),
    title: 'does everyone have an equal chance to win the reward?',
    description:
      'Yes. Sweat Economy uses the Premium version of Random.org to determine the winners. Random.org offers true randomness. Check out their site!',
  },
  {
    id: nanoid(),
    title: 'can i enter a reward multiple times?',
    description: 'No. You can only opt into each reward once. ',
  },
  {
    id: nanoid(),
    title: 'what are gas fees?',
    description:
      'Gas fees is a cost you pay to process a transaction on a blockchain. Transactions are when you move an asset from one location to another. Gas fees are paid in the native token for the blockchain. Sweat is on the Near blockchain so gas fees are paid in Near. You can read about gas fees on <a href="https://www.reddit.com/r/Sweateconomy/comments/1ath4hs/gas_fee_explanation/" target="_blank" rel="noopener noreferrer">This Subreddit Post</a> or on the <a href="https://docs.near.org/concepts/protocol/gas" target="_blank" rel="noopener noreferrer">Near Docs</a>',
  },
  {
    id: nanoid(),
    title: 'how do i claim my reward?',
    description:
      'Congrats on winning a reward! You will receive an email from Sweat Economy for details on how to claim your prize. You should receive the email within 2 weeks. If you have not, you can go to the official  <a href="https://discord.gg/sweateconomy" target="_blank" rel="noopener noreferrer">Sweat Economy Discord Server</a> and someone will help you there.',
  },
  {
    id: nanoid(),
    title: 'why have i not won despite entering many times?',
    description:
      'Many people opt in to enter the rewards. There are thousands of entries for each reward and only a few winners.',
  },
  {
    id: nanoid(),
    title: 'i have another question',
    description:
      'Go to the official <a href="https://discord.gg/sweateconomy" target="_blank" rel="noopener noreferrer">Sweat Economy Discord Server</a> or <a href="https://www.reddit.com/r/Sweateconomy/" target="_blank" rel="noopener noreferrer">Sweat Economy Subreddit</a> and ask there! There are Mods and Community Managers available to help you with any problem you have.',
  },
];

export default faq;
