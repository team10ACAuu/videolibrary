//TODO Vyresit id system

require('dotenv').config();
const Video = require('../models/videosSchema');
const mongoose = require('mongoose');

const createVideo = async (req, res) => {
    const {
        id,
        nameOfThisVideo, 
        episode, 
        link, 
        topic, 
        description, 
        duration, 
        difficulty, 
        ratingsAverage,
        creator,
        creationDate,
        price,
        summary,
        imageCover,
        images
    } = req.body;

    try {
        const video = await Video.create({
            id,
            nameOfThisVideo, 
            episode, 
            link, 
            topic, 
            description, 
            duration, 
            difficulty, 
            ratingsAverage,
            creator,
            creationDate,
            price,
            summary,
            imageCover,
            images
        });
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({ error: error.message, body: req.body, nameOf: nameOfThisVideo });
        console.log({body: req.body});
    }
}

const getVideo = async (req, res) => {
    const { id } = req.params
    console.log(req.params);
  
    const video = await Video.find({id: id}).exec()
  
    if (!video) {
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