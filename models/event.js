const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
    firstname: { type: Schema.Types.ObjectId, ref: 'User' },
    lastname: { type: Schema.Types.ObjectId, ref: 'User' },
    email: { type: Schema.Types.ObjectId, ref: 'User' },
    isgoing: Boolean
});

const eventSchema = new Schema({
  name: { type: String, required: true },
  category: {type: String, required: true },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
  attendees: [ attendeeSchema ],
  potentialDatetimes: [ Date ],
  scheduledDatetime: Date,
  createdDate: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
