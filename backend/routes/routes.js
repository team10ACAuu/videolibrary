const express = require('express');
const {
    createVideo,
    getVideo,
    getAllVideos,
    updateVideo,
    deleteVideo
} = require("../controllers/functions");

const router = express.Router();

router.get('/:id', getVideo);

router.get('/', getAllVideos);

router.post('/', createVideo);

router.patch('/:id', updateVideo);

router.delete('/:id', deleteVideo);

module.exports = router;