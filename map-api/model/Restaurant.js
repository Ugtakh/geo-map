const { Schema, model } = require("mongoose");

const RestaurantSchema = new Schema({
  name: String,
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
  },
});

const resraurant = model("Restaurant", RestaurantSchema);

resraurant.collection.createIndex({ location: "2dsphere" });

module.exports = resraurant;
