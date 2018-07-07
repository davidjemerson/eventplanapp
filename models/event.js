const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
    attendee: { type: Schema.Types.ObjectId, ref: 'User' },
    isgoing: Boolean,
    selectedDates: []
});

const eventSchema = new Schema({
  name: { type: String, required: false },
  category: { type: String, required: false },
  location: { type: String, required: false },
  address: { type: String, required: false },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
  numRequired: { type: Number, required: false },
  attendees: [ attendeeSchema ],
  scheduledDatetime: Date,
  createdDate: { type: Date, default: Date.now },
  confirmed: { type: Boolean, default: false }
});

const Event = mongoose.model( "Event", eventSchema );

module.exports = Event;