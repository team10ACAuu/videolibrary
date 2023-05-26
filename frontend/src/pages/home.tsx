import { useState, useEffect } from 'react'

const Home = () => {
    const [videosData, setVideosData] = useState({})

    useEffect(() => {
        const fetchVideoData = async () => {
            const response = await fetch('/api')
            console.table(response);
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
    }, [])
    console.log(videosData)
    return ( 
        <>
            {videosData.toString}
        </>
    );
}
 
export default Home;