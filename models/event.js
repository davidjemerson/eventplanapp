const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
    attendee: { type: Schema.Types.ObjectId, ref: 'User' },
    isgoing: Boolean,
    selectedDates: []
});

const eventSchema = new Schema({
  name: { type: String, required: true },
  category: {type: String, required: true },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
  attendees: [ attendeeSchema ],
  potentialDatetimes: [ Date ],
  scheduledDatetime: Date,
  createdDate: { type: Date, default: Date.now },
  confirmed: { type: Boolean, default: false }
});

const Event = mongoose.model( "Event", eventSchema );

module.exports = Event;