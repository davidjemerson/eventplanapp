const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  address: { type: String, required: false },
  organizer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  attendees: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  responses: { type: Array, required: false },
  potentialDates: { type: Array, required: true },
  scheduledDate: { type: Date, required: false },
  responseCount: { type: Number, required: true },
  defaultSchedule: { type: Date, required: true}
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
