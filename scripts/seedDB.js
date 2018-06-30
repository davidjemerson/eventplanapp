const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/eventplandb',
  {
    useMongoClient: true,
  }
);

const eventSeed = [
  {
    name: 'BBQ of Jack Fruit & Gluten Free Buns',
    category: 'food',
    organizer: 'ref',
    potentialDatetimes: new Date('2018-08-17'),
    scheduledDatetime: new Date('2018-08-17'),
    createdDate: new Date(Date.now()),
    confirmed: false,
  },
  {
    name: 'Watch Food Documentaries and Eat Designer Popcorn',
    category: 'entertainment',
    organizer: 'ref',
    potentialDatetimes: new Date('2018-07-01'),
    scheduledDatetime: new Date('2018-07-11'),
    createdDate: new Date(Date.now()),
    confirmed: true,
  },
  {
    name: 'Go to the Quidditch Match',
    category: 'sporting',
    organizer: 'ref',
    potentialDatetimes: new Date('2018-08-17'),
    scheduledDatetime: new Date('2018-08-17'),
    createdDate: new Date(Date.now()),
    confirmed: true,
  },
];

db.Event.remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
