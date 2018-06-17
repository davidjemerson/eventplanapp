const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
})

const User = mongoose.model("User", userSchema);

module.exports = User;