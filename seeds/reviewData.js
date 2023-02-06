// seeds the table of game reviews
const { Review } = require('../models');

const reviewData = [
  {
    review_rating: 5,
    review_title: 'awesome game!',
    review_text: 'This game is awesome!',
    user_id: 1,
    game_id: 1,
    review_date: '2021-01-01',
  },
  {
    review_rating: 3,
    review_title: 'awesome game!',
    review_text: 'This game is awesome!',
    user_id: 1,
    game_id: 1,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'awesome game!',
    review_text: 'This game is awesome!',
    user_id: 2,
    game_id: 2,
    review_date: '2021-01-01',
  },
  {
    review_rating: 3,
    review_title: 'okay game!',
    review_text: 'This game was average!',
    user_id: 3,
    game_id: 3,
    review_date: '2021-01-01',
  },
  {
    review_rating: 1,
    review_title: 'horrible game!',
    review_text: 'worst game that I have played!',
    user_id: 4,
    game_id: 4,
    review_date: '2021-01-01',
  },
  {
    review_rating: 2,
    review_title: 'disappointing!',
    review_text: 'It thought it would be better but I was wrong!',
    user_id: 3,
    game_id: 4,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'great game!',
    review_text: 'Totally worth the money!',
    user_id: 3,
    game_id: 5,
    review_date: '2021-01-01',
  },
  {
    review_rating: 5,
    review_title: 'such a cool game',
    review_text: 'I enjoyed playing this with my friends!',
    user_id: 1,
    game_id: 6,
    review_date: '2021-01-01',
  },
  {
    review_rating: 3,
    review_title: 'not bad but not great!',
    review_text:
      'I expected better but at the same time I was not disappointed',
    user_id: 2,
    game_id: 7,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'just WOW!',
    review_text: 'I was blown away. Did not expect it to be this good!',
    user_id: 4,
    game_id: 8,
    review_date: '2021-01-01',
  },
  {
    review_rating: 1,
    review_title: 'This game was a MONEY Grab!!',
    review_text:
      'I can not believe that they are actually selling this as a game! SMH',
    user_id: 1,
    game_id: 9,
    review_date: '2021-01-01',
  },
  {
    review_rating: 3,
    review_title: 'MEH',
    review_text: 'They could have done so much better with this game!',
    user_id: 2,
    game_id: 10,
    review_date: '2021-01-01',
  },
  {
    review_rating: 5,
    review_title: 'Blown Away!',
    review_text: 'The graphics alone are out of this world!',
    user_id: 4,
    game_id: 11,
    review_date: '2021-01-01',
  },
  {
    review_rating: 2,
    review_title: 'Crying, because it so bad',
    review_text: 'The game developers did not even try to make this good.',
    user_id: 3,
    game_id: 12,
    review_date: '2021-01-01',
  },
  {
    review_rating: 1,
    review_title: 'Why is this even a game?',
    review_text: 'There goes 20 dollars that I will never get back :(',
    user_id: 4,
    game_id: 13,
    review_date: '2021-01-01',
  },
  {
    review_rating: 5,
    review_title: 'FIVE STARS!!!!',
    review_text: 'The developers really outdid themvelves with this game. ',
    user_id: 1,
    game_id: 14,
    review_date: '2021-01-01',
  },
  {
    review_rating: 5,
    review_title: 'I am addicted to this game',
    review_text: 'You will not regret buying this game.',
    user_id: 2,
    game_id: 15,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'Just Fantastic',
    review_text: 'The graphics and gameplay were simply outstanding',
    user_id: 3,
    game_id: 15,
    review_date: '2021-01-01',
  },
  {
    review_rating: 3,
    review_title: 'Gameplay was too short',
    review_text: 'I wanted the gameplay to be longer',
    user_id: 4,
    game_id: 16,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'Finally a good game',
    review_text:
      'I am so happy to finally find a game so engaging as this one.',
    user_id: 1,
    game_id: 17,
    review_date: '2021-01-01',
  },
  {
    review_rating: 2,
    review_title: 'Too easy',
    review_text: 'It was way to easy to complete the gameplay',
    user_id: 2,
    game_id: 18,
    review_date: '2021-01-01',
  },
  {
    review_rating: 5,
    review_title: 'I am in awe',
    review_text: 'This game is flawless',
    user_id: 3,
    game_id: 19,
    review_date: '2021-01-01',
  },
  {
    review_rating: 1,
    review_title: 'Ummmmmm....yeah',
    review_text: '*Sigh* frustating game. Did not like it one bit',
    user_id: 3,
    game_id: 20,
    review_date: '2021-01-01',
  },
  {
    review_rating: 5,
    review_title: 'YYAAAAAAYYY, so Happy',
    review_text:
      'Buying this game was the best decision I have ever made in my life.',
    user_id: 4,
    game_id: 21,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'Good is an understatement',
    review_text: 'Good is an understatement for how great this game is.',
    user_id: 1,
    game_id: 22,
    review_date: '2021-01-01',
  },
  {
    review_rating: 2,
    review_title: 'snooze fest',
    review_text: 'Almost fell asleep playing this',
    user_id: 2,
    game_id: 23,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'EXCELLENT',
    review_text: 'absolute perfection',
    user_id: 2,
    game_id: 24,
    review_date: '2021-01-01',
  },
  {
    review_rating: 3,
    review_title: 'Bang average',
    review_text: 'This game is totally unoriginal',
    user_id: 4,
    game_id: 25,
    review_date: '2021-01-01',
  },
  {
    review_rating: 5,
    review_title: 'I wish I could give it 10 stars!',
    review_text: 'This is one of those games that will stand the test of time',
    user_id: 1,
    game_id: 26,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'In love with this game',
    review_text: 'This game is dynamic and original.',
    user_id: 1,
    game_id: 27,
    review_date: '2021-01-01',
  },
  {
    review_rating: 1,
    review_title: 'Why did I buy this?',
    review_text: 'Absolute trash. DO NOT BUY!!!',
    user_id: 3,
    game_id: 28,
    review_date: '2021-01-01',
  },
  {
    review_rating: 5,
    review_title: 'Exciting!',
    review_text:
      'Trust me when I say that the developers outdid themselves with this game.',
    user_id: 4,
    game_id: 29,
    review_date: '2021-01-01',
  },
  {
    review_rating: 4,
    review_title: 'good gameplay.',
    review_text: 'Gameplay was fun and and graphics were captivating',
    user_id: 2,
    game_id: 30,
    review_date: '2021-01-01',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
