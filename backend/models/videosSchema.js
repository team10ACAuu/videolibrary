const mongoose = require('mongoose');
const VideoProperties = new mongoose.Schema({
    id: {
      type: Number,
      required: false,
      unique: true,
    },
    title: {
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
    thumbnail: {
      type: String,
      required: false,
    },
});

const videoSchema = mongoose.model ('VideoProperties', VideoProperties);
module.exports = videoSchema;

  
  
  