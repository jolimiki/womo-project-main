import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';

export const KOLs = [
  {
    name: '小茉莉',
    content: 'AR空間社群',
    image: 'https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/friend/11.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '時尚控')?.image || '',
    isReceiveMyCoin: false,
  },
  {
    name: '阿杰',
    content: 'AR空間社群',
    image: 'https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/friend/10.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '美食控')?.image || '',
    isReceiveMyCoin: true,
  },
  {
    name: 'Andy老師',
    content: 'AR空間社群',
    image: 'https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/friend/12.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '寵物控')?.image || '',
    isReceiveMyCoin: false,
  },
];
