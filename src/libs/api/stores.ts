import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';

export const Stores = [
  {
    name: '西堤牛排',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/store/store2.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '美食控')?.image || '',
    isReceiveMyCoin: false,
  },
  {
    name: '御私藏',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/store/store3.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '飲料控')?.image || '',
    isReceiveMyCoin: false,
  },
  {
    name: '星巴克',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/store/store4.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '咖啡控')?.image || '',
    isReceiveMyCoin: true,
  },
  {
    name: '台北威秀',
    content: 'AR空間社群',
    image: 'https://i.meee.com.tw/vzSicbe.png',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '娛樂控')?.image || '',
    isReceiveMyCoin: true,
    address: '台北市信義區松壽路20號',
    tagAmount: '468',
  },
  {
    name: '台中威秀',
    content: 'AR空間社群',
    image: 'https://i.meee.com.tw/vzSicbe.png',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '娛樂控')?.image || '',
    isReceiveMyCoin: true,
    address: '台中市西屯區臺灣大道三段251號13樓',
    tagAmount: '213',
  },
  {
    name: '高雄威秀',
    content: 'AR空間社群',
    image: 'https://i.meee.com.tw/vzSicbe.png',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '娛樂控')?.image || '',
    isReceiveMyCoin: true,
    address: '高雄市苓雅區三多四路21號13-15樓',
    tagAmount: '79',
  },
];
