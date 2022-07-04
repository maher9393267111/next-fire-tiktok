import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad } from 'react-icons/fa';

export const topics = [
  {
    name: 'development',
    icon: <BsCode />,
    id: 'development',
  },
  {
    name: 'comedy',
    icon: <BsEmojiSunglasses />,
    id: 'comedy',
  },
  {
    name: 'gaming',
    icon: <FaGamepad />,
    id: 'gaming',
  },
  {
    name: 'food',
    icon: <GiCakeSlice />,
    id: 'food',
  },
  {
    name: 'dance',
    icon: <GiGalaxy />,
    id: 'dance',
  },
  {
    name: 'beauty',
    icon: <GiLipstick />,
    id: 'beauty',
  },
  {
    name: 'animals',
    icon: <FaPaw />,
    id: 'animals',
  },
  {
    name: 'sports',
    icon: <FaMedal />,
  },
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'TikTik for Good','Advertise','Developers','Transparency','TikTik Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]