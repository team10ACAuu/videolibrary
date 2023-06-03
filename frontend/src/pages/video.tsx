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
        title: 'Titulek není k dispozici',
        description: 'Popisek není k dispozici'
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
      <div style={{
        backgroundColor: '#00', 
        borderRadius: '10px', 
        padding: '20px', 
        marginTop: '5px', 
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
        border: '1px solid #088FFA'
      }}>
        <h2 style={{marginBottom: '22px', fontSize: '28px', color: '#62B8FC'}}>{videosData[0].title}</h2>
        <div style={{padding: '10px', backgroundColor:'#62B8FC',  borderRadius: '10px'}}>
          <p style={{color: '#171717'}}>{videosData[0].description}</p>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
