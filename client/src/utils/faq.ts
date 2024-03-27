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
    title: 'how do i claim my reward?',
    description:
      'Congrats on winning a reward! You will receive an email from Sweat Economy for details on how to claim your prize. You should receive the email within 2 weeks. If you have not, you can go to the official Sweat Economy Discord Server and someone will help you there.',
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
      'Go to the official Sweat Economy Discord Server and ask there! There are Mods and Community Managers available to help you with any problem you have.',
  },
];

export default faq;
