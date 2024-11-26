const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  datecreate: { type: String }
});

const Usermodel = model("users", UserSchema);
module.exports = Usermodel;