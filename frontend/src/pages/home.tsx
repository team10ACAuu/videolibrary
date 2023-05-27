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
        let ATTRIBUTES: string[] = [];
        Object.keys(videosData[video]).forEach(attribute => {
            ATTRIBUTES.push(videosData[video][attribute]);
        });
        VIDEOS.push(
            <Card
            key={index}
                thumbnail={ATTRIBUTES[13]}
                title={ATTRIBUTES[3]}
                description={ATTRIBUTES[5]}
            />
        );
        ATTRIBUTES = [];
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