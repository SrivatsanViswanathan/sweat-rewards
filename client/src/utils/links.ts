import { nanoid } from 'nanoid';

interface LinkProp {
  id: string;
  url: string;
  text: string;
}

export const links: LinkProp[] = [
  {
    id: nanoid(),
    url: '/',
    text: 'home',
  },
];

export default links;
