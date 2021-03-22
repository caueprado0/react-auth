const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
});

schema.index(
  {
    email: 1,
  },
  {
    unique: true,
  }
);

module.exports = model("user", schema);
