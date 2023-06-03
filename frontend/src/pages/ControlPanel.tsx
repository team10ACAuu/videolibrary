import { useState } from 'react';

import {
    Stack,
    Input,
    IconButton,
    Editable,
    EditableTextarea,
    EditablePreview,
    Tabs, TabList, TabPanels, Tab, TabPanel
  } from '@chakra-ui/react'
import { CheckIcon, SearchIcon } from '@chakra-ui/icons';

const ControlPanel = () => {
    const [videoId, setVideoId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [topic, setTopic] = useState("");
    const [link, setLink] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [videosData, setVideosData] = useState(
        [
          {
            link: '',
            thumbnail: '',
            title: 'Titulek není k dispozici',
            description: '',
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

    const patchVideo = async () => {
          try {
          const response = await fetch('http://localhost:5173/api/'+videoId, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: videoId ,
              title: title, 
              link: link, 
              topic: topic, 
              description: description, 
              thumbnail: thumbnail,
              
            }),
          });
          const data = await response.json();
          console.log(data);

    
        } catch (error) {
          console.error("Error:", error);
        }
    };

    console.log(title, description);

    return ( 
        <>
          <Stack spacing={3}>
            <Input onChange={(e) => setVideoId(e.target.value)} placeholder='id' size='md' />
            <IconButton onClick={getVideo} aria-label='Search database' icon={<SearchIcon />} />
            <Tabs variant='enclosed'>
              <TabList>
                <Tab>Vlastnosti</Tab>
                <Tab>Úpravy</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>Vlastnosti</p>
                </TabPanel>
                <TabPanel>
                  <Editable onChange={setTitle} placeholder={videosData[0].title}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <Editable onChange={setDescription} placeholder={videosData[0].description}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <Editable onChange={setTopic} defaultValue={videosData[0].topic} placeholder={videosData[0].topic}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <Editable onChange={setLink} defaultValue={videosData[0].link} placeholder={videosData[0].link}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <Editable onChange={setThumbnail} defaultValue={videosData[0].thumbnail} placeholder={videosData[0].thumbnail}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <IconButton onClick={patchVideo} aria-label='Search database' icon={<CheckIcon />} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </> 
    );
}
 
export default ControlPanel;