const { Schema, model } = require("mongoose");

const NeighborhoodSchema = new Schema(
  {
    name: String,
    geometry: {
      type: {
        type: String,
        default: "Polygon",
      },
      coordinates: [[[Number]]],
    },
  },
  {
    collection: "neighborhoods",
  }
);

const neighborhood = model("Neighborhood", NeighborhoodSchema);

neighborhood.collection.createIndex({
  geometry: "2dsphere",
});

module.exports = neighborhood;
