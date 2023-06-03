import { useEffect, useState } from "react";
import CardGrid from "../components/CardGrid";

const Home = () => {
  const [videosData, setVideosData] = useState({});

<<<<<<< HEAD
  useEffect(() => {
    const fetchVideoData = async () => {
      const response = await fetch("/api");
      const json = await response.json();
      if (response.ok) {
        setVideosData(json);
      }
    };
=======
    useEffect(() => {
        const fetchVideoData = async () => {
            const response = await fetch('/api')
            const json = await response.json()
            if(response.ok) {
                setVideosData(json)
            }
        }
>>>>>>> ts-ftontend

    try {
      fetchVideoData();
    } catch {
      console.log("Can't reach /");
    }
    fetchVideoData();
  }, []);

<<<<<<< HEAD
  const VIDEOS: {
    thumbnail: string;
    title: string;
    description: string;
    id: string;
  }[] = [];
  (Object.keys(videosData) as (keyof typeof videosData)[]).forEach((video) => {
    let videosdata: { [key: string]: any } = videosData[video];
    const thumbnail = videosdata.thumbnail
      ? videosdata.thumbnail
      : "https://siparekraf.kamparkab.go.id/assets/images/no-image.png";
    const title = videosdata.title
      ? videosdata.title
      : "Title is not available";
    const description = videosdata.description
      ? videosdata.description
      : "Description is not available";
    const id = videosdata.id ? videosdata.id : "0";

    VIDEOS.push({
      thumbnail: thumbnail,
      title: title,
      description: description,
      id: id,
=======
    const VIDEOS: {thumbnail: string, title: string, description: string, id: string}[] = [];
    (Object.keys(videosData) as (keyof typeof videosData)[]).forEach((video) => {
        let videosdata: { [key: string]: any } = videosData[video];
        const thumbnail = videosdata.thumbnail ? videosdata.thumbnail : "https://siparekraf.kamparkab.go.id/assets/images/no-image.png";
        const title = videosdata.title ? videosdata.title : "Title is not available";
        const description = videosdata.description ? videosdata.description : "Description is not available";
        const id = videosdata.id ? videosdata.id : '0';

        VIDEOS.push({
            thumbnail: thumbnail,
            title: title,
            description: description,
            id: id
        });
>>>>>>> ts-ftontend
    });
  });

<<<<<<< HEAD
  return (
    <>
      <CardGrid data={VIDEOS} />
    </>
  );
};

export default Home;
=======
    return ( 
        <>
            <CardGrid data={VIDEOS} />
        </>
    );
}
 
export default Home;
>>>>>>> ts-ftontend
