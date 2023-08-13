import img1 from './images/tour-1.jpeg';
import img2 from './images/tour-2.jpeg';
import img3 from './images/tour-3.jpeg';
import img4 from './images/tour-4.jpeg';
import img5 from './images/tour-5.jpeg';
import img6 from './images/tour-6.jpeg';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 2,
    href: 'https://www.instagram.com',
    icon: 'fab fa-instagram',
  },
  {
    id: 3,
    href: 'https://www.facebook.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 4,
    href: 'https://www.squarespace.com',
    icon: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'Saving Money',
    text: 'Our plans offer the best rates. They will never hurt your wallet.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'Endless Hiking',
    text: 'We offer a wide variety of trails, new ones added every month.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'Amazing Comfort',
    text: 'We choose only the best vehicles and hotels to supplement your tours.',
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Explore the serene landscapes of Tibet, where ancient monasteries cling to rugged mountains, offering a glimpse into Tibetan Buddhist culture amidst breathtaking Himalayan vistas.',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: img2,
    date: 'september 9th, 2020',
    title: 'Best of Java',
    text: "Java beckons with a harmonious blend of ancient temples, bustling markets, and the surreal majesty of Mount Bromo's sunrise, inviting you to unravel the layers of Indonesia's diverse heritage.",
    location: 'indonesia',
    duration: 12,
    cost: 1400,
  },
  {
    id: 3,
    img: img3,
    date: 'march 22nd, 2020',
    title: 'Explore Hong Kong',
    text: "Immerse yourself in Hong Kong's vibrant cityscape, a fusion of modern skyscrapers and traditional markets, where culinary adventures and stunning harbor views await at every turn.",
    location: 'Hong Kong',
    duration: 9,
    cost: 4500,
  },
  {
    id: 4,
    img: img4,
    date: 'july 16th, 2020',
    title: 'Kenya Highlights',
    text: 'Embark on an unforgettable safari through Kenya\'s iconic savannas, where the "Big Five" roam freely against the backdrop of sweeping plains and the annual spectacle of the Great Migration.',
    location: 'Kenya',
    duration: 13,
    cost: 3200,
  },
  {
    id: 5,
    img: img5,
    date: 'december 9th, 2020',
    title: 'Lush Bali',
    text: "Surrender to Bali's enchanting allure, where emerald rice terraces, ornate temples, and pristine beaches create a haven of relaxation and spiritual rejuvenation.",
    location: 'Indonesia',
    duration: 5,
    cost: 1500,
  },
  {
    id: 6,
    img: img6,
    date: 'january 26th, 2020',
    title: 'Incredible India',
    text: "Experience India's kaleidoscope of cultures, from the bustling bazaars of Delhi to the timeless elegance of the Taj Mahal, offering a sensory journey through history and tradition.",
    location: 'India',
    duration: 18,
    cost: 5600,
  },
];
