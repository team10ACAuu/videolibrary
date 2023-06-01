import { useState, useEffect } from 'react'

import Card from "../components/card"

const Home = () => {
    const [videosData, setVideosData] = useState({})

    useEffect(() => {
        const fetchVideoData = async () => {
            const response = await fetch('/api')
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
    }, []);

    const VIDEOS: object[] = [];
    (Object.keys(videosData) as (keyof typeof videosData)[]).forEach((video, index) => {

        const videosdata: { [key: string]: any } = videosData[video];

        let attributes: string[] = [];
        Object.keys(videosData[video]).forEach(att => {
            attributes.push(videosData[video][att]);
        });

        const thumbnail = videosdata.thumbnail ? videosdata.thumbnail : "https://siparekraf.kamparkab.go.id/assets/images/no-image.png";
        const title = videosdata.title ? videosdata.title : "Tiulek není k dispozici";
        const description = videosdata.description ? videosdata.description : "Popis není k dispozici";
        const id = videosdata.id ? videosdata.id : '0'
        console.log(id)
        VIDEOS.push(
            <Card
            key={index}
                thumbnail={thumbnail}
                title={title}
                description={description}
                id={id}
            />
        );
        attributes = [];
    });

    return ( 
        <>
            {
                VIDEOS
            }
        </>
    );
}
 
export default Home;