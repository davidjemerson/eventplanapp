const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
<<<<<<< HEAD
    attendee: { type: Schema.Types.ObjectId, ref: 'User' },
    isgoing: Boolean,
    selectedDates: []
=======
  attendee: { type: Schema.Types.ObjectId, ref: 'User' },
  isgoing: Boolean,
>>>>>>> staging a commit so I can switch to master and rebase
});

const eventSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
<<<<<<< HEAD
  location: { type: String, required: true },
  address: { type: String, required: true },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
  numRequired: { type: Number, required: true },
  attendees: { type: Array, required: true },
=======
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
  attendees: [attendeeSchema],
  potentialDatetimes: [Date],
>>>>>>> staging a commit so I can switch to master and rebase
  scheduledDatetime: Date,
  createdDate: { type: Date, default: Date.now },
  confirmed: { type: Boolean, default: false },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;