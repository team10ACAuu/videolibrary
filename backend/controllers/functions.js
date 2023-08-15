require('dotenv').config();
const Video = require('../models/videosSchema');
const mongoose = require('mongoose');

const createVideo = async (req, res) => {
    const {
        id,
        title, 
        link, 
        topic, 
        description, 
        ratingsAverage,
        creator,
        creationDate,
        thumbnail,
    } = req.body;

    try {
        const video = await Video.create({
            id,
            title, 
            link, 
            topic, 
            description, 
            ratingsAverage,
            creator,
            creationDate,
            thumbnail,
        });
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({ error: error.message, body: req.body, nameOf: title });
        console.log({body: req.body});
    }
}

const getVideo = async (req, res) => {
    const { id } = req.params
    console.log(req.params);
  
    const video = await Video.find({id: id}).exec()
  
    if (!video || video.length === 0) {
      return res.status(404).json({error: 'No such video'})
    }
  
    res.status(200).json(video)
}

const getAllVideos = async (req, res) => {
    const videos = await Video.find({}).sort({createdAt: -1})

    res.status(200).json(videos)
}

const updateVideo = async (req, res) => {
    const { id } = req.params
  
    const video = await Video.findOneAndUpdate({id: id}, {
      ...req.body
    })
  
    if (!video) {
      return res.status(400).json({error: 'No such video'})
    }
  
    res.status(200).json(video)
}

const deleteVideo = async (req, res) => {
    const { id } = req.params

    const video = await Video.findOneAndDelete({id: id})
  
    if(!video) {
      return res.status(400).json({error: 'No such video'})
    }
    console.log("test")
    res.status(200).json(video)
}

module.exports = {
    createVideo,
    getVideo,
    getAllVideos,
    updateVideo,
    deleteVideo
}