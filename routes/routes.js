const express = require('express');

const videos =JSON.parse(
    fs.readFileSync("../../dev-data/data/videos-simple.json"));


 // 2nd argument is rout handler
  app.get('/api/v1/videos', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: videos.length,
        data: { 
            videos: videos  
        }

    })
  });

  app.get('/api/v1/videos/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1; // we need to convert the string :req.params:'5'  into number.

    if(id > videos.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        }); 

    }

    const video = videos.find(el => el.id === id);

    res.status(200).json({
        status: 'success',
        data: { // we are sending an object that have the video property
           video  // we can right only videos, according to ES6, since it hase the same name videos
        }

    })
  });


  // in order to add new data on the req, we need to onclude a middleware
  app.post('/api/v1/videos', (req, res) => {
     //console.log(req.body);
      
     const newId = videos[videos.length - 1].id + 1;  // giving new video a new id
     const newVideo = Object.assign({id: newId}, req.body); 

     videos.push(newVideo);
     // 1st arg: where we want to write (which file),2nd arg:  what we want to write, we need to convert JS object into string, 3rd arg: 
     fs.writeFile(`${__dirname}/dev-data/data/videos-simple.json`,
      JSON.stringify(videos),
       err => {
        // 201: means created
        res.status(201).json({
            status: 'success',
            data: {
                video: newVideo
            }
        })
     });     
  });
 
  // Update video - (Patch)

  app.patch('/api/v1/videos/:id', (req, res) => {
    if (req.params.id * 1 > videos.length) {

    return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        }); 

    }


    res.status(200).json({
        status: 'success',
        data: {
            video:'<Updated video here .... >'
        }
    });
  });


  // Delete video - (Delete)

  app.delete('/api/v1/videos/:id', (req, res) => {
    if (req.params.id * 1 > videos.length) {

    return res.status(404).json({  
            status: 'fail',
            message: 'Invalid ID'
        }); 

    }

    res.status(204).json({   // 204: no content
        status: 'success',
        data: null
    });
  });