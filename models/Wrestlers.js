const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const WrestlersSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
    required: "Name for the Wrestler is required",
  },
  description: {
    type: String,
    required: "A Description of the Wrestler is needed",
  },
  // `link` is required and of type String
  imgUrl: {
    type: String,
    required: "Image is required",
  },
  // `stamina` is required and of type number
  stamina: {
    type: Number,
    min: [10, "A Wrestler needs at least enough stamina to run a mile "],
    max: 100,
  },
  // `health` is required and of type number
  health: {
    type: Number,
    required: true,
    min: [10, "A Wrestler needs at least enough health to breathe "],
    max: 100,
  },
  // `finishingMove` is required and of type String
  finishingMove: {
    type: String,
    required: false,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Wrestlers = mongoose.model("Wrestlers", WrestlersSchema);

// Export the Wrestlers model
module.exports = Wrestlers;
