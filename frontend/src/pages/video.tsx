import { useLocation } from 'react-router-dom';

import YTplayer from '../components/ytplayer'

function useSearchParams(): URLSearchParams {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

const MyComponent = () => {
  const searchParams = useSearchParams();
  const params: { [key: string]: string } = {};

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  
  return (
    <>
      {
        <YTplayer videoId={params['videoId']} />
      }
    </>
  );
}

export default MyComponent;
