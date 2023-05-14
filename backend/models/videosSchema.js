const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: false,
      unique: true,
    },
    name: {
      type: String,
      required: false,
    },
    episode: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    topic: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    duration: {
      type: Number,
      required: false,
    },
    difficulty: {
      type: String,
      required: false,
    },
    ratingsAverage: {
      type: Number,
      required: false,
    },
    creator: {
      type: String,
      required: false,
    },
    creationDate: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    summary: {
      type: String,
      required: false,
    },
    imageCover: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: false,
    },
});

const videosSchema = mongoose.model ('VideoSchema', VideoSchema);
module.exports = videosSchema;

  
  
  