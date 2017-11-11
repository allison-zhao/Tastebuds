import grilledcheese from './img/grilledcheese.png'
import soupdumplings from './img/soupdumplings.png'
import cheeseburger from './img/cheeseburger.png'
import carrotcake from './img/carrotcake.png'
import churro from './img/churro.png'
import frenchfries from './img/frenchfries.png'
import hotdog from './img/hotdog.png'
import macaroon from './img/macaroon.png'
import pancakes from './img/pancakes.png'
import ramen from './img/ramen.png'

export const cardsData = [
  {
    image: carrotcake,
    id: '1',
    text: 'Carrot Cake'
  },
  {
    image: cheeseburger,
    id: '2',
    text: 'Cheese Burger'
  },
  {
    image: soupdumplings,
    id: '3',
    text: 'Soup Dumplings (Pork)'
  },
  {
    image: grilledcheese,
    id: '4',
    text: 'Grilled Cheese'
  },
  {
    image: churro,
    id: '5',
    text: 'Churros'
  },
  {
    image: frenchfries,
    id: '6',
    text: 'French Fries'
  },
  {
    image: hotdog,
    id: '7',
    text: 'Hotdog'
  },
  {
    image: macaroon,
    id: '8',
    text: 'Macaroon'
  },
  {
    image: pancakes,
    id: '9',
    text: 'Waffles'
  },
  {
    image: ramen,
    id: '10',
    text: 'Ramen'
  },
];

export const seenCards = localStorage.hasOwnProperty('seenCards') ? JSON.parse(localStorage.getItem('seenCards')) : [];
export const markCardAsSeen = (id) => {
  if (!seenCards.includes(id)) {
    seenCards.push(id);
    localStorage.setItem('seenCards', JSON.stringify(seenCards));
  }
};

//-------------------------------------------------------------------------

export const matchesData = [
  {
    id: 1,
    name: 'Eren',
    description: 'I love Chop\'t! Salads are the best! Also a big fan of Artichoke Pizza.',
    age: 26
  }
]

export const likedFoods = []
