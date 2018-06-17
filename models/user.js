const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    ownedEvents: [ {type: Schema.Types.ObjectId, ref: 'Event'} ],
    joinedEvents: [ {type: Schema.Types.ObjectId, ref: 'Event'} ],
    pendingEvents: [ {type: Schema.Types.ObjectId, ref: 'Event'} ],
    declinedEvents: [ {type: Schema.Types.ObjectId, ref: 'Event'} ]
})

const User = mongoose.model("User", userSchema);

module.exports = User;