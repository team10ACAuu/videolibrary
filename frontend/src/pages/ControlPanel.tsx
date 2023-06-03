import { useState } from 'react';

import {
    Stack,
    Input,
    IconButton,
    Editable,
    EditableTextarea,
    EditablePreview,
  } from '@chakra-ui/react'
import { CheckIcon, SearchIcon } from '@chakra-ui/icons';

const ControlPanel = () => {
    const [videoId, setVideoId] = useState("");
    const [title, setTitle] = useState("");
    const [videosData, setVideosData] = useState(
        [
          {
            link: '',
            thumbnail: '',
            title: 'Titulek není k dispozici',
            description: 'Popisek není k dispozici',
            topic: ''
          }
        ]
    );

    const getVideo = () => {
        const fetchVideoData = async () => {
          const response = await fetch('/api/'+videoId)
          //console.table(response);
          const json = await response.json()
          if(response.ok) {
            setVideosData(json)
            }
          }
    
          try {
            fetchVideoData()
          }
          catch {
            console.log("Can't reach /")
          }
          fetchVideoData();
    };

    const handleUpload = async () => {
          try {
          const response = await fetch('http://localhost:5173/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: videoId ,
              title: 'videoTitle', 
              link: 'youtubeVideoId', 
              topic: 'test', 
              description: 'videoDescription', 
              ratingsAverage: '0',
              creator: 'Admin',
              creationDate: new Date(),
              thumbnail: 'thumbnailUrl',
              
            }),
          });
          const data = await response.json();
          console.log(data);

    
        } catch (error) {
          console.error("Error:", error);
        }
    };
    const patchVideo = () => {};

    console.log(title);

    return ( 
        <>
            <Stack spacing={3}>
                <Input onChange={(e) => setVideoId(e.target.value)} placeholder='id' size='md' />
                <IconButton onClick={getVideo} aria-label='Search database' icon={<SearchIcon />} />
                <Editable onChange={setTitle} defaultValue={videosData[0].title} value={title}>
                    <EditablePreview />
                    <EditableTextarea />
                </Editable>
                <Editable defaultValue={videosData[0].description} value={videosData[0].description}>
                    <EditablePreview />
                    <EditableTextarea />
                </Editable>
                <Editable  defaultValue={videosData[0].topic} value={videosData[0].topic}>
                    <EditablePreview />
                    <EditableTextarea />
                </Editable>
                <Editable defaultValue={videosData[0].link} value={videosData[0].link}>
                    <EditablePreview />
                    <EditableTextarea />
                </Editable>
                <Editable defaultValue={videosData[0].thumbnail} value={videosData[0].thumbnail}>
                    <EditablePreview />
                    <EditableTextarea />
                </Editable>
                <IconButton onClick={patchVideo} aria-label='Search database' icon={<CheckIcon />} />
            </Stack>
        </> 
    );
}
 
export default ControlPanel;