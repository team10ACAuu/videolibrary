import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import YTplayer from '../components/ytplayer'

function useSearchParams(): URLSearchParams {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

const MyComponent = () => {
  const [videosData, setVideosData] = useState(
    [
      {
        link: '',
        title: '',
        description: ''
      }
    ]
  );

  const searchParams = useSearchParams();
  const params: { [key: string]: string } = {};

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  useEffect(() => {
    const fetchVideoData = async () => {
      const response = await fetch('/api/'+params.id)
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

  return (
    <>
      {<YTplayer videoId={videosData[0].link} />}
      {videosData[0].title}
      <br />
      {videosData[0].description}
    </>
  );
}

export default MyComponent;
