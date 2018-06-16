const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizerSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, required: true }
});

const attendeeSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, required: true },
    isgoing: Boolean
});

const datetimeSchema = new Schema({
    date: Date
})

const eventSchema = new Schema({
  name: { type: String, required: true },
  category: {type: String, required: true },
  organizer: { organizerSchema },
  attendees: [ attendeeSchema ],
  potentialDatetimes: [ datetimeSchema ],
  scheduledDatetime: Date,
  createdDate: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
